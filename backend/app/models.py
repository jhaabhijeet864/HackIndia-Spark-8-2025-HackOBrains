from pydantic import BaseModel

class IdeaModel(BaseModel):
    idea: str

class VideoModel(BaseModel):
    video_url: str