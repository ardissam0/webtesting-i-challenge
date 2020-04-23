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

//increment item enhancement level or not
describe("succeed()", function () {
    it("increments enhancement by 1", function () {
      succeed(itemKnife);
      expect(itemKnife.enhancement).toBe(1);
    });
    it("should not increment above 20", function () {
      succeed(itemBow);
      expect(itemBow.enhancement).toBe(20);
    });
  });


//take off durability/enhancement or not
describe("fail()", function () {
    it("If the enhancement level is more than 17 take 10 from durability and 1 from enhancement", function () {
      fail(itemBomb);
      expect(itemBomb.enhancement).toBe(18);
      expect(itemBomb.durability).toBe(89);
    });
    it("If the enhancement level is less than 15, take off 5 from durability", function () {
      fail(itemSword);
      expect(itemSword.durability).toBe(65);
    });
    it("If the enhancement level is more than 15 but less than 17, subtract 10 from durability ", function () {
      fail(itemAxe);
      expect(itemAxe.durability).toBe(80);
      expect(itemAxe.enhancement).toBe(16);
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


//test get name above 0
describe("get()", function () {
    it("Should return item name and level of enhancement if above 0", function () {
      get(itemBow);
      expect(itemBow.name).toBe("bow[20]");
    });
  });

});

