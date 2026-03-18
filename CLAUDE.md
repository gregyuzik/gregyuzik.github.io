# Claude Code Project Notes

## GitHub API Access

- The `gh` CLI is **not available** in this environment.
- Use the GitHub REST API via `curl` with the `$GH_TOKEN` environment variable instead.
- Example: Creating a PR:
  ```bash
  curl -s -X POST "https://api.github.com/repos/gregyuzik/gregyuzik.github.io/pulls" \
    -H "Authorization: token $GH_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    -d '{"title":"PR title","head":"branch-name","base":"main","body":"PR body"}'
  ```
- Example: Merging a PR:
  ```bash
  curl -s -X PUT "https://api.github.com/repos/gregyuzik/gregyuzik.github.io/pulls/{number}/merge" \
    -H "Authorization: token $GH_TOKEN" \
    -H "Accept: application/vnd.github+json" \
    -d '{"merge_method":"merge"}'
  ```

## Deployment

- This is a GitHub Pages site deployed from the `main` branch.
- The local git proxy only allows pushing to `claude/` prefixed branches (pushes to `main` return 403).
- To deploy: push to a `claude/` branch, create a PR via the GitHub API, then merge it via the API.
- Live site: https://gregyuzik.github.io
