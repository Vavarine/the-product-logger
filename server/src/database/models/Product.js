import { Sequelize, DataTypes } from 'sequelize';
import sequelizePaginate from 'sequelize-paginate';
import DB from '../db';

import User from './Users';

const db = new DB;

const Product = db.sequelize.define('Product', {
        id: {
            type: Sequelize.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        views: {
            type: DataTypes.INTEGER,
        },
        likes: {
            type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
        },
    },
    {
        timestamps: false,
    }
)

Product.belongsTo(User, {
    foreignKey: 'userId',
    foreignKeyConstraint: true
});

sequelizePaginate.paginate(Product);

console.log(Product === db.sequelize.models.Product);

export default Product;