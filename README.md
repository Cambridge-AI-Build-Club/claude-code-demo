# cbc-demo

The Claude Builder Club @ Cambridge events page, used in Workshop 3: *Exploring Claude Code with Technical Details* (Saturday 21 November 2026).

The site is three plain files (`index.html`, `style.css`, `app.js`) and one list of events (`events.js`), with tests in `events.test.js`. The interesting part is the `.claude` folder, which has one working example of each Claude Code feature:

```
CLAUDE.md                          instructions for every session (shared)
.claude/
├── settings.json                  permissions and hooks
├── rules/
│   ├── writing.md                 always loaded
│   └── style.md                   loaded only when Claude opens a .css file
├── skills/
│   ├── add-event/                 Claude uses it when you ask to add an event
│   └── announce/                  only you can start it: /announce <event>
├── hooks/
│   ├── next-event.js              SessionStart: tells Claude the next event
│   ├── protect-files.js           PreToolUse: blocks edits to .env and the tests
│   └── run-tests.js               PostToolUse: runs the tests after each .js edit
└── agents/
    └── beginner-reviewer.md       a read-only reviewer sub-agent
```

## Get started

You need [Claude Code](https://code.claude.com/docs) and Node.js 18 or later.

```bash
git clone https://github.com/sileneer/cbc-demo.git
cd cbc-demo
node --test
claude
```

The first time you run `claude` here, accept the trust dialog. Until you do, the project's permission rules are ignored.

## Start again

To undo every change Claude made during the workshop:

```bash
git checkout -- .
```
