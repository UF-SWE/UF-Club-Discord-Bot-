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

async def Validate_Poster(school, club, id):
  ref = db.reference("/" + school + "/" + club + "/posters")
  return id in ref

async def Generate(content):
  ref = db.reference("/posts")
  ref.set(content)

