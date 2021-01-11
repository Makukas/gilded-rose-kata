var { expect } = require('chai');
var { Shop, Item } = require('../../gilded_rose.js');

describe("Gilded Rose Backstage passes to a TAFKAL80ETC concert item handling", function () {
    it("should be Backstage passes to a TAFKAL80ETC concert", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
    });
  
    it("should increase Backstage passes quality by 2 if sellIn <= 10", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(4);
      expect(items[0].sellIn).to.equal(9);
    });
  
    it("should increase Backstage passes quality by 3 if sellIn <= 5", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(5);
      expect(items[0].sellIn).to.equal(4);
    });
  
    it("should increase Backstage passes quality by 1 if sellIn > 10", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(3);
      expect(items[0].sellIn).to.equal(11);
    });
  
    it("should decrease Backstage passes quality to 0 if sellIn <= 0", function () {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).to.equal(0);
      expect(items[0].sellIn).to.equal(-1);
    });
  
  });