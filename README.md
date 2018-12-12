# Install

```
npm install pg-connection-wrapper
```

# Usage

```
const {useClient} = require('pg-connection-wrapper')

const dbConfig = // Get database config such as access credentials

async function accessDatabase() {
    const result = await useClient(dbConfig, client => {
        // Access database via client
    })
}
```

Look up documentation of ['pg' npm package](https://www.npmjs.com/package/pg) to see details about database config and client objects.
