import json
import os

metadata = {
  "external_url": "https://www.luxeto.io/",
  "image": "https://bafybeicxepppuzlb46pqez2efoud63taycdhafw3e2gamkofqnuee3jv7q.ipfs.dweb.link/",
  "description": "LUXETO cube is a membership NFT for exclusive perks."
}
print(os.getcwd())

for i in range(0, 10000):
    metadata["name"] = "#{} LUXETO cube".format(i)
    with open("packages/client/examples/node.js/metadata/{}.json".format(i), "w") as out:
        json.dump(metadata, out)