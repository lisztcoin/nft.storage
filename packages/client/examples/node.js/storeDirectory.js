import fs from 'fs'
import { NFTStorage, File } from 'nft.storage'

const endpoint = 'https://api.nft.storage' // the default
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMzMUI4YjhiNjIwRjI0MWFiOTFiRTVhNTkyMzNiODdkNThFNThkOTUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzMDMxODE2Mjg3MCwibmFtZSI6ImtleSJ9.dOwpXNNx0Fl8bKOSRqJ-Sa0qfquuZDnY6OQBLJlBVU4" // your API key from https://nft.storage/manage

async function main() {
  const storage = new NFTStorage({ endpoint, token })
  var file_list = []
  for (let i = 0; i < 10000; i++) {
    file_list.push(new File([await fs.promises.readFile('packages/client/examples/node.js/metadata/' + i + '.json')], i.toString()))
  }
  const cid = await storage.storeDirectory(file_list)
  console.log({ cid })
  const status = await storage.status(cid)
  console.log(status)
}
main()
