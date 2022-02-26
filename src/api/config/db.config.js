module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "ShortHairDNTCR3!",
    DB: "summondb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };