let messageArr = [];
let id = 0;

const createMessage = (req, res) => {
    const { text, time } = req.body
    // messageArr.push({ id, text, time });
    let newMessage = {
        text,
        time,
        id
    }
    messageArr.push(newMessage);
    id++;
    res.status(200).send(messageArr);
}

const readMessage = (req, res) => {
    res.status(200).send(messageArr);
}

const updateMessage = (req, res) => {
    const updateID = req.params.id;
    const updateText = req.body.text;
    const index = messageArr.findIndex(e => e.id == updateID);
    messageArr[index].text = updateText
     // let message = messageArr[index];
    // messageArr[index] = {
    //   id: message.id,
    //   text: text || message.text,
    //   time: message.time
    // };
    res.status(200).send(messageArr);
}

const deleteMessage = (req, res) => {
    const deleteID = req.params.id;
    const index = messageArr.findIndex(e => e.id == deleteID);
    messageArr.splice(index, 1);
    res.status(200).send(messageArr);
}

module.exports = {
    createMessage,
    readMessage,
    updateMessage,
    deleteMessage,
}