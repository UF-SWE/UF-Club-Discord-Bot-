from .bot import ClubBot
import discord
from discord import ui
from discord.ext import commands

class SchoolSelect(discord.ui.Select):
  def __init__(self, bot: ClubBot):
    self.bot = bot

    schools = self.bot.firebase.get_schools()
    options = []
    for school in schools:
      options.append(
        discord.SelectOption(
          value = school,
          label = schools[school].get('name', ""),
          description = schools[school].get('motto', ""),
        )
      )

    super().__init__(
      placeholder="Select an option...",
      options = options,
    )
  
  async def callback(self, interaction:discord.Interaction):
    if not isinstance(interaction.user, discord.Member):
      return
    
    for value in self.values:
      embed = discord.Embed(title = "Design a Club Post", description = "Select a Club")
      await interaction.response.send_message(embed = embed, view = ClubView(bot = self.bot, key = value), ephemeral=True)

class ClubSelect(discord.ui.Select):
  def __init__(self, bot: ClubBot, school: str):
    self.bot = bot
    self.school = school
    self.clubs = self.bot.firebase.get_clubs(school)
    options = []
    for club in self.clubs:
      options.append(
        discord.SelectOption(
          value = club,
          label = self.clubs[club].get('name', ""),
          description = self.clubs[club].get('motto', ""),
        )
      )
    
    super().__init__(
      placeholder="Select an option...",
      options = options,
    )

  async def callback(self, interaction:discord.Interaction):
    if not isinstance(interaction.user, discord.Member):
      return
      
    for value in self.values:
      members : dict
      members = self.clubs[value]['members']
      user = members.get(interaction.user.name, None)
      if user and user['poster']:
        await interaction.response.send_modal(PostsModal(school = self.school, club = value))

      else:
        await interaction.response.send_message(f"Sorry, you are not permitted to make post for {self.clubs[value]['name']}.")

class ClubView(discord.ui.View):
  def __init__(self, bot: ClubBot, key: str | None = None):
    super().__init__(timeout=0)
    if key is None:
      self.add_item(SchoolSelect(bot = bot))
    else:
      self.add_item(ClubSelect(bot = bot, school = key))

class PostsModal(discord.ui.Modal):
  def __init__(self, school:str, club:str):
    super().__init__(timeout=0, title = "Design")
    self.school = school
    self.club = club

  subject = discord.ui.TextInput(label="Title")
  desc = discord.ui.TextInput(
    label = "Description",
    style= discord.TextStyle.long,
    max_length= 500
  )

  async def on_submit(self, interaction: discord.Interaction):
    embed = discord.Embed(
      title = self.subject,
      description = self.desc
    )
    await interaction.response.send_message(embed = embed)

class DesignCog(commands.Cog):
  def __init__(self, bot: ClubBot):
    self.bot = bot

  @commands.command()
  async def design(self, ctx : commands.Context):
    embed = discord.Embed(title = "Design a Club Post", description = "Select a School")
    await ctx.reply(embed = embed, view = ClubView(bot = self.bot), ephemeral=True)

async def setup(bot: ClubBot):
  await bot.add_cog(DesignCog(bot))  
  
  '''
  @bot.tree.command(name = "design")
  async def design(interaction: discord.Interaction):
    embed = discord.Embed(title = "Design a Club Post", description = "Select a School")
    await interaction.response.send_message(embed = embed, view = ClubView(bot = bot), ephemeral=True)  
  '''