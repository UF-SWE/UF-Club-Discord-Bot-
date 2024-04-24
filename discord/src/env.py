import os

from dotenv import load_dotenv

load_dotenv()

def ensure_string(name: str, optional: bool = False) -> str:
    value = os.getenv(name)
    if value is None and not optional:
        raise ValueError(f"Environment variable {name} is not set.")
    return value or ""

DISCORD_TOKEN = ensure_string("DISCORD_TOKEN")
