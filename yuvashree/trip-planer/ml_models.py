import numpy as np
from sklearn.ensemble import GradientBoostingRegressor
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import TfidfVectorizer
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression



# ============================================
# MODEL 1 — Trip Classifier (4 types now!)
# ============================================
classifier_data = [
    # Leisure
    ("Food & Local Cuisine Shopping",           "Leisure"),
    ("Shopping Food & Local Cuisine",           "Leisure"),
    ("Food & Local Cuisine Nature & Hiking",    "Leisure"),
    ("Nature & Hiking Food & Local Cuisine",    "Leisure"),
    ("Shopping Nature & Hiking",                "Leisure"),
    ("Nature & Hiking Shopping",                "Leisure"),
    ("Food & Local Cuisine History & Culture",  "Leisure"),

    # Adventure
    ("Nature & Hiking Wildlife & Safari",       "Adventure"),
    ("Adventure Sports Nature & Hiking",        "Adventure"),
    ("Wildlife & Safari Adventure Sports",      "Adventure"),
    ("Adventure Sports Wildlife & Safari",      "Adventure"),
    ("Nature & Hiking Adventure Sports",        "Adventure"),
    ("Adventure Sports Food & Local Cuisine",   "Adventure"),
    ("Wildlife & Safari Nature & Hiking",       "Adventure"),
    ("Adventure Sports Shopping",               "Adventure"),

    # Cultural
    ("Temples & Spiritual History & Culture",   "Cultural"),
    ("History & Culture Temples & Spiritual",   "Cultural"),
    ("Temples & Spiritual Food & Local Cuisine", "Cultural"),
    ("History & Culture Food & Local Cuisine",  "Cultural"),
    ("Shopping Temples & Spiritual",            "Cultural"),
    ("History & Culture Shopping",              "Cultural"),
    ("Temples & Spiritual Shopping",            "Cultural"),
    ("History & Culture Nature & Hiking",       "Cultural"),
    ("Temples & Spiritual Nature & Hiking",     "Cultural"),
    ("History & Culture Wildlife & Safari",     "Cultural"),

    # Beach — NEW TYPE!
    ("Beach Shopping",                          "Beach"),
    ("Beach Food & Local Cuisine",              "Beach"),
    ("Beach Nature & Hiking",                   "Beach"),
    ("Beach Adventure Sports",                  "Beach"),
    ("Beach Wildlife & Safari",                 "Beach"),
    ("Beach History & Culture",                 "Beach"),
    ("Beach Temples & Spiritual",               "Beach"),
    ("Beach Shopping",                          "Beach"),
    ("Beach Food & Local Cuisine",              "Beach"),
    ("Beach Nature & Hiking",                   "Beach"),
    ("Beach Nightlife", "Beach"),
    ("Beach Resort", "Beach"),
    ("Temple Pilgrimage", "Cultural"),
    ("Mountain Trekking", "Adventure"),
    ("Beach Nightlife ", "Beach"),
    # ============================================
    # EXTRA LEISURE
    # ============================================
    ("Shopping Resort", "Leisure"),
    ("Food & Local Cuisine Resort", "Leisure"),
    ("Nightlife Shopping", "Leisure"),
    ("Resort Nightlife", "Leisure"),
    ("Food & Local Cuisine Nightlife", "Leisure"),
    ("Shopping Food & Local Cuisine Resort", "Leisure"),
    ("Nature & Hiking Resort", "Leisure"),

    # ============================================
    # EXTRA ADVENTURE
    # ============================================
    ("Mountain Adventure Sports", "Adventure"),
    ("Trekking Adventure Sports", "Adventure"),
    ("Wildlife & Safari Trekking", "Adventure"),
    ("Mountain Wildlife & Safari", "Adventure"),
    ("Adventure Sports Mountain", "Adventure"),
    ("Nature & Hiking Trekking", "Adventure"),
    ("Adventure Sports Mountain Trekking", "Adventure"),
    ("Wildlife & Safari Nature & Hiking Trekking", "Adventure"),

    # ============================================
    # EXTRA CULTURAL
    # ============================================
    ("Temple History & Culture", "Cultural"),
    ("Pilgrimage Temple", "Cultural"),
    ("Temples & Spiritual Pilgrimage", "Cultural"),
    ("History & Culture Temple", "Cultural"),
    ("Temple Food & Local Cuisine", "Cultural"),
    ("Temple Shopping", "Cultural"),
    ("Pilgrimage History & Culture", "Cultural"),
    ("Temples & Spiritual Cultural Heritage", "Cultural"),

    # ============================================
    # EXTRA BEACH
    # ============================================
    ("Beach Resort", "Beach"),
    ("Beach Nightlife Resort", "Beach"),
    ("Beach Seafood", "Beach"),
    ("Beach Water Sports", "Beach"),
    ("Beach Sunset", "Beach"),
    ("Beach Relaxation", "Beach"),
    ("Beach Adventure Sports Resort", "Beach"),
    ("Beach Shopping Nightlife", "Beach"),
    ("Beach Food & Local Cuisine Resort", "Beach"),
    ("Beach Nature & Hiking Resort", "Beach"),

    # ============================================
    # MIXED COMPLEX CASES
    # ============================================
    ("Beach Temple Shopping", "Beach"),
    ("Beach History & Culture", "Beach"),
    ("Beach Wildlife & Safari", "Beach"),
    ("Mountain Temple Trekking", "Adventure"),
    ("Nature & Hiking Temple", "Cultural"),
    ("Food & Local Cuisine Adventure Sports", "Adventure"),
    ("Shopping History & Culture Temple", "Cultural"),
    ("Shopping Beach Resort", "Beach"),
    ("Nightlife Beach Shopping", "Beach"),
    ("Mountain Nature & Hiking", "Adventure"),
    # Add more Leisure & Cultural samples to models.py
    ("History & Culture Shopping Food & Local Cuisine", "Cultural"),
    ("Shopping Nightlife Resort",                        "Leisure"),
    ("Food & Local Cuisine Resort Nightlife",            "Leisure"),
    ]
