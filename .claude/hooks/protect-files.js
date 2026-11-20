// PreToolUse hook: stop Claude editing .env files or the tests.
// Exit code 2 blocks the edit and sends the message on stderr back to Claude.
let d = "";
process.stdin.on("data", (c) => (d += c)).on("end", () => {
  const input = JSON.parse(d);
  const path = (input.tool_input && input.tool_input.file_path) || "";
  if (path.endsWith(".env")) {
    console.error("Blocked by a project hook: .env files hold secrets, so only a person edits them.");
    process.exit(2);
  }
  if (path.endsWith(".test.js")) {
    console.error("Blocked by a project hook: the tests are protected. Change the code, not the tests, or ask the user.");
    process.exit(2);
  }
  process.exit(0);
});
