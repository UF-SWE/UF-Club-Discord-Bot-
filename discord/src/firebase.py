import discord
import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
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


def Connect_To_Firestore():
  cred = credentials.Certificate('./firestore-config.json')
  app = firebase_admin.initialize_app(cred)
  db = firestore.client()
  return db
  
async def Validate_Poster(school, club, id):
  ref = db.reference("/" + school + "/" + club + "/posters")
  return id in ref

def Post(db, school, club, announcment, id):
  # Assuming `id` contains the ID of the document you want to set data to
  parent_doc_ref = db.collection("ClubData").document("school_id").collection("clubs").document("club_id")

  # Define the data you want to set to the document as a dictionary
  data = {
    "posters": [], # Empty dictionary for posters subcollection
    "links": [],   # Empty dictionary for links subcollection
    "announcements": [] # Empty dictionary for announcements subcollection
  }

  # Set the data to the document
  parent_doc_ref.update(data)

