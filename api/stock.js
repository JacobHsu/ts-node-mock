"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//exports.getUserInfo = void 0;
const tslib_1 = require("tslib");
const faker_1 = tslib_1.__importDefault(require("faker"));

const axios = require("axios");
const cheerio = require("cheerio");

const getTransactions = (req, res) => {
  axios
    .get(
      "https://www.twse.com.tw/exchangeReport/MI_INDEX?response=html&date=&type=ALLBUT0999"
    )
    .then((response) => {
      const $ = cheerio.load(response.data);
      const table = $('table');
      const rows = table.find('tr');
      const result = [];
      rows.each((i, el) => {
        const cols = $(el).find('td');
        const stockName = $(cols[0]).text().match(/\d+/) ? $(cols[0]).text() : '';
        if(stockName === '') return;
        const stockCode = $(cols[1]).text();
        if(!stockCode.includes('-KY')){
          const transactionVolume = $(cols[4]).text();
          const transactionAmount = $(cols[5]).text();
          const upOrDown = $(cols[9]).text();
          const priceChange = $(cols[10]).text();
          if (upOrDown === '-') {
            if (!stockName.includes('指數') && transactionVolume !== '' && priceChange > 2) {
              result.push({
                stockName,
                stockCode,
                priceChange: `${upOrDown}${priceChange}`,
                transactionVolume,
                transactionAmount,
              });
            }
          }
        }
      });

      // console.log(JSON.stringify(resultMin, null, 2));
      return res.json({
        code: 0,
        result: result,
        count:`${result.length}\n`,
        message: "ok",
        type: "success",
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
exports.getStockInfo = getTransactions;
