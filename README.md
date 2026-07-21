# Pinseek monitor daemon

This fork keeps Pinseek's protected server-side tee-time sweep running once per
minute. Each scheduled job covers 5½ hours; later cron jobs overlap safely
because Pinseek deduplicates matches in its database.

## Upstream project

# openai-status-alerts

A lightweight prototype that monitors [status.openai.com](https://status.openai.com) and sends Slack alerts filtered by product/service (e.g., ChatGPT, API, GPT-4o).

## Goals
- Inspire more granular alerting workflows for enterprise customers
- Use public status JSON to avoid deep vendor integration
- Codex-compatible and deployable via GitHub Actions

## Coming Soon
- Service filter config
- Slack threading
- Optional Opsgenie/PagerDuty hooks
