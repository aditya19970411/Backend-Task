# Backend Task
Express with Postgres

Install postgres Database for the Operating System you want to work

How To Run The Service
Download and install NodeJS and PostgreSQL if you don't have them already:

https://nodejs.org/en/download/
https://www.postgresql.org/download/
Change API and database configuration in api/queries.js. 

Then run these commands:

Install dependencies: npm install
Populate database with the test data, located in test-data.cypher. Important, if you already have neo4j server locally you have to reset node ID counter in order tests to succeed. I usually do it by shutting down the service and removing neo4j data: rm -rf data/graph.db
Run API server: npm start
Optionally run tests: npm test
