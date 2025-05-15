import requests
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Show, Event

async def get_recommended():
    db = SessionLocal()
    shows = db.query(Show).all()
    db.close()
    return [show.__dict__ for show in shows]

async def get_upcoming():
    db = SessionLocal()
    events = db.query(Event).all()
    db.close()
    return [event.__dict__ for event in events]

# OPTIONAL: Use this to initially populate the DB
def fetch_and_store_data():
    db = SessionLocal()

    # Fetch and store recommended
    recommended = requests.get("https://api.tvmaze.com/shows").json()[:8]
    for item in recommended:
        show = Show(name=item['name'], image=item['image']['medium'], summary=item['summary'])
        db.add(show)

    # Fetch and store upcoming
    upcoming = requests.get("https://api.tvmaze.com/schedule").json()[:9]
    for item in upcoming:
        event = Event(
            show_name=item['show']['name'],
            image=item['show']['image']['medium'],
            airdate=item['airdate'],
            episode_name=item['name']
        )
        db.add(event)

    db.commit()
    db.close()
