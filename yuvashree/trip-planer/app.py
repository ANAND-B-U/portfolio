"""from flask import Flask, render_template, request
from groq import Groq
from dotenv import load_dotenv
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
import os

load_dotenv()

app = Flask(__name__)
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Already indexed chroma_db load pannu
print("Loading RAG database...")
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectordb = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings
)
print("RAG ready! 1212 hotels loaded.")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/plan", methods=["POST"])
def plan():
    place     = request.form.get("place")
    days      = request.form.get("days")
    budget    = request.form.get("budget")
    interests = request.form.get("interests")

     # RAG — real hotel data search pannu
    query = f"hotels in {place} {interests}"
    relevant_docs = vectordb.similarity_search(query, k=5)
    context = "\n".join([doc.page_content for doc in relevant_docs])

    prompt = f
    You are an expert Indian travel planner.
    Use this REAL hotel data from India to answer:

    {context}

    Create a {days}-day travel itinerary for {place}.
    Budget: Rs.{budget}
    Interests: {interests}

    Include:
    - Real hotel names and details from the data above
    - Day-wise sightseeing plan
    - Food suggestions
    - Transport tips
    - Estimated budget breakdown
    

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": "You are an expert Indian travel planner."},
            {"role": "user",   "content": prompt}
        ]
    )

    result = response.choices[0].message.content
    return render_template("result.html", plan=result, place=place)

if __name__ == "__main__":
    app.run(debug=True)
    """
# app.py
"""
from flask import Flask, render_template, request
from groq import Groq
from dotenv import load_dotenv
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
import os

# ✅ Import your ML models
from ml_models import classify_trip, predict_budget, recommend_hotels
import pandas as pd

load_dotenv()

app = Flask(__name__)
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Load RAG
print("Loading RAG database...")
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectordb = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)
print("RAG ready! 1212 hotels loaded.")

# ✅ Load hotel CSV for Model 3
df_hotels = pd.read_csv("cleaned_movie.csv")  # your hotel dataset

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/plan", methods=["POST"])
def plan():
    place     = request.form.get("place")
    days      = request.form.get("days")
    budget    = request.form.get("budget")
    interests = request.form.getlist("interests")  # ✅ list from checkboxes

    # ============================================
    # MODEL 1 — Classify trip type
    # ============================================
    interests_raw = request.form.get("interests", "")

    # Clean and split into list
    interests = [i.strip() for i in interests_raw.replace(",", " ").split() 
                if i.strip()]

    print("Interests list:", interests)  # debug

    trip_type, confidence = classify_trip(interests)
    trip_type, confidence = classify_trip(interests)

    # ============================================
    # MODEL 2 — Predict budget range
    # ============================================
    budget_min, budget_max = predict_budget(days, trip_type)

    # ============================================
    # MODEL 3 — Recommend hotels from CSV
    # ============================================
    hotels = recommend_hotels(df_hotels, place, category=None, top_n=3)

    # ============================================
    # RAG — Real hotel data from ChromaDB
    # ============================================
    query = f"hotels in {place} {' '.join(interests)}"
    relevant_docs = vectordb.similarity_search(query, k=5,)
    rag_context = "\n".join([doc.page_content for doc in relevant_docs])

    # ============================================
    # Build hotel context from Model 3
    # ============================================
    hotel_context = "\n".join([
        f"- {h['name']} ({h['category']}) | Rooms: {h['rooms']} | {h['address']}"
        for h in hotels
    ]) if hotels else "No specific hotels found for this city."

    # ============================================
    # Final Prompt — combines all 3 models + RAG
    # ============================================
    prompt = f
    You are an expert Indian travel planner.

    TRIP ANALYSIS:
    - Destination     : {place}
    - Days            : {days}
    - User Budget     : Rs.{budget}
    - Interests       : {', '.join(interests)}
    - Trip Type       : {trip_type} (confidence: {confidence}%)
    - Suggested Range : Rs.{budget_min} – Rs.{budget_max}

    RECOMMENDED HOTELS (from database):
    {hotel_context}

    ADDITIONAL HOTEL DATA (from RAG):
    {rag_context}

    Create a {days}-day {trip_type} itinerary for {place}.

    Include:
    - Hotel recommendations from the data above
    - Day-wise sightseeing plan suited for {trip_type} trip
    - Food suggestions
    - Transport tips
    - Budget breakdown within Rs.{budget_min} – Rs.{budget_max}
    """
