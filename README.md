# Backend Task
Express with Postgres

Install postgres Database for the Operating System you want to wor

# How To Run The Service

Download and install NodeJS and PostgreSQL if you don't have them already:

  https://nodejs.org/en/download/ 
	
  https://www.postgresql.org/download/
  
Change API and database configuration in api/queries.js. 

Then run these commands:

Install dependencies: 
  1) npm install
  2) npm install i express pg (to download express and postgress dependencies)
  3) npm init -y (for creating a package.json file)

Copy the index.js and queries.js files in the folder where you have run dependencies  for express and pg.

use nodemon for stating the server

download nodemon mdodule via npm 
	npm install nodemon

then finally for starting the server use nodemon index.js on commandline

By default API server will be started on this URL: http://localhost:3000/

# Service EndPoints

GET /users

Lists all users.

GET /users/:id

List all friends of the user with teh id specified

GET /friend/:id

Lists all friends of friends
