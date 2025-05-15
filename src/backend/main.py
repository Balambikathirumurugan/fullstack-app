from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import engine, Base
from crud import get_recommended, get_upcoming
from schemas import ShowSchema, EventSchema
from typing import List
import uvicorn

app = FastAPI()

# ✅ Add this block
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins; change to ["http://localhost:3000"] for stricter control
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables
Base.metadata.create_all(bind=engine)

# Routes
@app.get("/recommended", response_model=List[ShowSchema])
async def read_recommended():
    return await get_recommended()

@app.get("/upcoming", response_model=List[EventSchema])
async def read_upcoming():
    return await get_upcoming()

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
