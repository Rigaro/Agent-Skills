---
name: stakeholder-updates
description: 'Make a strategy, investor or board-style update in two parts: a one-screen visual email (a Gmail draft with a hero line, 4 big numbers, 5 coloured-dot rows and a "For discussion" box) and an on-brand A4 PDF pack that holds the detail without repeating the email. Use for a monthly strategy or management meeting update, a quarterly shareholder or investor update, a board-style pack, or whenever someone asks for a strategy memo, investor update or meeting pack. Gathers figures from the newest finance paper and the live systems, writes the content once as data, builds Gmail-safe HTML and a Playwright-rendered PDF, checks both by rendering them, and never sends: the person attaches the PDF and sends it. Holds the method only; recipients, thread ids, brand, house rules and figures live in project memory or a shared context drive.'
license: Unlicense
metadata:
  tags: "Investor Update, Board Pack, Stakeholder Communication, Email, PDF, Playwright, ADHD"
  category: "productivity"
---

# Stakeholder updates

Strategy, investor and board-style updates come in **two parts**. Never send one long memo, because long memos get skimmed or skipped, and a reader with ADHD finds them painful.

1. **A one-screen email.** It gives the key points and gets read first.
2. **An on-brand PDF.** It is attached to the email and holds the detail. It never repeats the email's "At a glance" rows.

This file is the method. The specifics for each organisation live elsewhere, so read them first:

- **Project memory** (the entry for strategy or stakeholder updates). It covers recipients, the email thread to reply in, where the builders and PDF template are kept, house wording rules, what must stay confidential, and last update's numbers and open items.
- **The shared context drive**, if the organisation keeps one (for example, the agent-context skill). It covers company facts, the brand and design system, approved claims wording, and decisions.

If memory has no entry yet, ask the person once for the recipients, the meeting name, and which figures are confidential. Then save their answers.

## 1. Pick the variant

| Variant | Typical cadence | Audience | Shape |
|---|---|---|---|
| Meeting update | Monthly, before the strategy or management meeting | Leadership team, advisors, close partners | The full page library, about 5 pages |
| Shareholder or investor update | Quarterly | Investors | 3 to 4 pages, more narrative, highlight imagery |
| Board-style pack | As needed | Board and management | Same look; sits beside the finance team's board papers |

## 2. Gather (read only)

1. **Meeting date and time:** take them from the calendar. They move, so never reuse last month's.
2. **Finance:**
   - The newest finance or CFO paper wins over any older pack.
   - Use the bank balance, not the accounting system.
   - Take month-end cash, the low points, what the forecast depends on, and what happens if things slip.
   - Never build your own forecast.
3. **Last update's open items:** read the previous email and pack, and say what happened to each item.
4. **Everything else** (commercial, product and R&D, regulatory, grants, team and admin):
   - Start from the shared context docs and any current-state doc.
   - Check them against the live systems (task tracker, chat, email, CRM). The live systems win.
5. **People:** check names and pronouns in the team directory before you write about anyone.

## 3. Write the content once

Write the content as data first, as a dict or JSON. Both builders read from that one source, so the email and the PDF can't disagree.

- **Hero line:** one or two sentences with the biggest news and the cash position.
- **4 KPIs:** the big number first, then a label of no more than 6 words. Colour each by status.
- **5 status rows:** a label of 1 or 2 words, then one sentence.
- **For discussion:** 2 to 4 items. Mark any item you added as a suggestion until the person confirms it.
- **PDF sections:** the detail behind each row, with the sources.

Style rules:

- One idea per line, the big number first, and short labels.
- No row cell longer than 2 lines.
- Three status colours, with the same meaning everywhere: **on track**, **watch**, and **info or next**. Take the actual colours from the brand. If it has none, use cyan, pink and indigo.

## 4. Build the email (Gmail draft, never sent)

- **Where:** create a Gmail draft that **replies to the last update in the recurring meeting thread**, so the history stays together. Use the same recipients unless memory says otherwise.
- **What Gmail strips:** drafts created through the API **lose CSS backgrounds and non-inline images**, so white text on a coloured box disappears.
- **What survives:**
  - a 600 px table layout with inline styles;
  - text colour, borders, and `bgcolor` on `<td>`;
  - coloured dots written as `&#9679;`;
  - a text wordmark, or a hosted logo image;
  - the brand font with web-safe fallbacks.
- **Layout** (it must fit on one screen), in this order:
  1. wordmark;
  2. meeting line;
  3. title;
  4. one-line intro;
  5. hero line with a left border;
  6. KPI strip;
  7. "At a glance" rows;
  8. "For discussion" panel (light `bgcolor`, dark text);
  9. two-line sign-off.
- **Check it:** read the draft back, render its HTML in Playwright, and look at the screenshot before you hand it over.
- **Attachments:** a PDF is usually too big to attach through the tool, so the person attaches it and sends.

## 5. Build the PDF

- **Builder:** use the organisation's PDF template if memory names one. Otherwise, copy last update's builder into a new `YYYY-MM` folder and update its data. Python writes the HTML and Playwright `page.pdf` prints it, with A4 and `preferCSSPageSize`.
- **Look:**
  - Follow the organisation's design system: fonts, colour tokens and composition rules.
  - Use generous space and few boxes, no more than 4 containers on a page.
  - A4 portrait, with body text at 10.5 pt or larger.
  - A footer on every page with the logo, the document name, "Confidential" and the page number.
- **Pages:** each one works on its own, so a pack can be 4 pages or 8.
  - **Cover:** the brand band with logo and title, and the hero line. It does **not** repeat the email's rows.
  - **Financials:**
    - an SVG month-end cash chart (actuals vs budget, low points highlighted);
    - a balance table;
    - "depends on" and "if things slip" lists;
    - a source line.
  - **Commercial:** a milestone timeline, a pipeline KPI strip, and rows by region or segment.
  - **Product, R&D, regulatory and grants:** a KPI strip, the development pipeline, and a grants table.
  - **Team and admin:** a people table and admin status rows.
- **Emoji and photos:**
  - No emoji; use coloured dots instead.
  - No photos of people unless their consent is recorded as cleared for external readers.
- **Check by rendering:**
  1. Confirm the fonts loaded.
  2. Screenshot every page.
  3. Look for overflow, clipped text, and decoration overlapping text.
  4. Fix what you find and render again.
- **Name and save:** call it `<Org> <Variant> - <Mon YYYY>.pdf` and save it in the project files.

## 6. Content rules

- **Who will read it:** when partners, distributors or advisors receive the pack, leave out **margins, staff pay rates and individual costs**. Those stay in the finance team's board papers.
- **Personnel matters:** leave sensitive ones out (departures, step-downs, performance) unless the person says to include them.
- **House wording:** follow the organisation's rules, such as what the meeting is called and how regulatory status is described. They are in memory or the claims docs.
- **Figures:** every figure must match its source, and the page cites that source.

## 7. Pitfalls

- **Gmail** strips backgrounds and images. Test with a rendered screenshot, not by reading the HTML.
- **Drive HTML uploads:** two `$` amounts in one sentence can drop the text between them. Read back every doc you upload.
- **Stale numbers:** a newer finance paper can land mid-draft. Check again just before you hand over.

## 8. Hand back

Reply in one short message:

- the hero line and the 4 KPIs;
- the draft link;
- the PDF, attached;
- what needs the person's eye (suggested discussion items, unconfirmed figures).

After it has been sent:

- record the month's numbers, open items and file locations in project memory;
- update the tracking task;
- log new decisions where the organisation keeps them.
