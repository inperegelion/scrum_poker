# Scrum Poker

Welcome to my personal learning & self-development project. Here I'm going to develop a simple scrum poker application just to master different techs, approaches and solutions.

### My intention

I am going to develop a full stack web app.

- To display **User Interface** I am using [React](https://uk.reactjs.org).
- To **serve API** I am going to use [Express](https://expressjs.com).
- To **store data** I am going to use [Mongo](https://mongodb.com) with [Mongoose](https://mongoosejs.com).
- To **compose** this all togather I am going to use [Docker](https://www.docker.com)
- I am going to figure out how appropriate for this task **Docker** is and what value does it bring.
- I am going to find some **hosting** to run this app somewhere except localhost.

### Used Materials

- It was not so easy to run MongoDB locally. [This official guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) saved me.
- [This Guide by Traversy Media](https://youtu.be/-0exw-9YJBo) really helped me to createfirst API version. No frendly boilerplates were found.
- [Ukrainian translation for JS Map Object](https://webdoky.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Map) by WebDoky.
- [Font Inter](https://fonts.google.com/specimen/Inter)
- Made markup with Figma [here](https://www.figma.com/file/f0S8IDvbsENzKoQHbGr9L0/Explain-it?node-id=409%3A348)
- [This Article](https://medium.com/@nicknauert/mongooses-model-populate-b844ae6d1ee7) helped me to make relations in my MongoDB 😁.

### Docs

Check out [docs](./docs/) folder to see more references.

### How to run

To start Front-End use these commands:

```bash
cd ./client
yarn
yarn start
```

Create file `.env` and add there Mongo Instance. My `.env` file:

```bash
NODE_ENV=development
PORT=8080
MONGO_URI=mongodb://localhost:27017/scrum_poker
```

To Start Back-end use approach below:

```bash
cd ./api
yarn
yarn server
```
