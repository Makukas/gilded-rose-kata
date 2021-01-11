var { expect } = require('chai');
var { Shop, Item } = require('../../gilded_rose.js');

describe("Gilded Rose foo item handling", function () {
  it("should be foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });

  it("should update foo quality", function () {
    const gildedRose = new Shop([new Item("foo", 2, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9);
  });

  it("should update foo sellIn", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(-1);
  });

  it("should degrade foo quality by 2 if sellIn <= 0", function () {
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(8);
  });

  it("should degrade foo quality by 1 if sellIn > 0", function () {
    const gildedRose = new Shop([new Item("foo", 1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9);
  });

  it("should keep foo quality 0 if quality already is 0", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });
});