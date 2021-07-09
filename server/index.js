const express = require('express');
const messages_controller = require('./controllers/messages_controller');

const app = express();

app.use(express.json());

const messagesBaseUrl = "/api/messages"
app.get('messagesBaseUrl', messages_controller.readMessage);
app.post('messagesBaseUrl', messages_controller.createMessage);
app.put(`${messagesBaseUrl}/:id`, messages_controller.updateMessage);
app.delete(`${messagesBaseUrl}/:id`, messages_controller.deleteMessage);

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));