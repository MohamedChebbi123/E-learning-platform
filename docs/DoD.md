# Definition of Done

## Commit Message Convention

```
<type>(<scope>): <description>
```

### Types

| Type | Usage |
|--------|--------|
| `feat` | New feature |
| `fix` | Bug fix |
| `refactor` | Code change without feature/fix |
| `test` | Adding or updating tests |
| `docs` | Documentation only |
| `style` | Formatting, linting, whitespace |
| `chore` | Build, CI, dependencies |
| `perf` | Performance improvement |

### Scope (optional)

Service or module name, e.g. `auth`, `courses`, `frontend`, `ci`.

### Examples

```
feat(auth): add JWT token refresh endpoint
fix(courses): handle empty lesson list
docs: add API conventions
chore(ci): add backend-ci workflow
```

---

## Pull Request Checklist

Before requesting a review, ensure:

- [ ] Code follows project coding standards
- [ ] Backend: `mvn spotless:check` passes (or `mvn spotless:apply` to auto-fix)
- [ ] Frontend: `npm run lint` and `npm run format:check` pass
- [ ] Unit tests added / updated
- [ ] Integration tests pass
- [ ] Documentation updated if needed (API docs, README, ADRs)
- [ ] No secrets, credentials, or tokens in code
- [ ] Branch is up to date with `develop`
- [ ] Commit messages follow convention

---

## Definition of Done

A feature is complete only when:

- [ ] Implementation matches the acceptance criteria
- [ ] All applicable items from the PR checklist are satisfied
- [ ] CI pipeline passes (lint, format check, tests, build)
- [ ] Code reviewed and approved by at least 1 team member
- [ ] Feature tested locally in staging (`make staging`)
- [ ] No known critical or high-severity bugs remain
