---
name: agent-context
description: 'Read and write a team''s shared agent context in a Google Drive shared drive called "Agent Context": a bootstrap doc with the rules, one folder per organisation with an index, topic docs and a decision log. Use at the start of work for an organisation that keeps such a drive, whenever a decision is made that other projects or people should know, and to bootstrap a new person or agent project: survey, then a consolidation plan with conflicts for the person to resolve, then apply only what they approve. Every entry is signed by the responsible human ("YYYY-MM-DD · Full name · via Agent, project"), organisations stay separate, and the skill holds the method only, never company data.'
license: Unlicense
metadata:
  tags: "Shared Context, Multi-Agent, Decision Log, Google Drive, Knowledge Management"
  category: "productivity"
---

# Agent Context

A team keeps shared context for its AI agents in a Google Drive shared drive called **Agent Context**. Every agent, whoever it works for, reads from it and writes signed entries back. This skill is the method; the facts live in the drive, so this file holds no company data.

## 1. Find the drive

1. Search Drive by title for **"Agent Context bootstrap"**. That doc is the source of truth for the rules below; where it differs from this skill, the bootstrap wins.
2. If it isn't found, tell your person they need access to the Agent Context shared drive and a connected Google Drive, then stop.

## 2. Read

1. Work out the organisation (scope) of the task. Project instructions usually say it ("Scope: Acme"). If unclear, ask.
2. Open that organisation's index: search titles for **"CTX <Organisation> – 00 Index"**.
3. Read only the documents the task needs, starting with the defaults your project instructions list. All context docs are titled "CTX <Organisation> – <Topic>".
4. Keep organisations apart: never use one organisation's context in another's work.
5. If a document and your own memory disagree, the newer signed entry wins. Live systems (CRM, task tracker, accounting) win on current state.

## 3. Write

1. **Decisions** that affect more than one project or person: add one signed row at the top of the organisation's Decision log, in the same turn the decision is made, and tell your person.
2. **Facts** that change: edit the topic document in place, update its "Last updated" line, and add one line to its Change log.
3. Keep each document under about two pages; link to detail instead of copying it. Confidential material stays where it lives and is only linked.
4. Never delete a document; move it to Archive/ and take it off the index.
5. Writing in the drive is fine. Anything that reaches people outside it (chat, email, tasks) needs your person's OK first.

## 4. Sign every entry

Every entry you add or change is signed by **the person responsible**: the human you work for, who asked for or approved the change. You never sign as yourself alone.

- Format: `YYYY-MM-DD · Full name · via <Agent>, <project or chat>`
  Example: `2026-10-27 · Jane Citizen · via Claude, Marketing project`
- Decision logs: fill "Responsible person" and "Logged via (agent · project)".
- Topic documents: the "Last updated" line and one Change log line.
- Sign only for your own person. To record someone else's decision, name them and the source: "Decided by <name> (<source, date>); logged by <your person> via <agent, project>".
- Never edit or remove another person's signed entry. Add a new signed row that says what it supersedes.
- Treat unsigned entries as unconfirmed; check with the named person before relying on them. Drive version history shows which account made each edit.
- If you don't know your person's full name, ask once and remember it.

## 5. Bootstrap a person or project (plan first)

When your person says "set me up", "bootstrap this project" or similar, never write straight away. Bootstrapping runs in three phases, and nothing is written to the drive until your person approves the plan.

**Phase 1: Survey (read only)**

1. Read the bootstrap doc in full, then the index and every topic doc for the organisation(s) this project works for.
2. Confirm the full name to sign with and which organisation(s) the project covers.
3. Gather what this project already knows: its memory, instructions, files and recent decisions.

**Phase 2: Plan, and ask your person to resolve conflicts**

Send your person one consolidation plan, short and in tables, with four groups:

| Group | What goes in it |
| --- | --- |
| Already covered | What you know that the drive already says. Nothing to do. |
| New to add | Facts or decisions the drive lacks, the doc each would go into, and whether it needs a new topic doc. |
| Conflicts | Each place your knowledge and the drive disagree: what the drive says (with its signed entry and date), what you have (with its source and date), and your recommendation. |
| Stays local | What is specialist to this project and should stay in its own memory. |

Ask your person to decide every conflict, one decision at a time if there are several. Don't resolve a conflict yourself, and don't overwrite a signed entry, even if yours looks newer.

**Phase 3: Apply (only after approval)**

1. Write only what was approved: new rows and edits, each signed for your person; conflict outcomes as new signed decision-log rows that say what they supersede.
2. If the organisation folder is empty or holds only starter files, follow the bootstrap's "Set up an organisation folder" steps.
3. Move shared facts out of the project's own memory, or point them at the drive, so the two don't drift.
4. Suggest the filled-in lines from the bootstrap's "Lines for an agent project's instructions" section for your person to paste into the project's instructions (you can't change project settings yourself).
5. Report what you changed, with links.
