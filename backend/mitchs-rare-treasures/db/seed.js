const db = require("./index.js");
const format = require("pg-format");
const { objectToArrays, swapNameForID } = require("./data/utils.js");

const seed = ({ shopData, treasureData }) => {
  return db
    .query(`DROP TABLE IF EXISTS treasures;`)
    .then(() => {
      db.query(`DROP TABLE IF EXISTS shops;`);
    })
    .then(() => {
      return createTables();
    })
    .then(() => {
      //get shopData and convert it into arrays of ayyars
      const arrays = objectToArrays(shopData);
      return insertTableData(arrays);
    })
    .then((rows) => {
      const shop_details = {};
      console.log(rows);
      for (let item in rows) {
        shop_details[rows[item].shop_name] = rows[item].shop_id;
      }
      //   console.log(shop_details);
      return shop_details;
    })
    .then((shopIds) => {
      const treasureShopData = swapNameForID(treasureData, shopIds);
      return treasureShopData;
    })
    .then((treasureShopData) => {
      console.log(treasureShopData);
      const treasuresArray = objectToArrays(treasureShopData);
      sql = format(
        "INSERT INTO treasures(treasure_name, colour, age, cost_at_auction, shop_id) VALUES %L",
        treasuresArray
      );
      return db.query(sql);
    })
    .then(() => {
      console.log("Treasure data has been added successfully!");
    })
    .catch((err) => {
      console.log(err);
    });
};

function createTables() {
  return db
    .query(
      `CREATE TABLE shops (shop_id SERIAL PRIMARY KEY, 
							shop_name VARCHAR(50) NOT NULL, 
							owner VARCHAR(50) NOT NULL, 
							slogan VARCHAR(100));

      CREATE TABLE treasures (treasure_id SERIAL PRIMARY KEY, 
								treasure_name VARCHAR(50) NOT NULL,
								colour VARCHAR(50) NOT NULL,
								age INT NOT NULL,
								cost_at_auction FLOAT4 NOT NULL,
								shop_id INT REFERENCES shops(shop_id));`
    )
    .then(() => {
      console.log("tables created!");
    })
    .catch((err) => {
      console.log(err);
    });
}

function insertTableData(arrays) {
  sql = format(
    `INSERT INTO shops (shop_name, owner, slogan)
	VALUES %L RETURNING *;`,
    arrays
  );
  return db
    .query(sql)
    .then(({ rows }) => {
      console.log("Shops data has been added successfully!");
      return rows;
    })
    .catch((err) => {
      console.log(err);
    });
}

// function name(params) {

// }
module.exports = seed;
