# api-with-node
Example API using Node for Backend and React for Frontend.
This exercices is a example using Node.js, ReactJS and MySQL.
I recomend You open each folder in different windows in Visual Studio Code or other IDE.
In each window just need tu run npm install in main root folder.
Import DataBase in your MySQL. 
Then run npm start in the main root folder.

The server listen requests in port 3001.

the aim in this example is achive send a token with Authentication with header using protocolo HTTP. if the user has permission to make consults server will response with status 200 and data but if user don't have a token valid the server will response with estatus 401 and it wont show data you can change the token 123 in file findComponent-2 in line 30.
