const { succeed, fail, repair, get } = require("./enhancer");
// test away!

const itemKnife = {
    name: "Knife",
    durability: 0,
    enhancement: 0,
  };

  const itemSword = {
    name: "sword",
    durability: 70,
    enhancement: 14,
  };

  const itemAxe = {
    name: "axe",
    durability: 90,
    enhancement: 16,
  };

  const itemBow = {
    name: "bow",
    durability: 100,
    enhancement: 20,
  };

  const itemBomb = {
    name: "bomb",
    durability: 99,
    enhancement: 19,
  };

//test to be true
    it("should run tests without errors", function () {
      expect(true).toBe(true);
});

//test get name above 0
describe("get()", function () {
    it("Should return item name and level of enhancement if above 0", function () {
      get(itemBow);
      expect(itemBow.name).toBe("bow[20]");
    });
  });

//test repair
describe("enhancer suite", function () {
    describe("repair()", function () {
      it("takes an item and and returns the item with durability repaired", function () {
        repair(itemKnife);
        expect(itemKnife.durability).toBe(100);
      });
    });
});
