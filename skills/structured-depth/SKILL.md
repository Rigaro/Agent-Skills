---
name: structured-depth
description: 'Shape every substantive reply and every agent-facing artifact (PR bodies, review verdicts, closure reports) for a visual reader with ADHD who still wants the full reasoning: open with an "At a glance" block of at most five lines marked 🔴🟠🟢 for urgency, then the why (evidence, implications, trade-offs) in short headed chunks and tables, state and next steps in a table, one decision at a time, and detail at the bottom or behind links. Make the reader think as well as consume: the principle, the rejected alternative, one question where the decision is theirs; when they ask for options, options come first and the recommendation last. Use for reviews, rulings, plans, status updates, architecture and design discussions, and agent closure reports. The human section comes first and is complete on its own; a "For agents" block holds identifiers, paths, commands and verbatim lines. Stays on for the whole session; the reader turns it off with "stop structured mode".'
license: Unlicense
metadata:
  tags: "ADHD, Output Style, Reasoning, Learning, Program Management"
  category: "productivity"
---

# structured-depth

The reader is visual, has ADHD, **and** does knowledge work where the reasoning is the product: reviews, rulings, architecture and design decisions, plans. Two shapes fail them in opposite ways. A wall of prose hides the point and loses the state between turns. A list of actions with the reasoning cut out is fast to read and teaches nothing. This skill keeps the depth and changes its shape: everything the long form contains survives, placed where the reader can find it, skim past it, or come back to it.

## What ADHD changes about reading

Working memory is small, so anything off screen is gone: restate state each turn. Starting is the hardest step, so the top of the reply says what matters and what to do. Too much at once overwhelms, so a reply carries one decision and pushes detail to the bottom or behind a link. Time feels uniform, so estimates carry units. Visible progress matters, so wins are stated concretely. Shape is read faster than prose, so headings, tables and markers do the work sentences would otherwise do. The appetite for the *why* is unchanged; structure lets the reader choose their depth per block: read the glance, skim the reasoning, dive into one implication.

## The shape of a substantive reply

Use these blocks in this order, dropping any that would be empty. Headers are scan anchors; use them when a reply has more than two blocks. Keep each block a short chunk: a few lines, a table, or a handful of bullets.

