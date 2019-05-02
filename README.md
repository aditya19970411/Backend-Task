# Backend Task
Express with Postgres

Install postgres Database for the Operating System you want to work

# How To Run The Service

Download and install NodeJS and PostgreSQL if you don't have them already:

  https://nodejs.org/en/download/ 
	
  https://www.postgresql.org/download/
  
Change database configuration in queries.js. 

Then run these commands:

Install dependencies: 
  1) npm install
  2) npm install i express pg (to download express and postgress dependencies)
  3) npm init -y (for creating a package.json file)
  
  
Create a Table in postgress with name users1:

CREATE TABLE users1 (id SERIAL PRIMARY KEY, firstName VARCHAR(20), lastname VARCHAR(20), avatar VARCHAR(20);

Create another Table named friend:

CREATE TABLE friend (user_id INTEGER REFERENCES users1(id), friend_id INTERGER REFERENCES users1(id));

populate these tables by using insert into commands

users1 Table:

id | firstname | lastname | avatar
----|-----------|----------|--------
  1 | George    | marine   | dog
  2 | Jerry     | marine   | cat
  3 | u1        | s1       | d1
  4 | u2        | s2       | d1
  5 | u3        | s3       | d1
  6 | u4        | s4       | d1
  7 | u5        | s5       | d1
  8 | u6        | s6       | d1
  9 | u7        | s7       | d1
 10 | u8        | s8       | d1
 12 | u9        | s9       | d2
 13 | u10       | s10      | d2
 15 | u11       | s11      | d3
 16 | Krishna   | Bret     | d2
 17 | bristle   | Back     | d3
 19 | Omni      | Slash    | d4
 20 | Billy     | Batson   | d4 
 
friend Table:

user_id | friend_id
---------|-----------
1 	|         2
1 	|         3
1 	|         4
2 	|         4
2 	|         5
3 	|         5
3 	|         6
3 	|         8

       
Copy the index.js and queries.js files in the folder where you have run dependencies  for express and pg.

use nodemon for stating the server

download nodemon mdodule via npm 
	npm install nodemon

then finally for starting the server use nodemon index.js on commandline

By default API server will be started on this URL: http://localhost:3000/

# Service EndPoints

GET /users/:pageno/:size

Lists all users with pagination.

GET /friends/:id

List all friends of the user with teh id specified

GET /friendsoffriends/:id

Lists all friends of friends
