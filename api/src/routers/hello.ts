import express from 'express';
import { safeController } from '../helpers/safeController';

let helloRouter = express.Router();

const helloHTML = `
<!DOCTYPE html>
<html>
<head>
<title>HELLO</title>
</head>
<body>
    <p>Yes, you are here!</p>
</body>
</html>
`;

helloRouter.get('/', async (req, res) => {
    safeController(async () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(helloHTML);
    }, res);
});

export default helloRouter;
