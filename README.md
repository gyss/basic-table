# Basic Table [![Build Status](https://travis-ci.com/gyss/basic-table.svg?branch=master)](https://travis-ci.com/gyss/basic-table.svg?branch=master)

Basic Table

See example [here](https://gyss.github.io/basic-table/)

## Installation

Install SPA client dependencies

```
$ npm i
```

## Commands

### Client

- `$ npm start`: Run development server
- `$ npm run build`: Build static assets
- `$ npm test`: Execute test runner

## Features

### Required

- [x] Create a rest API call using this http://api.openweathermap.org/data/2.5/forecast?id=2643743&appid=${APP_ID}
- [x] Create and populate table with the ‘main’ object from the rest API response (make sure to use redux)
- [x] Convert data into more readable format eg, convert temp into degrees,
- [x] Have some error handling in place when no data is returned from API
- [x] Create a separate views for ‘weather ‘ object from the rest API response , please populate this into a table
- [x] Additionally please write at least one test for any function that you have created.
- [ ] you can use bootstrap for styling your pages.
- [x] Desirable to use Hooks when possible.
