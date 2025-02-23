export function convertToIndianTime(utcTimestamp: string) {
  const date = new Date(utcTimestamp);

  return date.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
