#  Q&A app

This project is built with Next.js and consists of separate frontend and backend folders.

## Prerequisites

Before running the project, ensure that you have the following software installed on your machine:

- Node.js
- npm
- Git

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/herrsaid/q-a_app.git

Navigate to the project root:

    cd q-a_app

setup the database:

    docker compose up -d


Install dependencies for the frontend:

    cd frontend
    npm install


Install dependencies for the backend:
    cd ../backend
    npm install
    npx prisma migrate dev --name initial
    npx prisma generate

Running the Project

Frontend
Navigate to the frontend folder:
    cd ../frontend


Run the development server:
    npm run dev

Visit http://localhost:3000 in your browser.

Backend

Navigate to the backend folder:
    cd ../backend

Run the development server:
    npm run dev

The backend server will start at http://localhost:1337.

Usage

Now that both the frontend and backend servers are running, you can access the application at http://localhost:3000 .

Feel free to explore and customize the code for your specific use case.