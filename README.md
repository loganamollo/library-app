# Library app
This is a library application built with React, Express and MongoDB

# Code organization
The codebase is split into two folders, the frontend and backend. This is a personal preference. The root of the Express JS app is the `backend` folder. The root of the React app is the `frontend` folder.

# How to run it
### Setting up MongoDB
- Initialize your MongoDB local server (good luck with that)
- Create a database called `Book`
- Create a collection called `Books`

### Running the API
- Navigate to the `backend` folder
- In the cli, run 
```shell
npm start
```

- The server should start and on the console, log: "Server up! Database connected" for the respective functionality

### React
To be implemented

# Testing the API
I preferred using the VSCode extension `REST API` by Marcel J. Kloubert
To install it, search for it in the extensions tab.
Alternatively, in VSCode, type `Ctrl + P` to open VSCode quick open. In the window, type `ext install vs-rest-api`

The tests are in `backend/route.rest`
They are strings that begin with the HTTP verb followed by the path and any additional JSON objects

To run them, click on the link that appears on top of them. It will open a new window displaying the output

For verbs such as `patch`, you can copy and paste the book id you have retrieved from the `get` test.
