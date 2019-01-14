# pdq-api

An exercise is converting an Express API into a koa style application, and 
wrapping legacy callback functions with `Promises` to call them with `await`.

This API works in tandem with `pdq-vue`, here: https://github.com/intrinsicbits/pdq-vue.

- Weather Forecast API
- SF Muni Bus Time API
- TODO: Bitcoin API

## Starting the API

    npm i
    npm run dev

By default the API server starts on port 3000, http://localhost:3000.

Based on the excellent https://github.com/dbalas/koalerplate
