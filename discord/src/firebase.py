import discord
import json
from firebase_admin import db

"""
  schools {
    clubs {
      posters {
      }
      links {
      }
      announcements {
      
      }
    }
  }

"""

async def fetch(path):
  return db.reference(path)

async def validate_Poster(school, club, id):
  ref = Fetch("/" + school + "/" + club + "/posters")
  return id in ref

async def generate(content):
  ref = Fetch("/posts")
  ref.set(content)
