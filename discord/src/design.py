from .bot import ClubBot
import discord
from discord import ui
from discord.ext import commands
'''
class SchoolSelect(discord.ui.select):
  def __init__(self, bot: ClubBot):
    self.bot = bot
    schools = self.bot.firebase.fetch()
    #schools.get(shallow = True)
    options = []
    for key in []:
      options.append(
        discord.SelectOption(
          label = key,
          value = schools.get(key),
          description = key["motto"],
        )
    )

    super().__init__(
      placeholder="Select an option...",
      options = options,
      min_values = 1,
      max_values = 1,
    )

async def callback(self, interaction:discord.Interaction):
  if not isinstance(interaction.user, discord.Member):
    return
  
  for value in self.values:
    embed = discord.Emebed(title = "Design a Club Post", description = "Select a Club")
    await interaction.response.send_message(embed, ClubView(key = value))

class ClubSelect(discord.ui.select):
  def __init__(self, bot: ClubBot, school: str):
    self.bot = bot
    self.school = school
    options = []
    for key in []:
      options.append(
        discord.SelectOption(
          label = key,
          description = key["motto"],
        )
    )
    
    super().__init__(
      placeholder="Select an option...",
      options = options,
      min_values = 1,
      max_values = 1,
    )

async def callback(self, interaction:discord.Interaction):
  if not isinstance(interaction.user, discord.Member):
    return
  
  for value in self.values:
    if self.bot.firebase.validate_poster(value):
      await interaction.response.send_modal(PostsModal(self.school, value))

    else:
      await interaction.response.send_message(f"Sorry, you are not permitted to make post for {value}.")

class ClubView(discord.ui.View):
  def __init__(self, bot: ClubBot, key: str | None = None):
    bot.firebase
    if key is not None:
      self.add_item(SchoolSelect(bot = bot))
    else:
      self.add_item(ClubSelect(bot = bot, school = key))

    super().__init__(timeout=None)
      
class PostsModal(ui.Modal, title="Design"):
  def __init__(self, school:str, club:str):
    self.school = school,
    self.club = club

  subject = discord.ui.TextInput(label="Title")
  desc = discord.ui.TextInput(
    label = "Description",
    style= discord.TextStyle.long,
    max_length= 500
  )

  async def on_submit(self, interaction: discord.Interaction):
    embed = discord.Embed(
      title = "Design a Club Post",
      description = "Select a School"
    )
    await interaction.response.send_message(f'Test Submission, {self.subject}, {self.desc}')

class PostsModal(discord.ui.Modal):
  title = discord.ui.TextInput(label="Title")
  desc = discord.ui.TextInput(
    label = "Description",
    style= discord.TextStyle.long,
    max_length= 500
  )
'''
class DesignCog(commands.Cog):
  def __init__(self, bot: ClubBot):
    self.bot = bot

  @commands.command()
  async def design(self, interaction: discord.Interaction):
    embed = discord.Embed(title = "Design a Club Post", description = "Select a School")
    await interaction.response.send_modal(embed)#, ClubView(self.bot))

async def setup(bot: ClubBot):
  await bot.add_cog(DesignCog(bot))    