all_interests = [
    "Beach",
    "Shopping",
    "Nature & Hiking",
    "Wildlife & Safari",
    "Temples & Spiritual",
    "History & Culture",
    "Adventure Sports",
    "Food & Local Cuisine",
    "Nightlife",
    "Resort",
    "Temple",
    "Pilgrimage",
    "Mountain",
    "Trekking"
]

X = [x[0] for x in classifier_data]
y= [x[1] for x in classifier_data]
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42
)

trip_classifier = Pipeline([
    ("tfidf", TfidfVectorizer(ngram_range=(1, 2), lowercase=True)),
    ("clf", LogisticRegression(max_iter=1000))
])

trip_classifier.fit(X_train, y_train)
preds = trip_classifier.predict(X_test)




def classify_trip(interests_list):

    if not interests_list:
        return "Leisure", 70

    text = " ".join(interests_list)

    prediction = trip_classifier.predict([text])[0]

    probs = trip_classifier.predict_proba([text])[0]

    confidence = round(max(probs) * 100)
    if confidence < 50:
        confidence = 50

    return prediction, confidence

# ============================================
# MODEL 2 — Budget Predictor (IMPROVED)
# ============================================
budget_data = [
    # 1-day trips — all 4 types
    ("Local",      1, "Cultural",   2500),
    ("Local",      1, "Leisure",    2000),
    ("Local",      1, "Adventure",  3000),
    ("Local",      1, "Beach",      2500),

    # 2-day trips — all 4 types
    ("Ooty",       2, "Cultural",   6000),
    ("Mysore",     2, "Cultural",   5000),
    ("Hampi",      2, "Cultural",   5500),
    ("Agra",       2, "Cultural",   6500),
    ("Varanasi",   2, "Cultural",   5000),
    ("Gokarna",    2, "Leisure",    6500),
    ("Pondicherry",2, "Leisure",    5500),
    ("Ooty",       2, "Leisure",    6000),
    ("Coorg",      2, "Adventure",  7000),
    ("Rishikesh",  2, "Adventure",  7500),
    ("Goa",        2, "Beach",      7000),
    ("Gokarna",    2, "Beach",      6000),
    ("Varkala",    2, "Beach",      6500),

    # 3-day trips — all 4 types
    ("Jaipur",     3, "Cultural",   8000),
    ("Jaisalmer",  3, "Cultural",   8500),
    ("Varanasi",   3, "Cultural",   7500),
    ("Delhi",      3, "Cultural",   9000),
    ("Goa",        3, "Leisure",   12000),
    ("Mumbai",     3, "Leisure",   15000),
    ("Ooty",       3, "Leisure",    9000),
    ("Kodaikanal", 3, "Leisure",   10000),
    ("Munnar",     3, "Leisure",   11000),
    ("Rishikesh",  3, "Adventure", 10000),
    ("Manali",     3, "Adventure", 11000),
    ("Coorg",      3, "Adventure",  9500),
    ("Goa",        3, "Beach",     11000),
    ("Gokarna",    3, "Beach",      9000),
    ("Varkala",    3, "Beach",     10000),
    ("Pondicherry",3, "Beach",      9500),

    # 4-day trips — all 4 types
    ("Delhi",      4, "Cultural",  13000),
    ("Rajasthan",  4, "Cultural",  12000),
    ("Varanasi",   4, "Cultural",   9000),
    ("Shimla",     4, "Adventure", 14000),
    ("Darjeeling", 4, "Adventure", 13000),
    ("Coorg",      4, "Adventure", 12000),
    ("Kerala",     4, "Leisure",   16000),
    ("Coorg",      4, "Leisure",   13000),
    ("Andaman",    4, "Beach",     18000),
    ("Goa",        4, "Beach",     14000),
    ("Lakshadweep",4, "Beach",     20000),

    # 5-day trips
    ("Manali",     5, "Adventure", 18000),
    ("Kerala",     5, "Leisure",   20000),
    ("Goa",        5, "Beach",     16000),
    ("Andaman",    5, "Beach",     22000),
    ("Rajasthan",  5, "Cultural",  14000),

    # 6-day trips
    ("Leh",        6, "Adventure", 25000),
    ("Kerala",     6, "Leisure",   24000),
    ("Rajasthan",  6, "Cultural",  18000),
    ("Andaman",    6, "Beach",     28000),
    ("Agra",       4, "Cultural",  11000),
    ("Jaipur",     4, "Cultural",  10000),
    ("Mysore",     4, "Cultural",   8500),
    ("Hampi",      4, "Cultural",   9000),
    ("Madurai",    4, "Cultural",   8000),
    ]

