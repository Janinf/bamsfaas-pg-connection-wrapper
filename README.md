**Note: This is not a published npm package yet, so you wont be able to install it**

You can still use it by cloning the repository and importing the base directory as a requirement.

```
const {useClient} = require('<directory containing cloned repo>/pg-connection-wrapper')
```

Then install dependencies inside the cloned directory.

```
npm install
```

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
