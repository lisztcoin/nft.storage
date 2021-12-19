import fs from 'fs'
import { NFTStorage, File } from 'nft.storage'

const endpoint = 'https://api.nft.storage' // the default
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMzMUI4YjhiNjIwRjI0MWFiOTFiRTVhNTkyMzNiODdkNThFNThkOTUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzMDMxODE2Mjg3MCwibmFtZSI6ImtleSJ9.dOwpXNNx0Fl8bKOSRqJ-Sa0qfquuZDnY6OQBLJlBVU4" // your API key from https://nft.storage/manage

async function main() {
  const storage = new NFTStorage({ endpoint, token })
  const cid = await storage.storeDirectory([
    new File([await fs.promises.readFile('pinpie.jpg')], '1'),
    new File([await fs.promises.readFile('seamonster.jpg')], '2'),
  ])
  console.log({ cid })
  const status = await storage.status(cid)
  console.log(status)
}
main()
