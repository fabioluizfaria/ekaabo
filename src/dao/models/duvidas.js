'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Duvidas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Duvidas.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    pergunta: DataTypes.TEXT,
    resposta: DataTypes.TEXT,
    publicar: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Duvidas',
  });
  return Duvidas;
};