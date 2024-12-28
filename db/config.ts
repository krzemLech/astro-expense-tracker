import { defineDb, defineTable, column, NOW, sql } from "astro:db";

const Expenses = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    title: column.text(),
    amount: column.number(),
    created_at: column.text({
      default: sql`(CURRENT_DATE)`,
    }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Expenses },
});
