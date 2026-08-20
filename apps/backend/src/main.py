"""ShaqoAI agent-service API scaffold; no agent or authentication logic yet."""

from fastapi import FastAPI

app = FastAPI(title="ShaqoAI Agent API", version="0.1.0")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
