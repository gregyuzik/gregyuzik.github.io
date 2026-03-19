# Project Instructions

## Git Push Workflow

- You can only `git push` to `claude/*` branches via the git remote.
- When you need to get changes into `main` (or any non-`claude/*` branch), use the GitHub API with `$GH_TOKEN`:
  1. Push your changes to the `claude/*` branch.
  2. Create a PR via `curl -X POST https://api.github.com/repos/gregyuzik/gregyuzik.github.io/pulls` with `Authorization: Bearer $GH_TOKEN`.
  3. Merge the PR via `curl -X PUT https://api.github.com/repos/gregyuzik/gregyuzik.github.io/pulls/{number}/merge` with `Authorization: Bearer $GH_TOKEN`.
- Do not attempt `git push` to non-`claude/*` branches — it will always fail with 403.
