module.exports = (sequelize, Sequelize) => {
    const Creature = sequelize.define("creature", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      base: {
        type: Sequelize.BOOLEAN
      },
      cr: {
        type: Sequelize.INTEGER
      },
      str: {
        type: Sequelize.INTEGER
      },
      dex: {
        type: Sequelize.INTEGER
      },
      con: {
        type: Sequelize.INTEGER
      },
      int: {
        type: Sequelize.INTEGER
      },
      wis: {
        type: Sequelize.INTEGER
      },
      cha: {
        type: Sequelize.INTEGER
      }
    });
    return Creature;
  };