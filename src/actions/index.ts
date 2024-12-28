import { db, Expenses, eq, count } from "astro:db";
import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import crypto from "crypto";
import { testDbDate } from "@/lib/dates";
import { MAX_EXPENSE_ITEMS } from "@/config";

const generateId = () => crypto.randomBytes(16).toString("hex");

export const server = {
  addExpense: defineAction({
    accept: "form",
    input: z.object({
      title: z.string().min(5, "Title must be at least 5 characters"),
      amount: z.number().min(0),
      createdAt: z.string().refine((value) => testDbDate(value), {
        message: "Date must be in format yyyy-mm-dd",
      }),
    }),
    handler: async ({ title, amount, createdAt }) => {
      try {
        const docsCount = await db.select({ value: count() }).from(Expenses);
        if (docsCount[0].value > MAX_EXPENSE_ITEMS) {
          throw new Error(
            `You have reached the limit of ${MAX_EXPENSE_ITEMS} expenses, delete some to add more`
          );
        }
        await db.insert(Expenses).values({
          id: generateId(),
          title,
          amount,
          created_at: createdAt,
        });
        return { success: true };
      } catch (error) {
        console.log(error);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: (error as Error).message,
        });
      }
    },
  }),
  getExpenses: defineAction({
    handler: async () => {
      const expenses = await db
        .select()
        .from(Expenses)
        .orderBy(Expenses.created_at);
      return {
        expenses,
        total: expenses.reduce((acc, curr) => acc + curr.amount, 0),
      };
    },
  }),
  removeExpense: defineAction({
    input: z.object({
      id: z.string().min(4).max(45),
    }),
    handler: async ({ id }) => {
      try {
        return await db.delete(Expenses).where(eq(Expenses.id, id)).returning();
      } catch (error) {
        console.log(error);
        return new Response("Failed to delete", { status: 500 });
      }
    },
  }),
};
