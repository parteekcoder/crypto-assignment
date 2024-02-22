import logger from "../logger/index.js";
import { getCompanyWithCurrency } from "../utilities/index.js"

export function getExchangeRate(req,res,next){
    res.send("jy")
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