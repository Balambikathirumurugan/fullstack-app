from pydantic import BaseModel

# Schema for Recommended Shows
class ShowSchema(BaseModel):
    id: int
    name: str
    image: str
    summary: str

    class Config:
        orm_mode = True

# Schema for Upcoming Events
class EventSchema(BaseModel):
    id: int
    show_name: str
    image: str
    airdate: str
    episode_name: str

    class Config:
        orm_mode = True
