var { expect } = require('chai');
var { Shop, Item } = require('../../gilded_rose.js');

describe("Gilded Rose Conjured item handling", function () {
    it("should decrease Conjured items quality twice as fast (by 2)", function () {
      const gildedRose = new Shop([new Item("Conjured", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(8);
      expect(items[0].sellIn).to.equal(9);
    });
  
    it("should decrease Conjured items quality by 4 if saleIn <= 0 ", function () {
      const gildedRose = new Shop([new Item("Conjured", 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(6);
      expect(items[0].sellIn).to.equal(-1);
    });
  
  });