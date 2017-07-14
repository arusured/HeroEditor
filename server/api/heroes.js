'use strict';

exports = module.exports = function(app) {
  
  const items = require('./heroes.json');

  app.get('/api/heroes', function(req, res) {
    res.status(200).json(items);
  });

  app.get('/api/heroes/:id', function(req, res) {
    let id = req.params.id;
    let item = (items.data).filter((element, index, array) => {
      return (element.id === id);
    });
    res.status(200).json(item[0]);
  });

  app.post('/api/heroes', function(req, res) {
    let item = req.body;
    console.log(items)
    let id = items.length < 1 ? 0:items[items.length-1].id;
    item['id'] = String(Number(id) + 1);
    items.push(item);
    res.status(200).json(item);
  });

  app.delete('/api/heroes/:id', function(req, res) {
      let id = req.params.id;
      let _index;
      items.data.filter((element, index, array) => {
        if (element.id == id) _index = index;
        return (element.id === id);
      });
      items.data.splice(_index, 1);
      res.status(200).json();
  })

  app.put('/api/heroes/:id', function(req, res) {
      let id = req.params.id;
      let item = req.body;
      let _index;
      items.data.filter((element, index, array) => {
        if (element.id == id) _index = index;
        return (element.id === id);
      });;
      items.data[_index] = item;
      res.status(200).json();
  });
};