TRIP_TYPE_MAP = {
    "Leisure": 0,
    "Adventure": 1,
    "Cultural": 2,
    "Beach": 3
}

X_budget = np.array([
    [row[1], TRIP_TYPE_MAP.get(row[2], 0)]
    for row in budget_data
])
y_budget = np.array([row[3] for row in budget_data])

budget_predictor = GradientBoostingRegressor(
    n_estimators=500,
    learning_rate=0.03,
    max_depth=4,
    min_samples_split=2,
    subsample=0.8,
    random_state=42
)
budget_predictor.fit(X_budget, y_budget)

def predict_budget(days, trip_type):
    X = np.array([[int(days), TRIP_TYPE_MAP.get(trip_type, 0)]])
    predicted = budget_predictor.predict(X)[0]
    minimum   = round(predicted * 0.85 / 100) * 100
    maximum   = round(predicted * 1.20 / 100) * 100
    return int(minimum), int(maximum)

# ============================================
# MODEL 3 — Hotel Recommender
# ============================================
def recommend_hotels(df, place, category=None, top_n=3):
    filtered = df[df['city'].str.lower() == place.lower()].copy()
    if filtered.empty:
        filtered = df[df['State'].str.lower().str.contains(place.lower(), na=False)]
    if filtered.empty:
        return []
    if category:
        cat_filtered = filtered[
            filtered['Category'].str.lower().str.contains(category.lower(), na=False)
        ]
        if not cat_filtered.empty:
            filtered = cat_filtered
  
    filtered['score'] = filtered['room_count'].fillna(0).astype(float)
    filtered = filtered.sort_values('score', ascending=False)
    hotels = []
    

    for _, row in filtered.head(top_n).iterrows():
        hotels.append({
    "name": row.get("property_name", "N/A"),
    "category": row.get("hotel_category", "N/A"),
    "rooms": row.get("room_count", "N/A"),
    "address": row.get("address", "N/A"),
    "rating": row.get("site_review_rating", "N/A")
})

    return hotels
preds = trip_classifier.predict(X_test)

acc = accuracy_score(y_test, preds)
print(f"Trip Classifier Accuracy: {acc*100:.2f}%")