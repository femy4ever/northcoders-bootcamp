const VendingMachine = require("../sections/2-oop-vending-machine.js");

// OOP Vending Machine 1
// For this section you will write a VendingMachine class that will return vending machine instances.

// OOP Vending Machine - 1
// Your vending machine must have a credit property, which will be a number representing amount of pence, starting at 0.

// const testMachine = new VendingMachine();
// testMachine.credit; // 0;

describe("VendingMachine", () => {
  test("should return a credit property starting at 0", () => {
    const testMachine = new VendingMachine()
    expect (testMachine).toHaveProperty('credit')
    expect(testMachine.credit).toBe(0)
  });
  test("this addCredit method should increase balance when credit is added in machine", () => {
    const testMachine = new VendingMachine();
    expect(typeof testMachine.addCredit).toBe('function')
    testMachine.credit;
    expect(testMachine.credit).toBe(0);
    testMachine.addCredit(50);
    expect(testMachine.credit).toBe(50);
    testMachine.addCredit(10);
    expect(testMachine.credit).toBe(60);
  });

  test("the vending machine should have the correct stock property", () => {
    const testMachine = new VendingMachine();
    expect (testMachine).toHaveProperty('stock')
    expect(testMachine.stock).toEqual({
      A: {},
      B: {},
      C: {}
    });
  });
  test("the vending machine should have the correct stock property", () => {
    const testMachine = new VendingMachine();
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    testMachine.addStock(marsBars, "A");
    expect(testMachine.stock).toEqual({
        A: { name: 'marsBar', price: 50, quantity: 6 },
        B: {},
        C: {}
    });
  });
  test("the method purchaseItem should check if credit is sufficient and decrease stock quantity", () => {
    const testMachine = new VendingMachine();
    expect(typeof testMachine.purchaseItem).toBe('function')
    const marsBars = { name: "marsBar", price: 50, quantity: 6 };
    testMachine.addStock(marsBars, "A");
    testMachine.addCredit(30);
    expect(testMachine.purchaseItem("A")).toBe('Insufficient credit!');
    

    const testMachine2 = new VendingMachine();
    testMachine2.addStock(marsBars, "A");
    testMachine2.addCredit(60);
    expect(testMachine2.purchaseItem("A")).toBe('marsBar');
    expect(testMachine2.stock).toEqual({
        A: { name: 'marsBar', price: 50, quantity: 5 },
        B: {},
        C: {}
    });
    expect(testMachine2.credit).toBe(10);
});
});