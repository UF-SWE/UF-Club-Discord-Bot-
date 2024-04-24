import discord #https://discordpy.readthedocs.io/en/stable/
from discord.ext import commands
from discord import ui

from .env import (
  DISCORD_TOKEN,
)

intents = discord.Intents.default()
intents.message_content = True
#intents.messages = True

class ClubBot(commands.Bot):
  def __init__(self):
    super().__init__(
      command_prefix=commands.when_mentioned_or('/'),
      intents = intents,
    )

  async def on_ready(self):
    print("Logged on as", self.user)

client = ClubBot()
@client.tree.command(name="modal")
async def modal(interaction: discord.Interaction):
  await interaction.response.send_modal(PostsModal())


client.run('MTIyMzE4NjUxMDE3NDYyMTczNw.GmkuUk.XiZqBVONiSTFYU8gsp3W76RN6ZQ4rPwK2QFzGs')
'''
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
'''
