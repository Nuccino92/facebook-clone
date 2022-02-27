import Message from "../models/Message.js";

export const sendMessage_Post = async (req, res) => {
  const newMessage = new Message(req.body);

  await newMessage
    .save()
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(201).json(err);
    });
};

export const getMessages_Get = async (req, res) => {
  const { id } = req.params;

  await Message.find({
    conversation: id,
  })
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
