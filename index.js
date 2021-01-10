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
        .on('line', async function (itemInfo) {
            let splittedItemInfo = itemInfo.split("#")
            const gildedRose = new Shop([new Item(splittedItemInfo[0], parseInt(splittedItemInfo[1]), parseInt(splittedItemInfo[2]))]);
            const items = gildedRose.updateQuality();
            for (let item of items) {
                let textToWrite = item.name + '#' + item.quality + '#' + item.sellIn + '\n';
                switch (item.name) {
                    case 'Backstage passes to a TAFKAL80ETC concert':
                        await stream_write(writeStream_Backstage, textToWrite);
                        break;
                    case 'Sulfuras, Hand of Ragnaros':
                        await stream_write(writeStream_Sulfuras, textToWrite);
                        break;
                    case 'Aged Brie':
                        await stream_write(writeStream_Brie, textToWrite);
                        break;
                    case 'Conjured':
                        await stream_write(writeStream_Conjured, textToWrite);
                        break;
                    case 'foo':
                        await stream_write(writeStream_foo, textToWrite);
                        break;
                }
            }
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

async function stream_write(stream_to_use, data){
    await write_drain_handling(stream_to_use, data);
    return;
}

function write_drain_handling(stream_to_use, data){
    return new Promise (resolve => {
        write(stream_to_use, data, () => {
            resolve("finished writing");
        });
    })
}

function write(stream_to_use, data, cb) {
    if (!stream_to_use.write(data)) {
        stream_to_use.emit("drain");
    }
    process.nextTick(cb);
  }