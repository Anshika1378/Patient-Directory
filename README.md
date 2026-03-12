# Patient Directory App

A responsive patient directory built using **Next.js, TypeScript, and Tailwind CSS**.  
This application displays patient records with **search, filter, sorting, pagination, and multiple view modes**.

---

## 🚀 Features

- 🔍 **Search Patients**
  - Search patients by name

- 🩺 **Filter by Medical Issue**
  - Fever
  - Headache
  - Sore Throat
  - Sprained Ankle
  - Rash

- 🔢 **Sort by Age**
  - Ascending
  - Descending

- 📄 **Pagination**
  - Navigate through patient records

- 📊 **Two View Modes**
  - Table View
  - Card View

- ⏳ **Loading State**
  - Spinner shown while fetching data

- 🎨 **Responsive UI**
  - Works on desktop and tablet

---

## 🛠 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Local API Routes**
- **JSON Mock Data**

---

## 📂 Project Structure
app
api
data
route.ts

components
Search.tsx
Filter.tsx
TableView.tsx
CardView.tsx
Pagination.tsx

data
MOCK_DATA.json

types
patient.ts


---

## ⚙️ API Endpoint

Local API is implemented using **Next.js Route Handlers**.

Example request:
/api/data?page=1&limit=10&search=zoe&sort=age_asc&issue=fever
### Query Parameters

| Parameter | Description |
|----------|-------------|
| page | Current page number |
| limit | Records per page |
| search | Search by patient name |
| sort | age_asc / age_desc |
| issue | Filter by medical issue |

---