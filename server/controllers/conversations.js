import Conversation from "../models/Conversation.js";

export const startConversation_Post = async (req, res) => {
  const { userId, secondId } = req.body;

  const newConversation = new Conversation({
    users: [userId, secondId],
  });

  await newConversation
    .save()
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

export const findConversation_Get = async (req, res) => {
  const { firstId, secondId } = req.params;

  await Conversation.findOne({
    users: { $all: [firstId, secondId] },
  })
    .then((response) => {
      return res.status(201).json(response);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};
