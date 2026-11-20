const test = require("node:test");
const assert = require("node:assert");
const { upcoming, formatDate } = require("./events.js");

const sample = [
  { title: "C", date: "2026-12-05" },
  { title: "A", date: "2026-11-07" },
  { title: "B", date: "2026-11-28" },
];

test("hides past events and sorts upcoming", () => {
  const titles = upcoming(sample, "2026-11-21").map((e) => e.title);
  assert.deepStrictEqual(titles, ["B", "C"]);
});

test("formats dates the club way", () => {
  assert.strictEqual(formatDate("2026-11-21"), "Sat 21 Nov");
});
