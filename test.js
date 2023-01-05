const {sum} = require("./app.js");
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

const {fromEuroToDollar} = require('./app.js');
test("One euro should be 1.2 dollars", function(){
   const  { fromEuroToDollar } = require('./app.js')
   expect(fromEuroToDollar(1)).toBe(1.2);
})
const {fromEuroToYen} = require('./app.js');
test("One euro should be 127.9 yennes", function(){
   const  { fromEuroToYen } = require('./app.js')
   expect(fromEuroToYen(1)).toBe(127.9);
})
const {fromEuroToPound} = require('./app.js');
test("One euro should be 0.8 pounds ", function(){
   const  { fromEuroToPound } = require('./app.js')
   expect(fromEuroToPound(1)).toBe(0.8);
}) 

