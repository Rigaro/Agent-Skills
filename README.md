# Agent-Skills

Reusable [Agent Skills](https://agentskills.io) for agentic software development and knowledge work, packaged as a Claude Code plugin marketplace.

## Skills

| Plugin | Skill | What it does |
| --- | --- | --- |
| `structured-depth` | [`structured-depth`](skills/structured-depth/SKILL.md) | Shapes substantive replies and agent-facing artifacts (PR bodies, review verdicts, closure reports) for a visual reader with ADHD who still wants the full reasoning: an "At a glance" block with 🔴🟠🟢 urgency markers first, the why in short headed chunks and tables, state and next steps in a table, one decision at a time, and a "For agents" block for the precision. |
| | [`visual-companion`](skills/visual-companion/SKILL.md) | Picks the visual for a reply or page (table, collapsed evidence, callout, Mermaid diagram, companion artifact page) by what the surface renders, and checks it by rendering and looking. Ships scripts that pre-render Mermaid to light and dark SVG and screenshot the page. |
| `unity-workflows` | [`unity-live-editor-loop`](skills/unity-live-editor-loop/SKILL.md) | Routes work across the Unity MCP server, Meta XR bridge and Unity CLI, and keeps the edit-compile-test-play loop safe. |
| | [`unity-safe-mode-recovery`](skills/unity-safe-mode-recovery/SKILL.md) | Detects and recovers a Unity editor in Safe Mode, stuck compiling, or unreachable from MCP and CLI tools. |
| | [`unity-tests-without-asmdef`](skills/unity-tests-without-asmdef/SKILL.md) | Adds and runs NUnit EditMode tests in a Unity project that has no assembly definitions. |
| | [`unity-doc-audit`](skills/unity-doc-audit/SKILL.md) | Audits and improves Unity script documentation and onboarding without changing behaviour. |
| `regulated-software` | [`iec62304-verification-log`](skills/iec62304-verification-log/SKILL.md) | Writes pull request bodies that double as IEC 62304 verification records. |

## Install

**Claude Code**, one plugin at a time:

```
/plugin install structured-depth --marketplace Rigaro/Agent-Skills
/plugin install unity-workflows --marketplace Rigaro/Agent-Skills
/plugin install regulated-software --marketplace Rigaro/Agent-Skills
```

On Claude Code before 2.1.275, add the marketplace first with `/plugin marketplace add Rigaro/Agent-Skills`, then `/plugin install <plugin>@rigaro-agent-skills`.

**claude.ai**: build the archives and upload a `dist/<skill>.skill` file in the Skills section of your settings.

```
python scripts/package_skills.py
```

**Any agent that reads skill folders**: copy `skills/<skill>/` into its skills directory (for Claude Code, `~/.claude/skills/<skill>/`).

## Layout

```
.claude-plugin/marketplace.json   plugins and the skills each one bundles
skills/<skill>/SKILL.md           one folder per skill: frontmatter (name, description) and instructions
skills/<skill>/scripts/           helper scripts the skill runs, where it has any
scripts/package_skills.py         builds dist/<skill>.skill archives for claude.ai (dist/ is not committed)
```

## Adding a skill

1. Create `skills/<skill>/SKILL.md`; the frontmatter `name` matches the folder name, and the `description` says what the skill does and when to use it (1024 characters at most).
2. Add `./skills/<skill>` to a plugin's `skills` list in `.claude-plugin/marketplace.json`, or add a new plugin entry.
3. Check with `claude plugin validate . --strict` and `python scripts/package_skills.py <skill>`.
4. Add a row to the table above.

## License

Released under the Unlicense. See [LICENSE](LICENSE).
