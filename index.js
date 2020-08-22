var fs = require('fs');
const readline = require('readline');
var { Shop, Item } = require('./gilded_rose.js');

processItems();

async function processItems(inputFile = 'text.txt') {
    const readInterface = readline.createInterface({
        input: fs.createReadStream(inputFile)
    });

    readInterface
        .on('line', function (itemInfo) {
            let splittedItemInfo = itemInfo.split("#")
            const gildedRose = new Shop([new Item(splittedItemInfo[0], parseInt(splittedItemInfo[1]), parseInt(splittedItemInfo[2]))]);
            const items = gildedRose.updateQuality();
            items.forEach(item => {
                let textToWrite = item.name + '#' + item.sellIn + '#' + item.quality + '\n';
                var file = '';
                switch (item.name) {
                    case 'Backstage passes to a TAFKAL80ETC concert':
                        file = 'Backstage.txt';
                        break;
                    case 'Sulfuras, Hand of Ragnaros':
                        file = 'Sulfuras.txt';
                        break;
                    case 'Aged Brie':
                        file = 'Brie.txt';
                        break;
                    case 'Conjured':
                        file = 'Conjured.txt';
                        break;
                    case 'foo':
                        file = 'foo.txt';
                        break;
                }
                streamWrite(file, textToWrite);
            })
        })
        .on('close', function (err) {
            console.log('Streams have been Closed');
        });
}

function streamWrite(file, textToWrite) {
    let writeStream = fs.createWriteStream(file, { flags: 'a' });
    writeStream.write(textToWrite);
    writeStream.end();
    return;
}