import logger from "../logger/index.js";
import { getCompanyWithCurrency, getExchangePrice } from "../utilities/index.js"

export async function getExchangeRate(req,res,next){
    try{
        const {fromCurrency,toCurrency, date} = req.body
        if(!fromCurrency){
            return res.json({status:true,message:"From currency not provided"})
        }
        if(!toCurrency){
            return res.json({status:true,message:"From currency not provided"})
        }
        if(!date){
            return res.json({status:true,message:"From currency not provided"})
        }
        const results = await getExchangePrice()
        const rates = results.rates
        let ratesArray = []
        Object.keys(rates).map((coin)=>{
            ratesArray.push(rates[coin])
        })
        const from = ratesArray.find((ele) => ele.name.toLowerCase()===fromCurrency.toLowerCase())
        const to = ratesArray.find((ele) => ele.name.toLowerCase()===toCurrency.toLowerCase())
        if(!from || !to){
            return res.json({status: false, message:"Invalid currency name(s)"})
        }

        return res.json({status:true, data:`Exchange rate from ${fromCurrency} to ${toCurrency} is ${to.value/from.value}`})

    }catch(e){
        logger(e)
        res.json({status:false,message:"Some error occured"})
    }
}
export async function getCompaniesWithGivenCurrency(req,res,next){
    try{

        const {currency} = req.body;
        if(!currency){
            return res.send('Please provide currency')
        }
        const result = await getCompanyWithCurrency(currency)
        res.json({staus:true,data: result})
    }catch(e){
        logger(e)
        res.json({status:false,message:"Some error occured"})
    }
}