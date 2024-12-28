import { db, Expenses } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Expenses).values([
    {
      id: "1234",
      title: "Rent",
      amount: 1000,
      created_at: new Date().toISOString().slice(0, 10),
    },
    {
      id: "2345",
      title: "Groceries",
      amount: 200,
      created_at: new Date().toISOString().slice(0, 10),
    },
    {
      id: "4534",
      title: "Gas",
      amount: 50,
      created_at: new Date().toISOString().slice(0, 10),
    },
    {
      id: "1253",
      title: "Dinner",
      amount: 100,
      created_at: new Date().toISOString().slice(0, 10),
    },
    {
      id: "1366",
      title: "Coffee",
      amount: 5,
      created_at: new Date().toISOString().slice(0, 10),
    },
  ]);
}
