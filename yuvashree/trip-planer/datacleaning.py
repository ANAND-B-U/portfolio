import pandas as pd
df=pd.read_csv('csv_data.csv')
print(df.columns)
print(df.head())
print(df.isnull().sum())
print("original data",df.shape)
print(df.head())
print("cleaned data",df.shape)
df = df.drop_duplicates(subset='property_name')
print("after the duplicate",df.shape)
num=df.select_dtypes(include=['number','float']).columns
for col in num:
    df[col]=df[col].fillna(df[col].mean())
print("Null values in numeric columns:")
print(df[num].isnull().sum())
print("Null values in non-numeric or text columns:")
txt=df.select_dtypes(include=["object","string"]).columns
for col in txt:
    df[col]=df[col].fillna("unknown")
print(df[txt].isnull().sum())

df.to_csv("cleaned_movie.csv",index=False)
print("the dataset saved sucessfully")
print(df.shape)