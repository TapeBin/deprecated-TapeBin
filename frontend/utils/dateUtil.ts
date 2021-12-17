export function getFormattedDate(date: number | Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
  }).format(date);
}
