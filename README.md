# Agent-Skills

A repository for collecting reusable skills for agentic software development lifecycle workflows and knowledge agents.

## Overview

This project is intended to be a simple home for curated skills that can be added over time as they are created and refined.

At the moment, the repository is intentionally lightweight:

- skills can be added manually as they are created
- the repository now includes its first skill: [`structured-depth`](structured-depth.md)
- the focus is on keeping the repository easy to organize and expand

## What this repository will contain

Over time, this repository can be used to store skills for areas such as:

- planning and task breakdown
- implementation and refactoring workflows
- testing and validation
- code review and security review
- knowledge retrieval and synthesis

## Usage

Use this repository as a central place to maintain your skills library. Add new skills manually whenever you create one, and organize them in the structure that best fits your workflow.

## Current skills

- [`structured-depth`](structured-depth.md) — an output-structuring skill for substantive replies and agent-facing artifacts, designed for readers who want full reasoning in a more scannable format.
- [`unity-live-editor-loop`](unity-live-editor-loop.md) — route work across the Unity MCP server, Meta XR bridge and Unity CLI, keep the edit-compile-test-play loop safe, and recover from Safe Mode.
- [`unity-safe-mode-recovery`](unity-safe-mode-recovery.md) — detect and recover a Unity editor in Safe Mode, stuck compiling or unreachable from MCP and CLI tools.
- [`unity-tests-without-asmdef`](unity-tests-without-asmdef.md) — add and run NUnit EditMode tests in a Unity project that has no assembly definitions.
- [`iec62304-verification-log`](iec62304-verification-log.md) — write pull request bodies that double as IEC 62304 verification records (instructions, acceptance criteria, evidence, regression analysis).
- [`unity-doc-audit`](unity-doc-audit.md) — audit and improve Unity script documentation and onboarding without changing behaviour.

## Current status

This repository contains the structured-depth output skill and a first set of Unity and regulated-software development skills mirrored from project work; it is ready to grow as more skills are added manually over time.

## License

This project is released under the Unlicense. See the [LICENSE](LICENSE) file for details.
