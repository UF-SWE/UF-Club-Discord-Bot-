import firebase_admin
from firebase_admin import credentials, firestore, db

class Firebase():
  def __init__(self):
    self.cred = credentials.Certificate('./src/firestore-config.json')
    self.app = firebase_admin.initialize_app(self.cred)
    self.fs = firestore.client()

  def get_schools(self) -> dict[str, dict]:
    return self.fs.collection("Schools").document("registered").get().to_dict()
  
  def get_clubs(self, school:str) -> dict[str, dict]:
    return self.fs.collection("Schools").document(school).get().to_dict()
  
  def Post(self, school, club, announcment, id):
    # Assuming `id` contains the ID of the document you want to set data to
    parent_doc_ref = self.fs.collection("ClubData").document("school_id").collection("clubs").document("club_id")

    # Define the data you want to set to the document as a dictionary
    data = {
      "posters": [], # Empty dictionary for posters subcollection
      "links": [],   # Empty dictionary for links subcollection
      "announcements": [] # Empty dictionary for announcements subcollection
    }

    # Set the data to the document
    parent_doc_ref.update(data)
