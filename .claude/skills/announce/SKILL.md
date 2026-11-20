---
name: announce
description: Write a short club chat announcement for one event. Only run when the user types /announce.
disable-model-invocation: true
argument-hint: "[event title]"
allowed-tools: Read
---

# Announce an event

Find the event called "$ARGUMENTS" in events.js. If there is no exact match, use the closest title and say which one you picked.

Write a message for the club group chat:
- First line: the title, then the date and time as they read on the page.
- One sentence on what members will do, written for someone with no coding background.
- Last line: "Bring a laptop with Claude Code installed."

Keep it under 60 words. Don't change any files.
