var fs = require('fs');
const readline = require('readline');
var { Shop, Item } = require('./gilded_rose.js');

processItems();

async function processItems(inputFile = 'generatedInput') {
    let writeStream_Brie = fs.createWriteStream('Brie', { flags: 'a' });
    let writeStream_Backstage = fs.createWriteStream('Backstage', { flags: 'a' });
    let writeStream_Sulfuras = fs.createWriteStream('Sulfuras', { flags: 'a' });
    let writeStream_Conjured = fs.createWriteStream('Conjured', { flags: 'a' });
    let writeStream_foo = fs.createWriteStream('foo', { flags: 'a' });
    const readInterface = readline.createInterface({
        input: fs.createReadStream(inputFile)
    });

    readInterface
        .on('line', function (itemInfo) {
            let splittedItemInfo = itemInfo.split("#")
            const gildedRose = new Shop([new Item(splittedItemInfo[0], parseInt(splittedItemInfo[1]), parseInt(splittedItemInfo[2]))]);
            const items = gildedRose.updateQuality();
            items.forEach(item => {
                let textToWrite = item.name + '#' + item.quality + '#' + item.sellIn + '\n';
                switch (item.name) {
                    case 'Backstage passes to a TAFKAL80ETC concert':
                        writeStream_Backstage.write(textToWrite);
                        break;
                    case 'Sulfuras, Hand of Ragnaros':
                        writeStream_Sulfuras.write(textToWrite);
                        break;
                    case 'Aged Brie':
                        writeStream_Brie.write(textToWrite);
                        break;
                    case 'Conjured':
                        writeStream_Conjured.write(textToWrite);
                        break;
                    case 'foo':
                        writeStream_foo.write(textToWrite);
                        break;
                }
            })
        })
        .on('close', function (err) {
            console.log('Streams have been Closed');
            writeStream_Backstage.end();
            writeStream_Sulfuras.end();
            writeStream_Brie.end();
            writeStream_Conjured.end();
            writeStream_foo.end();
        });
}