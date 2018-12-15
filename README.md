# Usage

```
const {useClient} = require('pg-connection-wrapper')

const dbConfig = // Get database config such as access credentials

async function accessDatabase() {
    const result = await useClient(dbConfig, client => {
        // Access database via client
        return ...
    })
    // Use result
}
```

# Replaces

```
async function accessDatabase() {
    const client = new Client(dbConfig)
    await client.connect()
    try {
        // Access database via client
        const result = ...
        // Use result
    } finally {
        client.end()
    }
}
```

Look up documentation of ['pg' npm package](https://www.npmjs.com/package/pg) to see details about database config and client objects.
