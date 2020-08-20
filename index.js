var fs = require('fs');
const readline = require('readline');
var { Shop, Item } = require('./gilded_rose.js');

processItems();

async function processItems(inputFile = 'some_text.txt', outputFile = 'test.txt') {
    const readInterface = readline.createInterface({
        input: fs.createReadStream(inputFile)
    });

    readInterface
        .on('line', function (itemInfo) {
            var splittedItemInfo = itemInfo.split("#")
            const gildedRose = new Shop([ new Item(splittedItemInfo[0], parseInt(splittedItemInfo[1]), parseInt(splittedItemInfo[2]) )]);
            const items = gildedRose.updateQuality();
            items.forEach(item => {
                let textToWrite = item.name + '#' + item.sellIn + '#' + item.quality + '\n';
                switch(item.name){
                    case 'Backstage passes to a TAFKAL80ETC concert':
                        const writeStream_Backstage = fs.createWriteStream('Backstage.txt', { flags: 'a' });
                        writeStream_Backstage.write(textToWrite);
                        writeStream_Backstage.end();
                        break;
                    case 'Sulfuras, Hand of Ragnaros':
                        const writeStream_Sulfuras = fs.createWriteStream('Sulfuras.txt', { flags: 'a' });
                        writeStream_Sulfuras.write(textToWrite);
                        writeStream_Sulfuras.end();
                        break;
                    case 'Aged Brie':
                        const writeStream_Brie = fs.createWriteStream('Brie.txt', { flags: 'a' });
                        writeStream_Brie.write(textToWrite);
                        writeStream_Brie.end();
                        break;
                    case 'Conjured':
                        const writeStream_Conjured = fs.createWriteStream('Conjured.txt', { flags: 'a' });
                        writeStream_Conjured.write(textToWrite);
                        writeStream_Conjured.end();
                        break;
                    case 'foo':
                        const writeStream_foo = fs.createWriteStream('foo.txt', { flags: 'a' });
                        writeStream_foo.write(textToWrite);
                        writeStream_foo.end();
                        break;
                }
            })
        })
        .on('close', function (err) {
            console.log('Streams have been Closed');
        });
}