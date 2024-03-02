# SBA-319 Assignment

A Node / Express / MongoDb to-do list application with extras:

This app provides CRUD functionality to manage to-do tasks.
Tasks (collection 1) are created and assigned to users (collection 2). Each task has a collection of comments that allows for users to comment (collection 3) on the task.

## Routes:

### MAIN / index.js

- GET "/": redirects to "/all-tasks:
- GET "/all-tasks": displays all tasks
- GET "/all-users": displays all users
- GET "/by-user": displays all tasks sorted by assigned user
- GET "/by-status": displays all tasks sorted by status (done / not done)
- GET "/by-urgency": displays all tasks sorted by urgency (High, Medium, Low);

### TASKS:

- GET "/tasks": redirects to "/all-tasks:
- GET "/all-tasks": displays all tasks
- GET "/tasks/:id": displays a single task
- GET "/add-task": displays form to add a new task
- POST "/add-task": adds a new task
- GET "/update-task/:id": displays form to edit a task
- PATCH "/update-task/:id": edits a task
- GET "/task-detail/:id/add-comment": displays form to add a comment to a task
- POST "/task-detail/:id/add-comment": adds a comment to a task
- DELETE "/delete-task/:id": deletes a task

### USERS:

- GET "/users": redirects to "/all-users:
- GET "/all-users": displays all users
- GET "/users/:id": displays a single user
- GET "/add-user": displays form to add a new user
- POST "/add-user": adds a new user
- GET "/update-user/:id": displays form to edit a user
- PATCH "/update-user/:id": edits a user
- DELETE "/delete-user/:id": deletes a user

## Usage

1. Clone the repository
2. Run `npm install`
3. Change 'example.env' to '.env' and add your own MongoDB URI
4. Run `npm start`
5. Visit http://localhost:3000
