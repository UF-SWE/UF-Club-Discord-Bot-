
import aiohttp
import asyncio
import discord #https://discordpy.readthedocs.io/en/stable/
import logging

from .env import (
  DISCORD_TOKEN,
)

class ClubBot(discord.Client):
  async def on_ready(self):
    print("Logged on as", self.user)


logger = logging.getLogger('discord')
logger.setLevel(logging.DEBUG)
logging.getLogger('discord.http').setLevel(logging.INFO)

handler = logging.handlers.RotatingFileHandler(
  filename='discord.log',
  encoding='utf-8',
  maxBytes=32 * 1024 * 1024,  # 32 MiB
  backupCount=5,  # Rotate through 5 files
)

dt_fmt = '%Y-%m-%d %H:%M:%S'
formatter = logging.Formatter('[{asctime}] [{levelname:<8}] {name}: {message}', dt_fmt, style='{')
handler.setFormatter(formatter)
logger.addHandler(handler)


intents = discord.Intents.default()
