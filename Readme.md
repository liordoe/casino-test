### Start
```
npm i

echo -e 'PORT=3000\nMODE=dev\nMONGO_DB_NAME=casino\nMONGO_PATH=localhost:27017\nMONGO_USER=\nMONGO_PASSWORD=' > ./config/.env

npm run start
```

### Migrations
As far as I did not add migrations to this project, 
you can use `POST /api/fill` call to fill database
with test data (8 documents for manual functionality testing) 

### Tests
As far as it is a 'draft' project, I didn't create tests for it.
