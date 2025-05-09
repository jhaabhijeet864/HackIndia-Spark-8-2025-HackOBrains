from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import the data models
from app.models import IdeaModel, VideoModel  

# Create fastapi instance 
app = FastAPI(
    title="Catalyst API:",
    description="API for Catalyst project",
    version="0.1.0",
)

# Configure CORS : 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to Catalyst API!"}


# POST endpoint for mentorship
@app.post("/mentorship")
def mentorship_endpoint(idea_request: IdeaModel):
    # Stub resposne simulating Gemini API 2.0's output
    response = {
        "mentorship": f"Processsed idea: '{idea_respponse.idea}'. Actionable roadmap genernated (stub response)."
    }
    return response


# POST endpoint for video analysis
@app.post("/analyze-video")
def analyze_video_endpoint(video_request: VideoModel):
    # Stub response simulating Gemini API 2.0's output
    response = {
        "video_analysis": f"Analyzed video: '{video_request.video_url}'. Analysis report generated (stub response)."
    }
    return response


# Run with uvicorn
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)