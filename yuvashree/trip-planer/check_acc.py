# quick_check.py — new file create pannu
import numpy as np
from ml_models import classify_trip, predict_budget,budget_predictor,TRIP_TYPE_MAP

print("=" * 50)
print("CONFIDENCE & ACCURACY QUICK CHECK")
print("=" * 50)

# Trip Classifier — all combinations test pannu
print("\n🤖 TRIP CLASSIFIER CONFIDENCE:")
print("-" * 40)

test_cases = [
    ["Beach", "Shopping"],                          # Beach (not Leisure)
    ["Nature & Hiking", "Wildlife & Safari"],       # Adventure
    ["Temples & Spiritual", "History & Culture"],   # Cultural
    ["Adventure Sports", "Nature & Hiking"],        # Adventure
    ["Food & Local Cuisine", "Shopping"],           # Leisure
    ["Beach", "Adventure Sports"],                  # Beach (not Adventure)
    ["Temples & Spiritual", "Food & Local Cuisine"],# Cultural
    ["Wildlife & Safari", "Adventure Sports"],      # Adventure
    ["History & Culture", "Shopping"],              # Cultural
    ["Beach", "Food & Local Cuisine"],              # Beach (not Leisure)
    ["Beach", "Shopping"],                          # Beach
    ["Beach", "Food & Local Cuisine"],              # Beach
    ["Beach", "Adventure Sports"],                  # Beach
]

expected = [
    "Beach",     # Beach + Shopping = Beach trip
    "Adventure",
    "Cultural",
    "Adventure",
    "Leisure",
    "Beach",     # Beach + Adventure = Beach trip
    "Cultural",
    "Adventure",
    "Cultural",
    "Beach",     # Beach + Food = Beach trip
    "Beach",
    "Beach",
    "Beach",
]
correct=0

for i, tc in enumerate(test_cases):
    trip_type, confidence = classify_trip(tc)
    is_correct = trip_type == expected[i]
    if is_correct:
        correct += 1
    status = "✅" if is_correct else "❌"
    bar = "█" * (confidence // 10) + "░" * (10 - confidence // 10)
    print(f"{status} {str(tc)[:40]:<40}")
    print(f"   → {trip_type:<12} [{bar}] {confidence}%")

accuracy = (correct / len(test_cases)) * 100
print(f"\n✅ Overall Accuracy: {accuracy:.0f}% ({correct}/{len(test_cases)} correct)")

# Budget Predictor — test pannu
print("\n\n💰 BUDGET PREDICTOR CONFIDENCE:")
print("-" * 40)

budget_tests = [
    (2, "Cultural",   6000),
    (3, "Leisure",   12000),
    (3, "Adventure", 10000),
    (5, "Adventure", 18000),
    (4, "Cultural",   9000),
    (1, "Cultural",   2500),
    (6, "Adventure", 25000),
    (3, "Cultural",   8000),
]

total_error = 0
for days, ttype, actual in budget_tests:
    # Direct model prediction — no midpoint needed!
    X = np.array([[days, TRIP_TYPE_MAP.get(ttype, 0)]])
    predicted = budget_predictor.predict(X)[0]
    min_b, max_b = predict_budget(days, ttype)
    error_pct = abs(predicted - actual) / actual * 100
    total_error += error_pct
    in_range = min_b <= actual <= max_b
    status = "✅" if in_range else "❌"
    
    print(f"{status} {days}d {ttype:<12} "
          f"Predicted: Rs.{predicted:<6.0f} | "
          f"Actual: Rs.{actual:<6} | "
          f"Range: Rs.{min_b}-{max_b} | "
          f"Error: {error_pct:.1f}%")

avg_error = total_error / len(budget_tests)
budget_accuracy =100 -avg_error
print(f"\n✅ Avg Error: {avg_error:.1f}%")
print(f"✅ Accuracy:  {100 - avg_error:.1f}%")
print("\n" + "=" * 50)
print("FINAL SUMMARY")
print("=" * 50)
print(f"🤖 Trip Classifier  → {accuracy:.0f}% accuracy")
print(f"💰 Budget Predictor → {budget_accuracy:.1f}% accuracy (avg error {avg_error:.1f}%)")
print(f"🏨 Hotel Recommender→ Rule-based (100% deterministic)")
print("=" * 50)