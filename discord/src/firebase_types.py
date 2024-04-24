from typing import Any, TypedDict

class Member(TypeDict):
  name: str
  id: str

class Club(TypeDict):
  name: str
  emoji: str
  admins: list[Member]

class School(TypedDict):
  name: str
  emoji: str
  clubs: list[Club]