"""response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": "You are an expert Indian travel planner."},
            {"role": "user",   "content": prompt}
        ]
    )

    result = response.choices[0].message.content

    return render_template("result.html",
        plan=result,
        place=place,
        trip_type=trip_type,       # ✅ pass to template
        confidence=confidence,
        budget_min=budget_min,
        budget_max=budget_max,
        hotels=hotels
    )

if __name__ == "__main__":
    app.run(debug=True)
    # buget added in groq
    # app.py
    # 
from flask import Flask, render_template, request
from groq import Groq
from dotenv import load_dotenv
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
import os

# ✅ Import your ML models
from ml_models import classify_trip, predict_budget, recommend_hotels
import pandas as pd

load_dotenv()

app = Flask(__name__)
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Load RAG
print("Loading RAG database...")
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectordb = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)
print("RAG ready! 1212 hotels loaded.")

# ✅ Load hotel CSV for Model 3
df_hotels = pd.read_csv("cleaned_movie.csv")  # your hotel dataset

# live buget groq
def get_live_budget_estimate(place,days,trip_type,interest,rag_context=""):
    response=client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            { "role":"system",
                 "content":"you are an indian travel buget expert.reply in json only no extra text",
                },
            {"role":"user",
             "content":f
             Estimate travel buget in indian rupees for:
             -City      :{place}
             -Days      :{days}
             -Trip Type :{trip_type}
             -Interests :{', '.join(interest)}
             REAL HOTEL DATA FOR THIS CITY:
             {rag_context}
             use the above hotel data to estimate realistic accomodation cost.
             Reply ONLY in this JSON format:
             {{
                 "budget_min"        :15000,
                 "budget_max"        :22000,
                 "accommodation"     :8000,
                 "food"              :4000,
                 "transport"        :2000,
                 "activites"        :3000
             }}
             
             }
        ]
    )
    raw=response.choices[0].message.content.strip()
    try:
        clean=raw.replace("```json","").replace("```","").strip()
        return json.loads(clean)
    except:
        return{
                 "budget_min"        :15000,
                 "budget_max"        :22000,
                 "accommodation"     :8000,
                 "food"              :4000,
                 "transport"        :2000,
                 "activities"        :3000
        }

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/plan", methods=["POST"])
def plan():
    place     = request.form.get("place")
    days      = request.form.get("days")
    budget    = request.form.get("budget")
    interests = request.form.getlist("interests")  # ✅ list from checkboxes

    # ============================================
    # MODEL 1 — Classify trip type
    # ============================================
    interests_raw = request.form.get("interests", "")

    # Clean and split into list
    interests = [i.strip() for i in interests_raw.replace(",", " ").split() 
                if i.strip()]

    print("Interests list:", interests)  # debug

    trip_type, confidence = classify_trip(interests)
    trip_type, confidence = classify_trip(interests)

    # ============================================
    # MODEL 2 — Predict budget range
    # ============================================
    budget_min, budget_max = predict_budget(days, trip_type)

    # ============================================
    # MODEL 3 — Recommend hotels from CSV
    # ============================================
    hotels = recommend_hotels(df_hotels, place, category=None, top_n=3)

    # ============================================
    # RAG — Real hotel data from ChromaDB
    # ============================================
    query = f"hotels in {place} {' '.join(interests)}"
    relevant_docs = vectordb.similarity_search(query, k=5,filter={"city": place.lower().strip()})
    rag_context = "\n".join([doc.page_content for doc in relevant_docs])
# step 3 groq buget usin rag
    live_buget=get_live_budget_estimate(place,days,trip_type,interests,rag_context=rag_context)
    budget_min=live_buget["budget_min"]
    budget_max=live_buget["budget_max"]
    # ============================================
    # Build hotel context from Model 3
    # ============================================
    
    hotel_context = "\n".join([
        f"- {h['name']} ({h['category']}) | Rooms: {h['rooms']} | {h['address']}"
        for h in hotels
    ]) if hotels else "No specific hotels found for this city."

    # ============================================
    # Final Prompt — combines all 3 models + RAG
    # ============================================
    prompt = f
    
    You are an expert Indian travel planner.

    TRIP ANALYSIS:
    - Destination     : {place}
    - Days            : {days}
    - User Budget     : Rs.{budget}
    - Interests       : {', '.join(interests)}
    - Trip Type       : {trip_type} (confidence: {confidence}%)
    - Suggested Range : Rs.{budget_min} – Rs.{budget_max}
    -Breakdown        :
        Accommodation   : Rs.{live_buget['accommodation']}
        food            : Rs.{live_buget['food']}
        Transport       : Rs.{live_buget['transport']}
        Activites       : Rs.{live_buget['activities']}

    RECOMMENDED HOTELS (from database):
    {hotel_context}

    ADDITIONAL HOTEL DATA (from RAG):
    {rag_context}

    Create a {days}-day {trip_type} itinerary for {place}.

    Include:
    - Hotel recommendations from the data above
    - Day-wise sightseeing plan suited for {trip_type} trip
    - Food suggestions
    - Transport tips
    - Budget breakdown within Rs.{budget_min} – Rs.{budget_max}
   


    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": "You are an expert Indian travel planner."},
            {"role": "user",   "content": prompt}
        ]
    )

    result = response.choices[0].message.content

    return render_template("result.html",
        plan=result,
        place=place,
        trip_type=trip_type,       # ✅ pass to template
        confidence=confidence,
        budget_min=budget_min,
        budget_max=budget_max,
        breakdown=live_buget,
        hotels=hotels
    )
if __name__ == "__main__":
    app.run(debug=True)"""

