# Notes API CRUD

This project is a simple API that allows CRUD operations for personal notes.

## Features
- Create, read, update and delete notes
- Each note includes:
  - Title
  - Author
  - Date and time
  - Body
  - Classification

## How to run

```bash
npm install
npm start
```

## Endpoints
- POST /notes
- GET /notes
- GET /notes/:id
- PUT /notes/:id
- DELETE /notes/:id

## ER Diagram

Entity: Note
Attributes:
- id (PK)
- title
- author
- datetime
- body
- classification
"# activity-14" 
