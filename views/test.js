module.exports = (app) => {

  // view
  app.get('/', require('../controllers/index'));

  // view with query data
  app.get('/calcAdd', require('../controllers/calc-add'));

  // update
  // ..todo

  // delete
  // ..todo

};