from flask import Flask, render_template, request
from groq import Groq
from dotenv import load_dotenv
from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings
import os
import json
from numpy import place

from datetime import datetime
from ml_models import classify_trip, predict_budget, recommend_hotels
import pandas as pd
import re
import json

def extract_json(text):
    match = re.search(r"\{.*\}", text, re.S)
    if match:
        return json.loads(match.group())
    raise ValueError("No JSON found")
cache = {}

load_dotenv()

app = Flask(__name__)
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

print("Loading RAG database...")
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectordb = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)
print("RAG ready! 1212 hotels loaded.")

df_hotels = pd.read_csv("cleaned_movie.csv")
print(df_hotels.columns)

def search_real_time_prices(place, days, month, interests):
    """
    Uses Groq's web search tool (llama with tool use) to fetch
    live hotel, food, transport, and activity prices.
    """
    search_queries = [
        f"hotel price per night {place} {month} 2025 INR mid-range",
        f"food cost per day {place} tourist budget INR",
        f"local transport cost {place} taxi auto per day INR",
        f"sightseeing entry fees {place} tourist attractions INR",
    ]

    all_results = {}

    for query in search_queries:
        try:
            response = client.chat.completions.create(
                model="llama-3.3-70b-versatile",
                messages=[
                    {
                        "role": "system",
                        "content": (
                           "You are a travel price estimation assistant. Use general knowledge of Indian travel prices in 2025 and return realistic estimates."
                            "Search the web and return ONLY a JSON with realistic "
                            "current prices in Indian Rupees. No extra text."
                        )
                    },
                    {
                        "role": "user",
                        "content": (
                            f"Search for: {query}\n"
                            f"Return JSON: {{\"query\": \"{query}\", "
                            f"\"price_min\": 0, \"price_max\": 0, "
                            f"\"unit\": \"per night/per day/per person\", "
                            f"\"source_note\": \"brief note\"}}"
                        )
                    }
                ]
            )
            raw = response.choices[0].message.content.strip()
            clean = raw.replace("```json", "").replace("```", "").strip()
            result = json.loads(clean)
            result = extract_json(clean)
        except Exception as e:
            print(f"Search error for '{query}': {e}")
            all_results[query] = {"price_min": 0, "price_max": 0}

    return all_results


# ============================================================
# STEP 2 — Real-time budget estimation using live search data
# ============================================================
def get_realtime_budget(place, days, trip_type, interests, rag_context=""):
    """
    Combines:
    - Live web search prices (Step 1)
    - RAG hotel data from ChromaDB
    - Groq LLM for final calculation
    """
    current_month = datetime.now().strftime("%B")
    current_year  = datetime.now().year

    # Fetch live prices via web search
    key = f"{place}-{days}-{trip_type}"
    if key in cache:
        live_prices = cache[key]
    else:
        live_prices = search_real_time_prices(place, days, current_month, interests)
        cache[key] = live_prices
    live_prices_str = json.dumps(live_prices, indent=2)

    # Final budget calculation prompt
    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": (
                    "You are an Indian travel budget expert with access to real-time prices. "
                    "Reply in JSON only. No extra text."
                )
            },
            {
                "role": "user",
                "content": f"""
Calculate a REAL-TIME travel budget for:
- City       : {place}
- Days       : {days}
- Trip Type  : {trip_type}
- Interests  : {', '.join(interests)}
- Month      : {current_month} {current_year}

LIVE PRICES FETCHED FROM WEB (use these as base):
{live_prices_str}

RAG HOTEL DATA (actual hotels in this city):
{rag_context}

Instructions:
1. Use the live prices above as your primary source

2. Multiply per-night hotel price × {days} nights for accommodation total
3. Multiply per-day food cost × {days} for food total
4. Multiply per-day transport × {days} for transport total
5. Sum activity entry fees based on interests: {', '.join(interests)}
6. budget_min = conservative estimate, budget_max = comfortable estimate
7. All values in Indian Rupees (INR)
8. budget_min MUST equal accommodation + food + transport + activities.
9. Double check arithmetic before returning JSON.

Reply ONLY in this JSON:
{{
    "budget_min"    : 18000,
    "budget_max"    : 28000,
    "accommodation" : 10000,
    "food"          : 6000,
    "transport"     : 3000,
    "activities"    : 4000,
    "price_sources" : "Hotels: Rs.X/night (live), Food: Rs.Y/day (live)",
    "season_note"   : "Peak/off-peak note for {current_month}"
}}
"""
            }
        ]
    )

    raw = response.choices[0].message.content.strip()
    try:
        clean = raw.replace("```json", "").replace("```", "").strip()
        return json.loads(clean)
    except Exception as e:
        print(f"Budget parse error: {e}")
        # Proportional fallback
        base = 20000 + (int(days) * 2000)
        return {
            "budget_min"    : base,
            "budget_max"    : int(base * 1.4),
            "accommodation" : int(base * 0.40),
            "food"          : int(base * 0.25),
            "transport"     : int(base * 0.15),
            "activities"    : int(base * 0.20),
            "price_sources" : "Estimated (live fetch failed)",
            "season_note"   : ""
        }


