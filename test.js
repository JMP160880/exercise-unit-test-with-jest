const {sum} = require("./app.js");
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

const {fromEuroToDollar} = require('./app.js');
test("One euro should be 1.2 dollars", () => {
   let totalDolar = fromEuroToDollar(1);
   expect(totalDolar).toBe(1.2);
})
const {fromEuroToYen} = require('./app.js');
test("One euro should be 127.9 yennes", () => {
   let totalYen = fromEuroToYen(1);
   expect(totalYen).toBe(127.9);
})
const {fromEuroToPound} = require('./app.js');
test("One euro should be 0.8 pounds ", () => {
   let totalPound = fromEuroToPound(1);
   expect(totalPound).toBe(0.8);
}) 

