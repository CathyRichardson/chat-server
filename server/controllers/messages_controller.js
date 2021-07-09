let messageArr = [];

let id =0;

const createMessage = (req, res) => {
    const {text, time} = req.body
    let newMessage = {
        text,
        time,
        id
    }
    id++;
    res.status(200).send(messageArr); 
}

const readMessage = (req, res) => {
    res.status(200).send(messageArr);
}

const updateMessage = (req, res) => {
    res.status(200).send(messageArr);
}

const deleteMessage = (req, res) => {
    res.status(200).send(messageArr);
}

module.exports = {
    createMessage,
    readMessage,
    updateMessage,
    deleteMessage,
}