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
    //if no text was provided, return an error
    if (!updateText) {
        res.status(409).send("new text is empty");
        return;
    }

    const index = messageArr.findIndex(e => e.id == updateID);
    //only update if the message was found, otherwise return an error
    if (index >= 0) {
        messageArr[index].text = updateText
        res.status(200).send(messageArr);
    } else {
        res.status(404).send("message not found");
    }
}

// devmtn solution for update:
// let message = messageArr[index];
// messageArr[index] = {
//   id: message.id,
//   text: text || message.text,  //if new text is 'falsy' just use the old text. 
//   time: message.time
// };




const deleteMessage = (req, res) => {
    const deleteID = req.params.id;
    const index = messageArr.findIndex(e => e.id == deleteID);
    if (index >= 0) {
        messageArr.splice(index, 1);
        res.status(200).send(messageArr);
    } else {
        res.status(404).send("message not found");
    }

}

module.exports = {
    createMessage,
    readMessage,
    updateMessage,
    deleteMessage,
}