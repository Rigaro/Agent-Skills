---
name: virtetic-strategy-update
description: 'Make a Virtetic strategy, investor or board-style update in two parts: a one-screen visual email (a Gmail draft with a hero line, 4 big numbers, 5 coloured-dot rows and a "For discussion" box) and an on-brand A4 PDF pack that holds the detail. Use for the monthly Virtetic Strategy Meeting update, the quarterly shareholder or investor update, or a board-style pack, and whenever someone asks for a strategy memo, investor update or meeting pack for Virtetic. Gathers figures from the newest CFO paper and the live systems, writes the content once, builds Gmail-safe HTML and a Playwright-rendered PDF, checks both by rendering them, and never sends: the person attaches the PDF and sends it. Holds the method only; recipients, thread ids and figures live in project memory and the Agent Context drive.'
license: Unlicense
metadata:
  tags: "Investor Update, Board Pack, Email, PDF, Playwright, ADHD"
  category: "productivity"
---

# Virtetic strategy update

Strategy, investor and board-style updates come in **two parts**. Never send one long memo: the reader is visual, has ADHD, and found long memos "a pain".

1. **A one-screen email.** It covers the key points and gets read first.
2. **An on-brand PDF.** It holds the detail and is attached to the email. It never repeats the email's "At a glance" rows.

This file is the method. The specifics live elsewhere, so read them first:

- **Project memory** (the strategy update entry) has the recipients, the Gmail thread to reply in, where the builders and the PDF template live, and last month's numbers and open items.
- **The Agent Context drive** (`CTX Virtetic` docs and the Decision log) has company facts, approved claims wording and decisions.

## 1. Pick the variant

| Variant | When | Audience | Shape |
|---|---|---|---|
| Strategy Meeting update | Monthly, before the Virtetic Strategy Meeting | Exec team, advisors, the distributor | Full page library, about 5 pages |
| Shareholder or investor update | Quarterly (Jan, Apr, Jul, Oct) | Investors | 3 to 4 pages, more narrative, highlight imagery |
| Board-style pack | As needed | Board and management | Same look, sits beside the CFO's board papers |

## 2. Gather (read only)

1. **Meeting date and time** from Calendar. It moves, so never reuse last month's.
2. **Finance.** The newest CFO board paper or CFO dispatch wins over any older finance pack. Use the bank balance, not the accounting system. Take the month-end cash, the low points, what the forecast depends on and what happens if things slip. Never build your own forecast.
3. **Last update's open items.** Read the previous email and pack, and say what happened to each item.
4. **Commercial, R&D, regulatory, grants, team and admin.** Use the CTX docs and the Current State doc, then check them against the live systems (Asana, Slack, Gmail, Airtable). Where they disagree, the live systems win.
5. **People.** Check pronouns in the team directory before writing about anyone.

## 3. Write the content once

Write the content as data first (a dict or JSON). Then both builders read from the same source, and the email and the PDF can't disagree.

- **Hero line:** one or two sentences with the biggest news and the cash position.
- **4 KPIs:** the big number first, then a label of no more than 6 words. Colour each by status.
- **5 status rows:** a label of 1 or 2 words, then one sentence.
- **For discussion:** 2 to 4 items. Mark any item you added as a suggestion until the person confirms it.
- **PDF sections:** the detail behind each row, with the sources.

Style: one idea per line, the big number first, short labels, and no row cell longer than 2 lines. The status dots mean the same thing everywhere: **cyan** = on track, **pink** = watch, **indigo** = info or next.

## 4. Build the email (Gmail draft, never sent)

- Create a Gmail draft that **replies to the last update in the recurring meeting thread**, to the same recipients. Both are in project memory.
- Drafts created through the API **lose CSS backgrounds and any non-inline images**, so white text on a coloured box disappears. Only these survive:
  - a 600 px table layout with inline styles;
  - text colour, borders, and `bgcolor` on `<td>`;
  - coloured dots written as `&#9679;`;
  - a text wordmark (or a hosted logo, once marketing supplies one);
  - fonts in this order: `'Space Grotesk', Helvetica, Arial`.
- Layout, which fits on one screen:
  1. wordmark;
  2. meeting line;
  3. title;
  4. one-line intro;
  5. hero line with a left border;
  6. KPI strip;
  7. "At a glance" rows;
  8. a "For discussion" panel (light `bgcolor`, dark text);
  9. a 2-line sign-off.
- Read the draft back, render its HTML in Playwright, and look at the screenshot before you hand it over.
- The PDF is too big to attach through the tool. The person attaches it and sends.

## 5. Build the PDF

- **Builder:** use the marketing PDF template if memory names one. Otherwise copy last month's builder (Python writes HTML, and Playwright `page.pdf` prints it) into a new `YYYY-MM` folder and update its data.
- **Look:** follow the Virtetic Design System (Sep 2026).
  - Fonts are Space Grotesk and Roboto Mono, with the Virt Dark, indigo and cyan tokens.
  - "Less boxes, more space", with no more than 4 containers on a page.
  - A4 portrait, with body text at 10.5 pt or larger.
  - Every page has a footer with the logo, the document name, "Confidential" and the page number.
- **Pages** (each one works on its own, so a pack can be 4 pages or 8):
  - **Cover:** the dark band with logo and title, and the hero line. It does **not** repeat the email's rows.
  - **Financials:** an SVG month-end cash chart (actuals vs budget, low points highlighted), a balance table, "depends on" and "if things slip" lists, and a source line.
  - **Commercial:** a milestone timeline, a pipeline KPI strip, and rows by region.
  - **R&D, regulatory and grants:** a KPI strip, the dev pipeline, research and regulatory, and a grants table.
  - **Team and admin:** a people table and admin status rows.
- **No emoji** (use coloured dots). **No people photos** unless their consent is recorded as cleared for external readers.
- **Check by rendering:**
  - confirm the fonts loaded;
  - screenshot every page;
  - check for overflow, clipped text, and decoration overlapping text;
  - fix, then render again.
- Name it `Virtetic Strategy Update - <Mon YYYY>.pdf` (or `Investor Update`) and save it in the project files.

## 6. Content rules

- Call it the **"Virtetic Strategy Meeting"**, never a "board meeting".
- The distributor and advisors receive these, so leave out **margins, staff pay rates and individual costs**. Those stay in the CFO's board papers.
- Leave sensitive personnel matters (departures, step-downs, performance) out unless the person says to include them.
- Regulatory wording: write "CE marked" and never use the CE logo. Follow the approved claims wording in the CTX docs.
- Every figure must match its source. Cite the source on the page.

## 7. Pitfalls

- **Gmail** strips backgrounds and images. Test with a rendered screenshot, not by reading the HTML.
- **Drive HTML uploads:** two `$` amounts in one sentence can drop the text between them. Read every uploaded doc back.
- **Stale numbers:** a newer CFO paper can arrive mid-draft. Check again just before you hand over.

## 8. Hand back

Reply in one short message:

- the hero line and the 4 KPIs;
- the draft link;
- the PDF, attached;
- what still needs the person's eye (suggested discussion items, unconfirmed figures).

Once it has been sent:

- record the month's numbers, open items and file locations in project memory;
- close or update the tracking task;
- log any new decisions in the Agent Context Decision log, signed for the person.
