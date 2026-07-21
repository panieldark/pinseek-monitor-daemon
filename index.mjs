const endpoint = process.env.SLACK_WEBHOOK_URL;
if (!endpoint) {
  throw new Error("The protected Pinseek monitor endpoint is not configured.");
}

const RUNS = 330;
const INTERVAL_MS = 60_000;
let nextRunAt = Date.now();

for (let attempt = 1; attempt <= RUNS; attempt += 1) {
  const waitMs = Math.max(0, nextRunAt - Date.now());
  if (waitMs > 0) await new Promise((resolve) => setTimeout(resolve, waitMs));

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      signal: AbortSignal.timeout(55_000),
    });
    if (!response.ok) {
      throw new Error(`Pinseek returned HTTP ${response.status}`);
    }
    console.log(`Sweep ${attempt}/${RUNS} completed at ${new Date().toISOString()}`);
  } catch (error) {
    console.error(`Sweep ${attempt}/${RUNS} failed:`, error instanceof Error ? error.message : error);
  }

  nextRunAt += INTERVAL_MS;
}
