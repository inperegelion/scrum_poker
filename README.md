# Scrum Poker

Welcome to my personal learning & self-development project. Here I'm going to develop a simple scrum poker application just to master different topics and solutions.

### My intention

I am going to develop a full stack web app with MERN stack.

- To display **User Interface** I am going to use React.
- To **serve API** I am going to use Express, and figure out how to apply Swagger.
- To **store data** I am going to use Mongo.
- To **compose** this all togather I am going to use Docker
- I am going to figure out how appropriate for this task **Docker** is and what value does it bring
- I am going to find some **hosting** to run this app not only on localhost

### Used Materials
- It was not so easy to run MongoDB locally. [This official guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) saved me.
- [This Guide by Traversy Media](https://youtu.be/-0exw-9YJBo) really helped me to createfirst API version. No frendly boilerplates were found.
- [Ukrainian translation for JS Map Object](https://webdoky.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Map) by WebDoky.
- [Font Inter](https://fonts.google.com/specimen/Inter)
- Made markup with Figma [here](https://www.figma.com/file/f0S8IDvbsENzKoQHbGr9L0/Explain-it?node-id=409%3A348)

### TODOs

During the development I am noticing some point of growth to see what to develop next.

| ID       | Days  | Description                               |
| -------- | :---: | ----------------------------------------- |
| TD-1     |   1   | find BP for API routing structure         |
| TD-2     |   ½   | BP for mongo documents like my Room.Users |
| TD-3     |   ½   | Translate API to TS                       |
| TD-4     |   1   | Add tests                                 |
| TD-5     |   1   | **Delpoy on Docker**                      |
| TD-6     |   ¼   | Find mention of TD-6 in the codebase      |
| TD-7     |   ¼   | make 1 repo with joint node_modules       |
| TD-8     |   ¼   | add font Inter                            |
| ~~TD-9~~ |   ½   | ~~apply React-query poll api~~            |
| TD-10    |   ½   | use state management system (**Mobx**)    |
| TD-11    |   ¼   | apply Figma styles                        |
| TD-12    |   ¼   | **Deploy on web hosting**                 |

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
