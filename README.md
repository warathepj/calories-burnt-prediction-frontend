# ซอร์สโค้ดนี้ ใช้สำหรับเป็นตัวอย่างเท่านั้น ถ้านำไปใช้งานจริง ผู้ใช้ต้องจัดการเรื่องความปลอดภัย และ ประสิทธิภาพด้วยตัวเอง

# Calories Burnt Prediction Application

A web application that analyzes and visualizes calories burned based on various factors including gender, age, height, weight, and vital signs.

## Features

- Data visualizations
- Real-time data analysis
- Multiple analysis views:
  - Calories burned by gender
  - Age-based analysis
  - Height and weight correlations
  - Duration impact analysis
  - Vital signs correlation
  - And more...

## Tech Stack

### Frontend

- Next.js 15.2
- React 19
- TypeScript
- Tailwind CSS
- Redux Toolkit

### Backend

- FastAPI
- Python
- Pandas
- Matplotlib
- Seaborn

## Getting Started

### Prerequisites

- Node.js (18.18.0 or higher)
- Python (3.8 or higher)
- npm or yarn
- pip

### Installation

1. Clone the repository:

```bash
git clone https://github.com/warathepj/calories-burnt-prediction-frontend.git
```

2. Frontend setup:

```bash
cd calories-burnt-prediction-frontend
npm install
npm run dev
```

3. Backend setup:
   download data at https://www.kaggle.com/datasets/ruchikakumbhar/calories-burnt-prediction

```bash
git clone https://github.com/warathepj/calories-burnt-prediction-backend.git
cd calories-burnt-prediction-backend
# Create a virtual environment (windows)
py -3 -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

4. Open your browser and navigate to:

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## API Endpoints

- `GET /`: Welcome message
- `GET /api/calories`: Retrieve calories data
- `GET /api/plot/calories-by-gender`: Gender-based analysis
- `GET /api/plot/calories-by-age`: Age-based analysis- Additional endpoints for various visualizations

## Development

## License

MIT

## Acknowledgments

- Next.js team for the frontend framework
- FastAPI team for the backend framework
