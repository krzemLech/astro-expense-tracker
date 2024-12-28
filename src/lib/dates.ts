export const getDayFromParams = (Astro: any) =>
  Astro.url.searchParams.get("day") || 0;

export const getDateBack = (days: string | number) => {
  const dayInt = typeof days === "string" ? parseInt(days) : days;
  const date = new Date();
  date.setDate(date.getDate() - dayInt);
  return { date, dayInt };
};

export const formatDate = (date: Date) => {
  return Intl.DateTimeFormat("pl-PL").format(date);
};

export const formatDbDate = (date: Date) => {
  return date.toISOString().slice(0, 10);
};

export const testDbDate = (date: string) => {
  return /^\d{4}-\d{2}-\d{2}$/.test(date);
};
