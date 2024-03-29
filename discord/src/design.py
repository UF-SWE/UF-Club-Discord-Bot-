import datetime

import discord
from .firebase_types import School, Club

class Designer():
  def __init__(self, schools: dict[School]):
    super().__init__(
      placeholder="Select a School:",
      options = schools
      
    )

  async def selections(options):
    choices = []

    for choice in options:
      choices.append(
        discord.SelectOption(
          label = choice.name,
          value = choice.name,
          emoji = choice.emoji
        )
      )

  async def Create(self, category, title, school, club, id):
    self.design_cache.update(id, Post(category, title, school, club, id))

  async def callback(interaction):
    await interaction.response

class PostsModal(discord.ui.Modal):
  title = discord.ui.TextInput(label="Title")
  desc = discord.ui.TextInput(
    label = "Description",
    style= discord.TextStyle.long,
    max_length= 500
  )


class Post():
  def __init__(self, category, title, school, club, id):
    self.created = datetime.now()
    self.updated = datetime.now()
    self.category = category
    self.school = school
    self.club = club
    self.id = id

    self.title = title

  
  async def set_title(self, title):
    self.title = title



