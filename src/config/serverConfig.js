const dotenv = require ("dotenv")
dotenv.config();
module.exports={
    Port : process.env.Port,
    SYNC_DB :process.env.SYNC_DB
}