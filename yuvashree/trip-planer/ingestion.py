# ingest.py

import pandas as pd
from langchain_core.documents import Document
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
import shutil
import os

# Load CSV
df = pd.read_csv("cleaned_movie.csv")

print("Columns:", df.columns.tolist())

# Build documents
docs = []

for _, row in df.iterrows():

    content = f"""
Hotel: {row.get('property_name', '')}
City: {row.get('city', '')}
State: {row.get('state', '')}
Category: {row.get('hotel_category', '')}
Address: {row.get('address', '')}
Rooms: {row.get('room_count', '')}
Rating: {row.get('site_review_rating', '')}
"""

    metadata = {
        "hotel_name": str(row.get("property_name", "")).lower().strip(),
        "city": str(row.get("city", "")).lower().strip(),
        "state": str(row.get("state", "")).lower().strip(),
        "category": str(row.get("hotel_category", "")).lower().strip(),
        "rooms": str(row.get("room_count", "")),
        "rating": str(row.get("site_review_rating", "")),
    }

    docs.append(
        Document(
            page_content=content,
            metadata=metadata
        )
    )

print(f"Total docs prepared: {len(docs)}")

# Embedding model
embeddings = HuggingFaceEmbeddings(
    model_name="all-MiniLM-L6-v2"
)

# Delete old DB
if os.path.exists("./chroma_db"):
    shutil.rmtree("./chroma_db")
    print("Old chroma_db deleted")

# Create vector DB
vectordb = Chroma.from_documents(
    documents=docs,
    embedding=embeddings,
    persist_directory="./chroma_db"
)

print(f"Done! {len(docs)} hotels indexed.")