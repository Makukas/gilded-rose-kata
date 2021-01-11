var { expect } = require('chai');
var { Shop, Item } = require('../../gilded_rose.js');

describe("Gilded Rose Sulfuras, Hand of Ragnaros item handling", function () {
    it("should be Sulfuras, Hand of Ragnaros", function () {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
    });
  
    it("should not decrease Sulfuras, Hand of Ragnaros quality", function () {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(10);
    });
  
    it("should not decrease Sulfuras, Hand of Ragnaros sellIn", function () {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).to.equal(10);
    });
  
  });