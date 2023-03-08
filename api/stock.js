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
      const rows = $("tbody tr");

      const resultMin = [];

      rows.each((index, row) => {
        const cells = $(row).find("td");

        const stockCode = $(cells[0]).text().trim();
        const stockName = $(cells[1]).text().trim();
        const closingPrice = parseFloat(
          $(cells[6]).text().trim().replace(/,/g, "")
        );
        const maxPrice = parseFloat(
          $(cells[4]).text().trim().replace(/,/g, "")
        );
        const minPrice = parseFloat(
          $(cells[5]).text().trim().replace(/,/g, "")
        );

        if (
          (closingPrice === maxPrice && closingPrice !== 0) ||
          (closingPrice === minPrice && closingPrice !== 0)
        ) {
          if (!stockName.includes('KY') && !stockName.includes('N') && !stockName.includes('正二') && !stockName.includes('正2')) {
            resultMin.push({
              code: stockCode,
              name: stockName,
              price: closingPrice,
              type: closingPrice === maxPrice ? "max" : "min",
            });
          }
        }
      });

      // console.log(JSON.stringify(resultMin, null, 2));
      return res.json({
        code: 0,
        result: JSON.stringify(resultMin, null, 2),
        count:`${resultMin.length}\n`,
        message: "ok",
        type: "success",
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
exports.getStockInfo = getTransactions;
