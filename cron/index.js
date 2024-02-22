import cron from 'node-cron'
import { getAllCurrencies } from '../utilities/index.js'
import logger from '../logger/index.js'


export default function initCronJobs(db) {
    async function fetchCurrencies() {
        try {
            const currencies = await getAllCurrencies()
            const collection = db.collection('currency')
            collection.createIndex({ symbol: 1 }, { unique: true })
            const bulkOps = currencies.map(document => ({
                updateOne: {
                  filter: { symbol: document.symbol },
                  update: { $set: document },
                  upsert: true
                }
            }));
            await collection.bulkWrite(bulkOps)
            logger('Bulk operation completed');
        } catch (e) {
            logger(e);
        }
    }
    cron.schedule('* * * * *', fetchCurrencies)
}
