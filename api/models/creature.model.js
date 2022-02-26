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
      }
    });
    return Creature;
  };