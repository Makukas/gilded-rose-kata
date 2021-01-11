var {expect} = require('chai');
var {Shop, Item} = require('../gilded_rose.js');
describe("Gilded Rose", function() {

  it("should be foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  it("should update foo quality", function() {
    const gildedRose = new Shop([ new Item("foo", 2, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9);
  });

  it("should update foo sellIn", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(-1);
  });

  it("should degrade foo quality by 2 if sellIn <= 0", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  });

  it("should degrade foo quality by 1 if sellIn > 0", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9);
  });

  it("should keep foo quality 0 if quality already is 0", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("should be Sulfuras, Hand of Ragnaros", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
  });

  it("should not decrease Sulfuras, Hand of Ragnaros quality", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(10);
  });

  it("should not decrease Sulfuras, Hand of Ragnaros sellIn", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(10);
  });

  it("should be Aged Brie", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Aged Brie");
  });

  it("should increase Aged Brie quality while sellIn decreases", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(11);
    expect(items[0].sellIn).to.equal(4);
  });

  it("should increase Aged Brie quality by 2 if sellIn <= 0", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(12);
    expect(items[0].sellIn).to.equal(-1);
  });

  it("should not increase quality above 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
    expect(items[0].sellIn).to.equal(4);
  });

  it("should be Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Backstage passes to a TAFKAL80ETC concert");
  });

  it("should increase Backstage passes quality by 2 if sellIn <= 10", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(4);
    expect(items[0].sellIn).to.equal(9);
  });

  it("should increase Backstage passes quality by 3 if sellIn <= 5", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(5);
    expect(items[0].sellIn).to.equal(4);
  });

  it("should increase Backstage passes quality by 1 if sellIn > 10", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 12, 2) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(3);
    expect(items[0].sellIn).to.equal(11);
  });

  it("should decrease Backstage passes quality to 0 if sellIn <= 0", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
    expect(items[0].sellIn).to.equal(-1);
  });

  it("should decrease Conjured items quality twice as fast (by 2)", function() {
    const gildedRose = new Shop([ new Item("Conjured", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
    expect(items[0].sellIn).to.equal(9);
  });

  it("should decrease Conjured items quality by 4 if saleIn <= 0 ", function() {
    const gildedRose = new Shop([ new Item("Conjured", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(6);
    expect(items[0].sellIn).to.equal(-1);
  });

});