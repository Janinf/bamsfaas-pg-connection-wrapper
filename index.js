'use strict'

const {Client} = require('pg')

async function useClient(config, action) {
    const client = new Client(config)
    await client.connect()
    try {
        return await action(client)
    } finally {
        client.end()
    }
}

module.exports = {useClient}
