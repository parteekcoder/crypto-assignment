import express from "express";
import { getCompaniesWithGivenCurrency, getExchangeRate } from "../controller/index.js";

const router = express.Router()

router.get('/exchange',getExchangeRate)
router.get('/companies/public_treasury',getCompaniesWithGivenCurrency)

export default router