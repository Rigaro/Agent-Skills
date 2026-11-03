---
name: agent-context
description: 'Read and write a team''s shared agent context in a Google Drive shared drive called "Agent Context": a bootstrap doc with the rules, one folder per organisation with an index, topic docs and a decision log. Use at the start of work for an organisation that keeps such a drive; whenever a decision is made or a shared fact changes (flag it in one line and write it once the person says yes); for the weekly shared context harvest (scan the past week''s threads, propose one table of updates, edit only after approval); and to bootstrap a new person or agent project, plan first. Every entry is signed by the responsible human ("YYYY-MM-DD · Full name · via Agent, project"), organisations stay separate, and the skill holds the method only, never company data.'
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
6. **Stay in sync.** Keep a "last synced with Agent Context" date in your project's memory. At the start of related work, read every Decision log row newer than that date, then set it to today.
7. **Log your visit.** Drive can't tell agents apart when they share a person's account, so agents record their own access. The first time each day you use the drive, add one row at the bottom of **"CTX Sync log"** (drive root): date, person, agent · project, organisation, docs read, docs changed. If you change more docs later that day, add them to the same row. A periodic read-only check uses this log and the docs' edit dates to flag stale docs and quiet projects.

## 3. Write

1. **Flag as you go.** Whenever your person makes a decision or a shared fact changes in a thread (pricing, ownership, process, team, claims, dates), ask them in one line right then: "Shared context change? <doc + proposed row or line>". Don't save it up for the end of the thread or the weekly harvest (section 6). Once they say yes, make the edit in that same turn. If they say no, or that it stays local to this project, drop it.
2. **Decisions** that affect more than one project or person: add one signed row at the top of the organisation's Decision log, and tell your person.
3. **Facts** that change: edit the topic document in place, update its "Last updated" line, and add one line to its Change log.
4. **Owners.** The index names each document's owner project. If it names a different project than yours, change that document's facts only once your person has approved, and add a Decision log row that names the owner project so it can update its own memory.
5. **Safe edits.** Edit only the lines that change; never rewrite a whole document. Re-read it afterwards to check the formatting survived. Watch for `$`: Markdown can turn the text between two `$` signs (prices such as A$3,650 … A$320) into an equation.
6. **One fact, one version.** Before writing a fact, search the drive for it and update every document that states it, so documents don't disagree.
7. Keep each document under about two pages; link to detail instead of copying it. When one grows past that, fold settled Decision log rows into the topic documents or split it, and update the index. Confidential material stays where it lives and is only linked.
8. Never delete a document; move it to Archive/ and take it off the index.
9. Writing in the drive is fine. Anything that reaches people outside it (chat, email, tasks) needs your person's OK first.
10. **Before you finish** a task that changed a shared fact or decision, update the drive, or tell your person why not.

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

1. Write only what was approved, following every rule in section 3: new rows and edits, each signed for your person; conflict outcomes as new signed decision-log rows that say what they supersede.
2. If the organisation folder is empty or holds only starter files, follow the bootstrap's "Set up an organisation folder" steps.
3. Move shared facts out of the project's own memory, or point them at the drive, so the two don't drift.
4. Suggest the filled-in lines from the bootstrap's "Lines for an agent project's instructions" section for your person to paste into the project's instructions (you can't change project settings yourself). Include the "Flag as you go" and "Weekly harvest" lines and the routine from section 6.
5. Finish with a closing report to your person: every document you touched, with links, and any open questions.

## 6. Weekly harvest

Flagging as you go (section 3) catches most changes, but some slip past: a decision buried in a long thread, or a fact that changed in a side remark. Once a week, each project sweeps its own recent threads for them.

**When:** a weekly routine in each project, Fridays at 9am in your person's time zone (before any end-of-week recap), or when your person says "shared context harvest" or "harvest shared context". The routine is set per project: you can't create routines in other projects, so each person adds it to their own projects.

**Steps (read only until approved):**

1. Read the bootstrap doc, the organisation's index and every Decision log row newer than your "last synced" date (section 2).
2. List every thread in this project active in the past 7 days (or since the last harvest, if that was longer ago). Read each one and note every decision or changed fact: pricing, ownership, process, team, claims, dates.
3. Drop what is already in the drive (search for it, section 3 "One fact, one version"), what your person already declined when you flagged it, and what is specialist to this project and stays local.
4. For each item left, find the document and line it belongs in. If the drive says something different, it's a conflict: show both versions, with their signed entry or source and date, and recommend one.
5. Send your person one reply: a short "At a glance" summary (five lines at most), then one table.

   | # | Doc | Proposed change | Why (thread, date) | Type |
   | --- | --- | --- | --- | --- |
   | 1 | CTX <Organisation> – <Topic> | the row or line to add or change | where it was decided | New, Update or Conflict |

   Mark any document whose index owner is another project; changing it needs your person's approval and a Decision log row naming that owner (section 3).
   If nothing turned up, say so in one line and skip the table.
6. **Edit nothing until your person approves.** They can approve all, approve by number, or reject. Ask about conflicts one at a time.
7. Apply only what was approved, following sections 3 and 4: signed Decision log rows, topic doc edits with "Last updated" and Change log lines.
8. Add or extend today's CTX Sync log row, set "last synced" in your project's memory to today, and finish with a short report: each document touched, with links.

**The routine** (fill in the angle brackets for each project):

- Schedule: Fridays, 9am in your person's time zone. Routines often take a cron schedule in UTC; work it out from the offset in force (for example, 9am Friday in Melbourne during daylight saving, UTC+11, is `0 22 * * 4`), and move it when daylight saving starts or ends.
- Prompt:

  > Run the weekly shared context harvest (agent-context skill, section 6) for scope <Organisation>. Read every thread in this project active in the past 7 days, compare its decisions and changed facts with the Agent Context drive, and send <person> an At a glance block plus one table (doc, change, why). Edit nothing until <person> approves. Then write only the approved changes, signed as <Full name> via <Agent>, <project>; log a CTX Sync log row; and update "last synced" in project memory.

**Lines for the project's instructions** (under its "Shared context" lines):

> **Flag as you go:** whenever <person> makes a decision or a fact changes in a thread (pricing, ownership, process, team, claims, dates), ask in one line right then: "Shared context change? <doc + row>". Make the edit once they say yes. Don't wait for the end of the thread.
>
> **Weekly harvest:** every Friday a routine scans this project's past-week threads against the drive and gives <person> one table of proposed updates. Nothing is edited until they approve.
