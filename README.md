# music-e-comm
## E-Commerce platform for music-related digital products using Node.js, React.js and MySQL.
### Dependencies
Use the docker-compose.yml to set up the project in minimum time.  
`ALTER USER root IDENTIFIED WITH mysql_native_password BY 'secret'` in the mysql container.

Versions:  
- git v2.37.2.2
- Docker Engine v20.10.17
- nodejs 16.17.0 (includes npm 8.15.0)
- mysql 8.0.30
  
## Ongoing Documentation
### Setup  
I installed the LTS version of Node.js to have the most stable development experience. I will be using NPM as it already comes with the Installation and I can always move to another package manager if I think its necessary. For now NPM is proven to work and has a lot of support online. I initiated the backend using npm init -y and created seperate folders for Authentication, Configuration and the API itself. I initialized the frontend using create-react-app. I created a new MySQL database and exported the schema into a seperate folder. The advantages of putting your database schema under version control are plenty.  
I created Docker images for backend, frontend and data respectively. For the backend i had to start nodemon with -L so it can watch for events outside the container and hot reload. For the frontend I had to create a .env file and set WATCHPACK_POLLING to true for the same reason. For the frontend to be reachable from outside the container I had to change the host to 0.0.0.0, since localhost is only reachable inside the container. For the database, when it is first started up, I need to manually set ALTER USER root IDENTIFIED WITH mysql_native_password BY 'secret' because otherwise mysql v>5 does allow the client to connect. This is something I have to look into more closely when moving to production, but it's fine for development. Next I created a docker-compose file for the three containers, this automatically also puts them in the same network. The setup steps of this project are now cloning the repo, starting the docker-compose and configuring the database, thats it.   
### Planning
I started by drawing up a quick sketch of the frontend in Figma.
![alt text](https://github.com/SamuelSchwienbacher/music-e-comm/blob/main/resources/sketch-1.png?raw=true)
![alt text](https://github.com/SamuelSchwienbacher/music-e-comm/blob/main/resources/sketch-2.png?raw=true)
The frontend will be quite simple, but will inform me what tables and entities the database needs. The store is made of articles. These articles have a type (beat, drum kit, MIDI). They have a cover image, a name, a description, and a price. They have a sample audio that can be played to get a sense of the product. Each user, in order to buy, needs to create a simple account with username, password, and email. Each user has a library of products that he owns and can access at all times.
So there needs to be an “articles” table with columns (id, type, cover, name, description, price, sample). Then there needs to be a “user” table with columns (username, password, email, articles). Articles has a n:n relationship with user. This means we need an intermediary table “library” that has two columns (u_username, a_id).
