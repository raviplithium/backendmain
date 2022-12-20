const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const logger=require('../logger/logger')
const helper=require('../util/helper')
const validator=require('../validator/formatter')
const lodash = require('lodash');
const { fromPairs } = require('lodash');
const { pairs } = require('underscore');
// router.get('/test-me', function (req, res) {
//     console.log("email from introduction module", intro.myEmail)
//     intro.myFunction('Sabiha')
// //     console.log("email from employee module", employee.myEmail)

//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     let result = _.first(days, 4)
//     console.log(`Result from underscore function is ${result}`)


//     res.send('any dummy text')
// });


router.get('/test-you', function(req, res){
    logger.wel();
    helper.getbatchinfo();
    validator.formatter();
    let months = ["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"];
    let chunkeed = lodash.chunk(months, 3)
    console.log(chunkeed);
    let num = [1,3,5,7,9,11,13,15,17,19]
    let tailed = lodash.tail(num)
    console.log(tailed);
    let numm= [1,2,3]
    let nummm=[2,3,4]
    let nummmm=[4,5,6]
    let nummmmm=[6,7,8]
    let mum=[8,9,10];
    let unite = lodash.union(numm,nummm,nummmm,nummmmm,mum)
    console.log(unite);
    let pairs=lodash.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']])
    console.log(pairs)

    res.send("very important text")
})


module.exports = router;