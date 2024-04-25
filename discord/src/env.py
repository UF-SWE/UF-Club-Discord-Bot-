#Lessons taken from MIL
#https://github.com/uf-mil/discord-bot/blob/stale-issues-tracking/src/env.py
import os

from dotenv import load_dotenv

load_dotenv()

def ensure_string(name: str, optional: bool = False) -> str:
    value = os.getenv(name)
    if value is None and not optional:
        raise ValueError(f"Environment variable {name} is not set.")
    return value or ""

DISCORD_TOKEN = ensure_string("DISCORD_TOKEN")
