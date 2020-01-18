## Local Dev Commands

### npm install
This will install all dependencies to the application.

### npm run start
Launch application with node

### npm run nodemon
Launch application using [nodemon](https://nodemon.io/) which will `monitor for any changes in your source and automatically restart your server`

## Docker Commands

### Build Docker Image
`docker build -t appName .`

### Run Docker Image
`docker run --env-file=.env -p 3001:portValueHere -d appName`

## .ENV File used by both Local Dev and Docker
`.env`
```
CLIENT_SECRET=client_secret_here
REFRESH_TOKEN=refresh_token_here
CLIENT_ID=client_id_here
USER_AGENT=user_agent_here
PORT=port_here
```
