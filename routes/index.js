var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bé tập tính' });
});
router.post('/', (req, res)=> {
  const number1=req.body.number1;
  const number2=req.body.number2;
  const operator = req.body.operatorRadios;

  let result;
  switch (operator){
    case "add":
      result = (parseFloat(number1) + parseFloat(number2));
      break;
    case "sub":
      result = (parseFloat(number1) - parseFloat(number2));
      break;
    case "mul":
      result = (parseFloat(number1) * parseFloat(number2));
      break;
    case "div":
      result = (parseFloat(number1) / parseFloat(number2));
      break;
  }

 res.render('index', { title: 'Bé tập tính', number1,number2, result, operator});
});

module.exports = router;
