class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      switch (this.items[i].name) {
        case 'Aged Brie':
          this.items[i].quality = adjustQuality(this.items[i].quality, this.items[i].sellIn, 1);
          this.items[i].sellIn--;
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          if (this.items[i].sellIn === 0) {
            this.items[i].quality = 0;
          } else if (this.items[i].sellIn <= 5) {
            this.items[i].quality += 3;
          } else if (this.items[i].sellIn <= 10) {
            this.items[i].quality += 2;
          } else {
            this.items[i].quality += 1;
          }
          this.items[i].quality = checkQualityRange(this.items[i].quality)
          this.items[i].sellIn--;
          break;
        case 'Conjured':
          this.items[i].quality = adjustQuality(this.items[i].quality, this.items[i].sellIn, -2);
          this.items[i].sellIn--;
          break;
        case 'foo':
          this.items[i].quality = adjustQuality(this.items[i].quality, this.items[i].sellIn, -1);
          this.items[i].sellIn--;
          break;
      }
    }

    return this.items;
  }
}

function checkQualityRange(quality) {
  // check the quality range and adjust the value if needed
  if (quality < 0) {
    quality = 0;
  }
  if (quality > 50) {
    quality = 50;
  }
  return quality;
}

function adjustQuality(quality, sellIn, adjustBy) {
  // adjusts quality if sellIn is > 0
  if (sellIn > 0) {
    quality += adjustBy;
  } else {
    quality += adjustBy + adjustBy;
  }
  quality = checkQualityRange(quality);
  return quality;
}

module.exports = {
  Item,
  Shop
}