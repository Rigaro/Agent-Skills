"""Build a .skill archive (zip) for each skill, for upload to claude.ai.

    python scripts/package_skills.py              # every skill in skills/
    python scripts/package_skills.py visual-companion structured-depth

Archives land in dist/<name>.skill with the layout claude.ai expects: <name>/SKILL.md plus the
skill's other files. dist/ is ignored by git; rebuild after editing a skill instead of committing archives.
"""

import re
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKILLS = ROOT / "skills"
DIST = ROOT / "dist"
SKIP = {"node_modules", "__pycache__", ".DS_Store"}


def check(skill_dir: Path) -> None:
    skill_md = skill_dir / "SKILL.md"
    if not skill_md.is_file():
        sys.exit(f"{skill_dir.name}: no SKILL.md")
    text = skill_md.read_text(encoding="utf-8")
    front = re.match(r"---\n(.*?)\n---\n", text, re.S)
    if not front:
        sys.exit(f"{skill_dir.name}: SKILL.md has no frontmatter")
    name = re.search(r"^name:\s*['\"]?([^'\"\n]+)", front.group(1), re.M)
    if not name or name.group(1).strip() != skill_dir.name:
        sys.exit(f"{skill_dir.name}: frontmatter name must match the folder name")
    if not re.search(r"^description:", front.group(1), re.M):
        sys.exit(f"{skill_dir.name}: frontmatter has no description")


def package(skill_dir: Path) -> Path:
    check(skill_dir)
    DIST.mkdir(exist_ok=True)
    archive = DIST / f"{skill_dir.name}.skill"
    with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED) as zf:
        for path in sorted(skill_dir.rglob("*")):
            if path.is_file() and not SKIP.intersection(path.relative_to(skill_dir).parts):
                zf.write(path, Path(skill_dir.name) / path.relative_to(skill_dir))
    return archive


def main() -> None:
    names = sys.argv[1:] or sorted(p.name for p in SKILLS.iterdir() if p.is_dir())
    for name in names:
        archive = package(SKILLS / name)
        print(f"{archive.relative_to(ROOT)}  {archive.stat().st_size} bytes")


if __name__ == "__main__":
    main()
