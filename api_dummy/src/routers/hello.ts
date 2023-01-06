import express from 'express';

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
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(helloHTML);
});

export default helloRouter;
