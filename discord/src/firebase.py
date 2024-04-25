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
