var { expect } = require('chai');
var { Shop, Item } = require('../../gilded_rose.js');

describe("Gilded Rose Aged Brie item handling", function () {
    it("should be Aged Brie", function () {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal("Aged Brie");
    });
  
    it("should increase Aged Brie quality while sellIn decreases", function () {
      const gildedRose = new Shop([new Item("Aged Brie", 5, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(11);
      expect(items[0].sellIn).to.equal(4);
    });
  
    it("should increase Aged Brie quality by 2 if sellIn <= 0", function () {
      const gildedRose = new Shop([new Item("Aged Brie", 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(12);
      expect(items[0].sellIn).to.equal(-1);
    });
  
    it("should not increase Aged Brie quality above 50", function () {
      const gildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(50);
      expect(items[0].sellIn).to.equal(4);
    });
  });