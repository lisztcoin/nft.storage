// For our projects we only need storeBlob for now.
// Loop this.
import fs from 'fs'
import { NFTStorage, Blob } from 'nft.storage'

const endpoint = 'https://api.nft.storage' // the default
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMzMUI4YjhiNjIwRjI0MWFiOTFiRTVhNTkyMzNiODdkNThFNThkOTUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzMDMxODE2Mjg3MCwibmFtZSI6ImtleSJ9.dOwpXNNx0Fl8bKOSRqJ-Sa0qfquuZDnY6OQBLJlBVU4" // your API key from https://nft.storage/manage

async function main() {
  var logStream = fs.createWriteStream('packages/client/examples/node.js/cids.txt', {flags: 'a'});
  // use {flags: 'a'} to append and {flags: 'w'} to erase and write a new file
  
  
  const storage = new NFTStorage({ endpoint, token })
  for (let i = 7810; i < 7890; i++) {
    const data = await fs.promises.readFile('packages/client/examples/node.js/images/cryptopunk' + i + '.png')
    const cid = await storage.storeBlob(new Blob([data]))
    //console.log({ cid })
    const status = await storage.status(cid)
    // console.log(status)
    logStream.write(i + "," + cid + "," + status.pin.status + "\n");
    console.log(i)
  }
  logStream.end('this is the end line');
  // console.log(status)
}
main()
