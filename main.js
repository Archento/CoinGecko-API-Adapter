import { CoinGeckoAdapter } from './api/CoinGecko.js'
const CoinGeckoClient = new CoinGeckoAdapter()

const func = async () => {
  const data = await CoinGeckoClient.ping()
  console.log(data)
}
