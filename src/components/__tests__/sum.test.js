const { sum } = require("../sum")

test("Sum function should return Sum of two numbers",() => {

    const result = sum(3,3);
    
    //Assertion
    expect(result).toBe(6);
})