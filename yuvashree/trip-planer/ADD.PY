import requests
import os
from langchain.schema import Document

RAPID_API_KEY = os.getenv("RAPID_API_KEY")

headers = {
    "x-rapidapi-key": RAPID_API_KEY,
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com"
}
# ============================================================
# STEP 1 — Web search to fetch real-time travel prices
# ==============================
def get_live_hotels(place):

    url = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete"

    querystring = {
        "query": place,
        "lang": "en_US"
    }

    response = requests.get(
        url,
        headers=headers,
        params=querystring
    )

    data = response.json()

    hotels = []

    try:
        results = data["data"]

        for item in results[:5]:

            hotels.append({
                "name": item.get("name", "N/A"),
                "address": item.get("address_obj", {}).get("address_string", "N/A")
            })

    except Exception as e:
        print("API Error:", e)

    return hotels
live_hotels = get_live_hotels(place)
def create_live_docs(live_hotels, place):

    docs = []

    for hotel in live_hotels:

        content = f"""
Hotel Name: {hotel['name']}
Rating: {hotel.get('rating', 'N/A')}
Address: {hotel.get('address', 'N/A')}
City: {place}
"""

        docs.append(
            Document(
                page_content=content,
                metadata={
                    "city": place.lower()
                }
            )
        )

    return docs