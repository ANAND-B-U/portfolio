# check_chunks.py

from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectordb = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)

# ============================================================
# 1. Quick Count
# ============================================================
print("\n========== 1. TOTAL CHUNK COUNT ==========")
print("Total chunks:", vectordb._collection.count())

# ============================================================
# 2. View Chunks + Metadata
# ============================================================
print("\n========== 2. CHUNKS + METADATA (first 10) ==========")
results = vectordb._collection.get(limit=10, include=["documents", "metadatas"])
for i, (doc, meta) in enumerate(zip(results["documents"], results["metadatas"])):
    print(f"\n--- Chunk {i+1} ---")
    print("Content :", doc)
    print("Metadata:", meta)

# ============================================================
# 3. Search & See What Gets Retrieved
# ============================================================
print("\n========== 3. SIMILARITY SEARCH ==========")
query = "hotels in Goa beach"
docs = vectordb.similarity_search(query, k=5)
for i, doc in enumerate(docs):
    print(f"\n--- Result {i+1} ---")
    print("Content :", doc.page_content)
    print("Metadata:", doc.metadata)

# ============================================================
# 4. Search With Similarity Score
# ============================================================
print("\n========== 4. SIMILARITY SEARCH WITH SCORE ==========")
query = "hotels in Mumbai budget"
docs_with_scores = vectordb.similarity_search_with_score(query, k=5)
for doc, score in docs_with_scores:
    print(f"\nScore (lower=better): {score:.4f}")
    print("Content :", doc.page_content)
    print("Metadata:", doc.metadata)

# ============================================================
# 5. Full Dump (all chunks)
# ============================================================
"""
print("\n========== 5. FULL DUMP (first 200 chars each) ==========")
all_data = vectordb._collection.get(include=["documents", "metadatas", "embeddings"])
print(f"Total chunks: {len(all_data['documents'])}")
for i, doc in enumerate(all_data["documents"]):
    print(f"\n[{i}] {doc[:200]}...")"""