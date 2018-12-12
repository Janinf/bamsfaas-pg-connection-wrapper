# Install

```
npm install pg-connection-wrapper
```

# Usage

```
const {useClient} = require('pg-connection-wrapper')

const dbConfig = ...
useClient(dbConfig, client => {
    ...
}).then(result => ...)
```
