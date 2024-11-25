import { Sequelize } from 'sequelize';
import sequelize from '../config/config.js';

// Esquema Produtos
const Produto = sequelize.define('produtos', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  marca: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  qtd: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  min_qtd: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 30,
  },
  max_qtd: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 999,
  },
});

export default Produto;
