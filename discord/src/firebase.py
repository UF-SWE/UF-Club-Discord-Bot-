import json
import firebase_admin
from firebase_admin import credentials, firestore, db

class Firebase():
  def __init__(self):
    print("Hi")
    self.cred = credentials.Certificate('./src/firestore-config.json')
    Firebase.app =firebase_admin.initialize_app(self.cred)
    #self.fs = firestore.client()

  def fetch(self, path: str | None = None) -> db.Reference:
    if (path):
      return firebase_admin.db.reference(path)
    else:
      return firebase_admin.db.reference("/Schools")
  
  def validate_poster(self, school: str | None = None, club: str | None = None, id: str | None = None):
    path = f"/Schools/{school}/{club}/members/{id}/poster"
    ref = self.fetch(path)
    return ref.get(shallow = True)

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
