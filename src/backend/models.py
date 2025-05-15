from sqlalchemy import Column, Integer, String, Text
from database import Base

class Show(Base):
    __tablename__ = "recommended_shows"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    image = Column(String)
    summary = Column(Text)

class Event(Base):
    __tablename__ = "upcoming_events"

    id = Column(Integer, primary_key=True, index=True)
    show_name = Column(String)
    image = Column(String)
    airdate = Column(String)
    episode_name = Column(String)
