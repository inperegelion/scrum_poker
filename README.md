# Scrum Poker

Welcome to my personal learning & self-development project. Here I'm going to develop a simple scrum poker application just to master different topics and solutions.

### My intention

I am going to develop a full stack web app with MERN stack.

- To display **User Interface** I am going to use React.
- To **serve API** I am going to use Express, but in future I'd move to [Metarhia](https://metarhia.com/).
- To **store data** I am going to use Mongo.
- To **compose** this all togather I am going to use Docker
- I am going to figure out how appropriate for this task **Docker** is and what value does it bring
- I am going to find some **hosting** to run this app not only on localhost

### TODOs

During the development I am noticing some point of growth to see what to develop next.

| ID   | Description                               |
| ---- | ----------------------------------------- |
| TD-1 | find BP for API routing structure         |
| TD-2 | BP for mongo documents like my Room.Users |
| TD-3 | Translate to TS                           |
| TD-4 | Add tests                                 |
| TD-5 | **Delpoy on Docker**                      |
| TD-6 | Find mention of TD-6 in the codebase      |
| TD-7 | TBA                                       |

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
