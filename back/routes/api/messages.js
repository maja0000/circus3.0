const express = require('express');
const router = express.Router();

const Message = require('../../model/Message');

router.get('/', (req, res) => {
  Message.find()
    .sort({ creation: -1 })
    .then((message) => res.json(message));
});

router.post('/', async (req, res) => {
  const data = req.body;
  // const newMessage = new Message(data);
  await Message.create(data);
  await Message.find()
    .sort({ creation: -1 })
    .then((message) => {
      console.log(message);
      res.json(message);
    });
});

router.get('/:id', (req, res, next) => {
  Message.findById(req.params.id)
    .then((message) => res.json(message))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Message.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  })
    .then((message) => res.json(message))
    .catch(next);
});

router.delete('/:id', (req, res) => {
  Message.findById(req.params.id)
    .then((message) =>
      Message.remove().then(() =>
        res.json({ res: 'Message succesfully deleted' })
      )
    )
    .catch((err) => res.status(404).json({ res: 'failed to delete Message' }));
});

module.exports = router;