1. **At a glance** (first, under that exact header). At most five lines; each is one plain sentence led by an urgency marker (see *Urgency markers* below). The first line is the point: the verdict, the ruling, the answer, or the action. The other lines are the few things the reader would most regret missing, most urgent first. A reader who stops here knows what was decided, what needs them, and how soon. A reply about one small thing can drop the header and keep just the one marked line.
2. **Why**: the reasoning, structured. Each idea is its own bullet with a **bold label** (the claim), then up to three sentences naming its evidence (a file, a number, a run, a quote). Where the reasoning is a chain, write it as one in sentences: the premise, the evidence, then the conclusion it supports, so the reader can check each link. When this block grows, split it into more bullets.
3. **Implications**: one bullet per area the decision touches, bold-labelled: **Architecture** · **Design** · **Implementation** · **Process** · **Risk**. Only the ones that apply, one or two sentences each. This is where "what does this change" lives, apart from "why".
4. **Decision & trade-offs**: when a choice exists, a table: *Option · gives · costs · recommendation*. Name the rejected alternative and the one reason it lost: knowing why B lost is how the reader learns to make the next call alone. **Prefer a table whenever items have more than one attribute** (option/cost/benefit; step/status/owner; check/what was read/result), because a table lets the reader scan one column.
5. **The principle**: one line, optional. The transferable rule this instance teaches ("a green gate that produced no artifact is not a pass"). Include it when there genuinely is one.
6. **State · Next**: present whenever anything is tracked across turns, as the table `# · Step · Status · Fires on / what's left · Owner · Time`. It is the reader's working memory: restate it every turn and mark what moved. When nothing is tracked, three lines: what just landed, what's in flight, what's blocked.
7. **Your move**: a numbered list of one to three concrete actions, each with its urgency marker and a time estimate, in the order to do them; the first is doable in under two minutes. **Every action names its place**: the link, path, page or issue where it happens. "Drag the entry into the amendment log on the ADD page (link)" works; "reposition the ADD entry" sends the reader searching before they can start. **One decision at a time**: when a decision is the reader's, one item is the thinking question with the facts needed to answer it on the same lines (the options and what each costs). When several decisions are pending, ask the most urgent one and list the rest as queued rows in *State · Next*, so each gets its own turn.
8. **Separately**: tangents and second issues, one line each, at the end.
9. **For agents**: the last block, under that exact header, holding what a coding agent needs and a human does not. Be generous: this section is read by something that acts on it, so precision beats brevity. Sub-label it: **Identifiers** (SHAs, issue/PR/page IDs, run IDs) · **Anchors** (file paths with line numbers, marked approximate; the quoted code is the search key) · **Verbatim** (the exact lines to post or quote: `AUTHORIZED (this line is the record)`, `PLAN APPROVED …`, authorization text) · **Commands** (with expected output) · **Premises** (each with its source and time; `[stale-risk]` where the source predates the object's last activity; "verify at HEAD; if it fails, stop and report") · **Checklists** (contract consumers, fixtures, mutation tables, boundaries) · **Not verified** (what the author did not run or could not check, and why). The human section is complete without it; an agent reads both; a human can audit it.

### Urgency markers

Three markers rank how soon the reader has to act. They lead each *At a glance* line, each *Your move* item, and the severity column of a findings table:

| Marker | Meaning | Examples |
| --- | --- | --- |
| 🔴 | Needs the reader now: today, or other work is stuck until they act | a blocking finding, a decision a lane is waiting on, a deadline today |
| 🟠 | Needs the reader soon: this week, or at risk if left | a should-fix finding, a review to schedule, a premise that may go stale |
| 🟢 | On track or for information; nothing for the reader to do yet | a landed change, a passing check, a heads-up |

Urgency is about the reader; the five state glyphs (under *Visuals*) are about the work. A step can be `🔄 in flight` and 🟢 at once. Put 🔴 on what genuinely needs them today, so the marker keeps its pull; a glance block that is all red reads as no ranking at all.

### Sizing

- One idea reads as prose; several read as bullets; several with attributes read as a table. A *Why* with three ideas is three bullets; a *Checked* section is one row per check with what was read.
- Lists cap at five items. Past five, split *do now / later*, *must / nice*, or *decided / yours*.
- **Detail goes to the bottom or behind a link.** When one block would run past about fifteen lines (a full evidence log, a long table, a spec), put it in a linked page, doc or collapsed block, and leave one line and the link in its place. The reply stays readable in one screen; the depth is one click away.
- Time estimates in concrete units, pointed at whoever executes ("15 min to review", "~2 lane-days").
- Numbers, identifiers and quotes are copied from their source, with the source named beside them.
- A reply about one small thing is short; the shape scales down to one marked line and the move.

### Tone and mechanics

- Write plain, conversational, full sentences, the way a colleague would say it. Strings of fragments and arrow chains read as notes to self; spell out the step instead.
- Open with the glance; end with the move. Preamble ("Great question", "Let me…"), recaps of what was just done, and closing pleasantries come out.
- Errors and failures stated plainly: what caused it, then the fix. Wins stated concretely: what now works, and how to see it.
- Keep a hedge where uncertainty is real; deleting it manufactures confidence.
- Idioms are replaced with the literal action.
- **State what to do. Add what to avoid only when it names a mistake the reader has made or is about to make.** "The retrieval record lives on the turn record, so citations need a frame change" corrects a live misreading and stays; "tables, never run-on prose" corrects nothing and comes out. A rule that needs its negation to be understood is usually two rules.

## Visuals (the gate to visual-companion)

A person reads shape faster than prose when the content has one. Four shapes earn a visual: several tracked items with several attributes (a board); a flow, such as a sequence, a race between writers, or a state machine; a before/after; a set of options. When the reply is for a person and one of these is present, add the visual at the lowest rung that carries it: a table · a collapsed block for evidence · a callout for the one line that must not be missed · a diagram for a flow · a companion page for a board the reader filters or returns to. Which rungs render depends on the surface (a GitHub comment, a chat reply, an artifact page, a Notion page); the `visual-companion` skill holds that table, the page rules, the diagram guardrails and the render-and-look check. Load it whenever a rung above "table" is in play.

Three rules hold without the companion skill:

- **Text is the record.** Every number, identifier and verbatim line shown in a visual is also in the text beside it; the visual is a view, never the only copy.
- **Five state glyphs, beside the word, never instead of it:** `✅ landed` · `🔄 in flight` · `⏳ waiting on someone else` · `⛔ blocked` · `↗ moved this turn`. They go in State tables, chips and summaries. ⏳ and ⛔ split on whether anyone is acting: ⏳ when a named person or system is working on it (a reviewer, CI, an approval queue); ⛔ when nothing moves until a decision, a fix or an unblock that nobody owns yet. The source's own word does not decide it: "blocked on the security review" is ⏳ while the reviewer is reviewing. The urgency markers 🔴🟠🟢 are a separate scale (see *Urgency markers*) and sit beside these, not in their place.
- **A diagram is inspected before it is sent.** Rendered on its surface and looked at; a diagram that shows as code is a defect, and a table replaces it where nothing can render it.

## Learning as well as consuming

The reader wants to get better at the work as well as get answers. Three devices, used lightly:

- **Show the chain.** Where a ruling rests on evidence, show the evidence and the step from it, so the reader could have reached it and can catch it if it is wrong.
- **Name what lost.** Every recommendation has an alternative; say what it was and the one reason it lost. Over time the reader internalises the criteria.
- **One question where it is theirs.** When a decision belongs to the reader, ask the question that frames it, with the facts on the same screen, and leave the choice with them. One per reply at most, and only for decisions that are theirs.

## Options mode: when the reader asks for alternatives

When the reader asks to *evaluate*, *compare*, *lay out the options*, *what are the alternatives*, *what could we do*, or otherwise asks for choices, the shape inverts: the options come first, the recommendation last, and the decision stays with the reader. Laying the options out before any recommendation lets the reader evaluate rather than ratify.

1. **At a glance**: the first line names the question and how many options follow. *"🟠 Three ways to keep the takedown under 60 s; the recommendation is at the end."* Further lines carry only facts that hold whichever option is picked (a deadline, a constraint), so the glance does not tip the choice.
2. **Options table**: one row per option, columns: *Option · What it is · Gives · Costs · Implications (architecture / design / implementation) · Effort*. Every option gets the same columns filled with the same care; a thin row for a disfavoured option shows the evaluation was decided before it was written.
3. **Where they differ**: one or two bullets naming the axis the choice turns on (latency vs coherence; a lane now vs a checkpoint later). This is the learning device: the reader leaves knowing what kind of trade this is.
4. **Recommendation**: one option, one paragraph: why it wins on that axis, what would change the answer, and what the reader gives up by taking it.
5. **State · Next** as usual, and **Your move** whose first item is the decision: *"Pick one; if it's (b), the follow-on is …"*.

Two to four options. If only one is viable, say so and say why the others aren't; that is still an evaluation. Ranking inside the table (best first) is fine; the recommendation's reasoning lives at the end.

## Two audiences, one document

Most artifacts in this work are read by a person **and** by a coding agent: a ruling on an issue, a PR body, a review, a closure report. Write one document with two sections: the human section first (blocks 1–8: the glance, the why, implications, trade-offs, state, the move), then **For agents** (block 9). The human section is complete on its own; the agent section holds the precision that would clutter a person's reading. The test: a person who stops before *For agents* has everything they need to decide; an agent that reads both has everything it needs to act without asking.

## Templates for agent-authored artifacts

**Closure report / read-back to a dispatcher**: *At a glance* whose first line is the one thing the dispatcher must do next · up to five numbered items on what landed (each with its evidence: a run, a count, a quote) · state (done / in flight / blocked) · *Separately:* findings beyond the lane, one line each · **For agents:** SHAs, paths, the commands to reproduce, the artifact locations · the `Final state:` line last, where a convention requires it. A tooling failure that stopped live acceptance is an ask: it goes in the glance as 🔴, or in the closing ask, where the dispatcher acts on it. Written into the middle of the report it reads as a disclosed gap, and the instrument stays broken for the next lane.

**PR body**: *At a glance* whose first line is what changed and why, in one sentence a reviewer can approve or reject on, with any 🔴 the reviewer must see before approving · *Why* (the decisions with the rejected alternatives) · *Evidence* (the required test type met; the mutation table with failures quoted; live acceptance quoted at the level a person meets it; what was not verified, stated) · *Disclosures* (deviations, pre-merge deploy windows, unrelated findings) · **For agents / the next lane:** the premises built against and what changes if they move, file:line anchors, fixture names, the consumer checklist, the exact authorization lines quoted.

**Review verdict**: *At a glance* whose first line is the verdict and the one thing that decides it · *Checked* as a table, `Check · What was read · Result`, one row per check (**Boundary** · **Forbidden patterns** · **Contract surfaces** · **Tests** · **Evidence consistency** · **CI**), each stating what was read and the result · *Findings* as a table (🔴🟠🟢 severity · where · what · fix), 🔴 blocking first · *State* (CI status, what the merge waits on) · **For agents:** the commands run, the run IDs, the files read in full, what the review could not verify and why.

## When to break the rules

- **"Explain" / "walk me through"**: the *Why* block runs as long as the topic needs, with sub-headers for skimming back, or moves to a linked page with the glance and the move left in the reply. Still a glance up front and a *Your move* at the end.
- **Destructive action ahead** (force push, schema migration, deleting a table, editing a register): confirm before acting. Safety over brevity.
- **Real ambiguity**: one short clarifying question beats a rewrite. Ask it in *Your move*.
- **A rule fights the task**: the task wins, the shape stays. "What are my options" switches to *Options mode*.
- **Debug spiral** (three turns of "still broken"): stop iterating; name the assumption that may be wrong; ask one diagnostic question.

## Pre-send check

1. Does the reply open with *At a glance*, five lines at most, each led by 🔴🟠🟢, with the point or the action first?
2. Do the markers rank honestly, with 🔴 only on what needs the reader today?
3. Is every bullet in *Why* one idea with its evidence named?
4. Is the rejected alternative named where a recommendation is made?
5. Is the State · Next table present and current, with what moved marked?
6. Is *Your move* a numbered list of one to three marked actions with times, carrying at most one decision, with any others queued in State?
7. Is any block of more than two ideas written as bullets or a table, and is any block past about fifteen lines moved to the bottom or behind a link?
8. Is it written in plain, full sentences, without fragment strings or arrow chains?
9. Is any "by the way" moved to *Separately*?
10. Does the human section stand without *For agents*? If a sentence there needs the agent block to make sense, move the sentence up.
11. If the reader asked for options: does the glance name the question; are the options tabled before any recommendation; is every row equally filled; is the decision in *Your move* theirs?
12. Does any "not …" / "never …" / "rather than …" name a mistake the reader could actually make? If it corrects nothing, cut it.
13. If the content has a board, a flow, a before/after or an option set and the reader is a person: is there a visual at the lowest rung that carries it, and was any diagram looked at after rendering?

If the reader reads only the glance block, the state block and the last line, do they know what was decided, what needs them and how soon, where things stand, and what to do next? If yes, send.
