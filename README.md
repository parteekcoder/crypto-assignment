
## Setup this project

- Install the dependecies

```
npm i
```
> Note: Use the node version given in `.nvmrc` file

- Running in development

```
npm run dev
```

- Visit: http://localhost:8000/health route to check if server running up

## API routes

### http://localhost:8000/exchange 

get exchange between to coins. For this I used /exchange_rates API of coingecko. Here I am getting relative value each coin with bitcoin. Then I will calculate the exchange rate between the currency asked. I didn't not able to find API which provide exchange rates on particular date. There are APIs that only provide rates on particular date but not exchange rate between 2 coins

Request body
```
{
	“fromCurrency”: “bitcoin”,
	“toCurrency”: “basic-attention-token”,
	“date”: “12-01-2023”
}
```

### http://localhost:8000/companies/public_treasury

Here I am using `/companies/public_treasury/${coinid}` api of coingecko 

Request body:
```
{
	currency: "bitcoin"
}
```
## Updation db after 1 hour

I created a cron job that runs after each hour and fetch results and update the database