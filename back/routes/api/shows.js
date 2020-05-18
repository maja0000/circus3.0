const express = require('express');
const router = express.Router();

const Show = require('../../model/Show');

router.get('/', (req, res) => {
  Show.find()
    .sort({ creation: -1 })
    .then((show) => res.json(show));
});

router.post('/', (req, res) => {
  const data = req.body;
  const newShow = new Show(data);
  newShow.save().then((show) => res.json(show));
});

router.get('/:id', (req, res, next) => {
  Show.findById(req.params.id)
    .then((show) => res.json(show))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  Show.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
  })
    .then((show) => res.json(show))
    .catch(next);
});

router.delete('/:id', (req, res) => {
  Show.findById(req.params.id)
    .then((show) =>
      show.remove().then(() => res.json({ res: 'show succesfully deleted' }))
    )
    .catch((err) => res.status(404).json({ res: 'failed to delete show' }));
});

module.exports = router;
