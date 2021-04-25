# CoinGecko-API-Adapter
> Dependency free, client side Javascript API adapter for the CoinGecko API.
> 
> Use this in your browser application to conveniently access CoinGecko.

---
## Why
Most of the API code is copied from [miscavage/CoinGecko-API](https://github.com/miscavage/CoinGecko-API) and updated to the most recent version of [CoinGeckos API](https://www.coingecko.com/en/api).

Miscavage created a Node.js Module that can be imported for JS server applications but I wanted to have a library that can be used by a client/browser :)

This gives me the freedom to deploy the API adapter independent of the server language or architecture and makes for easy prototyping.

---
## CoinGecko API Documentation

For complete API documentation, up-to-date parameters, responses and errors, please refer to https://www.coingecko.com/api/documentations/v3

You may also check out miscavages github for a nice overview on how the functions are called.

---
## Quick Start Guide
Use the main.js as a starting point or create your own javascript and include the Class from the CoinGecko module.
```javascript
// import API adapter Class
import { CoinGeckoAdapter } from './api/CoinGecko.js'

// instantiate class
const CoinGeckoClient = new CoinGeckoAdapter()

// use instance for API calls
const func = async () => {
  const data = await CoinGeckoClient.ping()
  /** do stuff */
  console.log(data)
}
```
The script utilizes ```pure/native Javascript``` and makes use of fetch for requests

---
## License

> MIT License
> 
> Copyright (c) 2021 Florian Wilde
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.