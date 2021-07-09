const express = require('express');
const messages_controller = require('./controllers/messages_controller');

const app = express();

app.use(express.json());

app.get(url, messages_controller.readMessage);
app.post(url, messages_controller.createMessage);
app.put(url, messages_controller.updateMessage);
app.delete(url, messages_controller.deleteMessage);

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));