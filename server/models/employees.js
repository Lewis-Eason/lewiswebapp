module.exports = (sequelize, DataTypes) => {
    return sequelize.define("employees", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        account_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        current_balance: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        income: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        income_after_bills: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    });
}

