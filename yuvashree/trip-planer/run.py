import pandas as pd
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_core.documents import Document
import os
import shutil

# CSV load pannu — file name maathu!
df = pd.read_csv("cleaned_movie.csv")

print(f"Total hotels: {len(df)}")
print(df.columns.tolist())

# Each hotel → Document convert pannu
docs = []
for _, row in df.iterrows():
    text = f"""
    Hotel: {row.get('Hotel Name', 'N/A')}
    City: {row.get('City', 'N/A')}
    State: {row.get('State', 'N/A')}
    Category: {row.get('Category', 'N/A')}
    Address: {row.get('Address', 'N/A')}
    Total Rooms: {row.get('Total Rooms', 'N/A')}
    Alcohol: {row.get('Alcohol', 'N/A')}
    """
    docs.append(Document(page_content=text.strip()))

print(f"Documents created: {len(docs)}")

# Old DB irundha delete pannu
if os.path.exists("./chroma_db"):
    shutil.rmtree("./chroma_db")
    print("Old DB deleted")

# New RAG DB create pannu
print("Creating RAG database... (2-3 minutes)")
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectordb = Chroma.from_documents(
    docs,
    embeddings,
    persist_directory="./chroma_db"
)
print(f"Done! {len(docs)} hotels indexed in RAG database!")