module.exports = (req, res) => {

  var a = parseInt(req.query.a);
  var b = parseInt(req.query.b);
  var c = a + b;
  var outData = {
    'a': a,
    'b': b,
    'c': c
  };
  res.send(outData);

};
