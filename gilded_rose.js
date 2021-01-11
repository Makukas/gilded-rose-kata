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
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      switch (item.name) {
        case 'Aged Brie':
          item = handle_aged_brie(item);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          item = handle_backstage_passes(item)
          break;
        case 'Conjured':
          item = handle_conjured(item);
          break;
        case 'foo':
          item = handle_foo(item);
          break;
      }
    }

    return this.items;
  }
}

function handle_general_item(item, adjust_quality_by){
  item.quality = adjustQuality(item.quality, item.sellIn, adjust_quality_by);
  item.sellIn--;
  return item;
}

// handling for aged brie, conjured and foo items is nearly identical but they
// are in different functions in case their handling changes in the future
function handle_aged_brie(item){
  return handle_general_item(item, 1);
}

function handle_conjured(item){
  return handle_general_item(item, -2);
}

function handle_foo(item){
  return handle_general_item(item, -1);
}

function handle_backstage_passes(item){
  if (item.sellIn === 0) {
    item.quality = 0;
  } else if (item.sellIn <= 5) {
    item.quality += 3;
  } else if (item.sellIn <= 10) {
    item.quality += 2;
  } else {
    item.quality += 1;
  }
  item.quality = checkQualityRange(item.quality)
  item.sellIn--;
  return item
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