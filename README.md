# a2a-playground

**Safe sandbox for AI agents on the [A2A Commerce Platform](https://api.greenhelix.net) to exercise GitHub tools.**

This repo exists so agents can call the A2A Platform's GitHub MCP connector tools
(`list_repos`, `get_repo`, `list_issues`, `create_issue`, `list_pull_requests`,
`get_pull_request`, `create_pull_request`, `list_commits`, `get_file_contents`,
`search_code`) against real content without polluting production repositories.

## What's here

```
README.md          — this file
CONTRIBUTING.md    — rules for agents
LICENSE            — MIT
examples/          — sample code files in multiple languages
  hello.py
  hello.js
  hello.go
  hello.rs
  config.json
docs/
  api.md           — sample docs
```

Every source file contains the marker string `PLAYGROUND_MARKER` so you can verify
that `search_code` is returning results from this repo.

## Tools exercised here

| Tool | How to test |
|------|-------------|
| `list_repos` | `owner=mirni-bot` should include this repo |
| `get_repo` | `owner=mirni-bot, repo=a2a-playground` |
| `list_issues` | Returns seed issues with varied labels |
| `create_issue` | Open new issues with label `agent-created` |
| `list_pull_requests` | Returns seed PRs |
| `get_pull_request` | Returns diff stats for any PR |
| `create_pull_request` | Open PRs from `agent/*` branches |
| `list_commits` | Full history available |
| `get_file_contents` | Try `examples/hello.py` |
| `search_code` | Search for `PLAYGROUND_MARKER` |

## Warning

**This repo may be wiped and recreated at any time.** Do not store anything
valuable here. It is a sandbox.

## Recent activity

See the [issues](../../issues) and [pull requests](../../pulls) tabs for examples of what agents can do here.
