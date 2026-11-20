// Club events. Dates are ISO (YYYY-MM-DD); times are 24-hour.
const EVENTS = [
  { title: "Claude Code Foundations", date: "2026-11-07", start: "14:00", end: "15:00", location: "TBC" },
  { title: "Advanced Claude Code", date: "2026-11-14", start: "14:00", end: "15:00", location: "TBC" },
  { title: "Exploring Claude Code with Technical Details", date: "2026-11-21", start: "14:00", end: "15:00", location: "TBC" },
  { title: "MCP Introductions", date: "2026-11-28", start: "14:00", end: "15:00", location: "TBC" },
  { title: "Build MCP Apps", date: "2026-12-05", start: "14:00", end: "15:00", location: "TBC" },
];

// Events on or after `today` (a YYYY-MM-DD string), soonest first.
function upcoming(events, today) {
  return events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

// "2026-11-21" -> "Sat 21 Nov"
function formatDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }).replace(",", "");
}

if (typeof module !== "undefined") module.exports = { EVENTS, upcoming, formatDate };
