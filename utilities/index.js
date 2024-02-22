import axios from "axios"
import { apiURL } from "../config/index.js"




export async function getAllCurrencies() {
    const results = await axios.get(apiURL+'/coins/list')
    return results.data
}


export async function getCompanyWithCurrency(currency)  {
    const results = await axios.get(apiURL+'/companies/public_treasury/'+currency)
    return results.data
}

export async function getExchangePrice(){
    const results = await axios.get(apiURL+'/exchange_rates')
    return results.data
}