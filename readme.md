## CRUD node.js example app
This node.js example app shows the very basics functions of a CRUD with auth:

- Login auth with JWT
- Listing data
- Register data
- Editing data
- Delete data

## Configuration

Step 1: Setup the postgres database with the crud.sql file

Step 2: Edit .env file and inject your credentials like this
```
NODE_APP_DATABASE_HOST=<DATABASE_HOST>
NODE_APP_DATABASE_PORT=<DATABASE_PORT>
NODE_APP_DATABASE_NAME=<DATABASE_NAME>
NODE_APP_DATABASE_USER=<DATABASE_USER>
NODE_APP_DATABASE_PASWWORD=<DATABASE_PASWWORD>
```

## Installation
Follow the steps for app test

Step 1: Install project
```bash
npm install
```
Step 2: Run app
```bash
npm run start
```
