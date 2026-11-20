// SessionStart hook: whatever this prints is added to Claude's context at the start of the session.
const path = require("path");
const dir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const { EVENTS, upcoming, formatDate } = require(path.join(dir, "events.js"));
const today = new Date().toISOString().slice(0, 10);
const next = upcoming(EVENTS, today)[0];
console.log(next
  ? `Next club event: ${next.title}, ${formatDate(next.date)}, ${next.start}–${next.end}, ${next.location}.`
  : "There are no upcoming club events in events.js.");
