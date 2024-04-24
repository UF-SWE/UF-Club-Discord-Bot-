import discord #https://discordpy.readthedocs.io/en/stable/
from discord.ext import commands

from .firebase import Firebase
from .env import (
  DISCORD_TOKEN,
)

class ClubBot(commands.Bot):
  def __init__(self):
    print("Bot")
    self.firebase = Firebase()

    intents = discord.Intents.default()
    intents.message_content = True
    super().__init__(
      command_prefix=commands.when_mentioned_or('/'),
      intents = intents,
    )

  async def on_ready(self):
    print("Logged on as", self.user)
    await self.setup()
    
  async def setup(self):
    extensions = (
      "src.design",
    )
    for i, extension in enumerate(extensions):
      await self.load_extension(extension)

def main():
  client = ClubBot()
  client.run('MTIyMzE4NjUxMDE3NDYyMTczNw.GmkuUk.XiZqBVONiSTFYU8gsp3W76RN6ZQ4rPwK2QFzGs')

if __name__ == "__main__":
  main()  

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
