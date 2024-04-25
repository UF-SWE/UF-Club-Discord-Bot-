#https://discord.com/oauth2/authorize?client_id=1223186510174621737&permissions=19235279808593&scope=bot
#https://discordpy.readthedocs.io/en/stable/
#py -m src.bot #in discord directory
import discord 
from discord.ext import commands

from .firebase import Firebase
from .env import (
  DISCORD_TOKEN,
)

class ClubBot(commands.Bot):
  def __init__(self):
    self.firebase = Firebase()

    #Permissions bot has on a server, must match invite code.
    intents = discord.Intents.default()
    intents.message_content = True
    super().__init__(
      command_prefix=commands.when_mentioned_or('/'),
      intents = intents,
    )

  async def on_ready(self):
    await self.setup()
    #await self.tree.sync()
    print("Logged on as", self.user)
    
  async def setup(self):
    extensions = (
      "src.design",
    )
    for i, extension in enumerate(extensions):
      await self.load_extension(extension)

def main():
  client = ClubBot()
  client.run(DISCORD_TOKEN)

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
