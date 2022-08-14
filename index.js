const Database = require('./src/database')
const Server = require('./server');

async function main(){
    const connection = await Database.connection()
    await connection.sync();
}

main();