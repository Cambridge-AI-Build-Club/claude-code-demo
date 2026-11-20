// PostToolUse hook: after a .js file is edited, run the tests and hand any failure back to Claude.
const { spawnSync } = require("child_process");
let d = "";
process.stdin.on("data", (c) => (d += c)).on("end", () => {
  const input = JSON.parse(d);
  const path = (input.tool_input && input.tool_input.file_path) || "";
  if (!path.endsWith(".js")) process.exit(0);
  const r = spawnSync("node", ["--test"], { cwd: process.env.CLAUDE_PROJECT_DIR || process.cwd(), encoding: "utf8" });
  if (r.status !== 0) {
    const out = (r.stdout + r.stderr).trim().split("\n").slice(-25).join("\n");
    console.error("The tests failed after this edit. Fix them before you carry on.\n" + out);
    process.exit(2);
  }
  process.exit(0);
});
