const express = require('express');
const messages_controller = require('./controllers/messages_controller');

const app = express();

app.use(express.json());

app.get('/api/messages', messages_controller.readMessage);
app.post('/api/messages', messages_controller.createMessage);
app.put('/api/messages/:id', messages_controller.updateMessage);
app.delete('/api/messages/:id', messages_controller.deleteMessage);

const port = 3001;
app.listen(port, () => console.log(`listening on port ${port}`));