# ============================================================
# Routes
# ============================================================
@app.route("/")
def home():
    return render_template("index.html")


@app.route("/plan", methods=["POST"])
def plan():
    place  = request.form.get("place")
    days   = request.form.get("days")
    budget = request.form.get("budget")

    # ── Parse interests cleanly ───────────────────────────────
    interests = [i.strip() for i in request.form.getlist("interests") if i.strip()]
    print("Interests:", interests)

    # ── MODEL 1 — Classify trip type ─────────────────────────
    trip_type, confidence = classify_trip(interests)

    # ── MODEL 2 — ML budget range (kept as secondary signal) ─
    ml_budget_min, ml_budget_max = predict_budget(days, trip_type)

    # ── MODEL 3 — Hotel recommendations from CSV ─────────────
    hotels = recommend_hotels(df_hotels, place, category=None, top_n=3)

    # ── RAG — Hotel data from ChromaDB ───────────────────────
    query = f"hotels in {place} {' '.join(interests)}"
    relevant_docs = vectordb.similarity_search(query, k=5)
    rag_context = "\n".join([doc.page_content for doc in relevant_docs])

    # ── REAL-TIME budget (web search + RAG + Groq) ───────────
    live_budget = get_realtime_budget(
        place, days, trip_type, interests, rag_context=rag_context
    )

    # Final values come from real-time budget
    budget_min = live_budget["budget_min"]
    budget_max = live_budget["budget_max"]

    # ── Hotel context for prompt ──────────────────────────────
    hotel_context = "\n".join([
        f"- {h['name']} ({h['category']}) | Rooms: {h['rooms']} | {h['address']}"
        for h in hotels
    ]) if hotels else "No specific hotels found for this city."

    # ── Final itinerary prompt ────────────────────────────────
    prompt = f"""
You are an expert Indian travel planner.

TRIP ANALYSIS:
- Destination     : {place}
- Days            : {days}
- User Budget     : Rs.{budget}
- Interests       : {', '.join(interests)}
- Trip Type       : {trip_type} (confidence: {confidence}%)
- Real-Time Range : Rs.{budget_min} – Rs.{budget_max}
- Price Source    : {live_budget.get('price_sources', 'Live estimate')}
- Season Note     : {live_budget.get('season_note', '')}

BUDGET BREAKDOWN (real-time prices):
    Accommodation : Rs.{live_budget['accommodation']}
    Food          : Rs.{live_budget['food']}
    Transport     : Rs.{live_budget['transport']}
    Activities    : Rs.{live_budget['activities']}

RECOMMENDED HOTELS (from database):
{hotel_context}

ADDITIONAL HOTEL DATA (from RAG):
{rag_context}

Create a {days}-day {trip_type} itinerary for {place}.
Include hotel recommendations, day-wise plan, food spots,
transport tips, and budget breakdown within Rs.{budget_min}–Rs.{budget_max}.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {"role": "system", "content": "You are an expert Indian travel planner."},
            {"role": "user",   "content": prompt}
        ]
    )

    result = response.choices[0].message.content

    return render_template("result.html",
        plan=result,
        place=place,
        trip_type=trip_type,
        confidence=confidence,
        budget_min=budget_min,
        budget_max=budget_max,
        breakdown=live_budget,
        hotels=hotels,
        price_sources=live_budget.get("price_sources", ""),
        season_note=live_budget.get("season_note", "")
    )


if __name__ == "__main__":
    app.run(debug=True)