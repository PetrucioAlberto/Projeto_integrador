module.exports = (sequelize, dataType) => {
    const Fabricante = sequelize.define('Fabricante', {

        fabricante: {
            type: dataType.STRING(200),
            allowNull: false,
        },
        plataforma: {
            type: dataType.STRING(300),
            allowNull: false,
        },


    }, {
        tableName: 'fabricantes',
        timestamps: false,
    })

    // Fabricante.associate = (models) => {
    //     Fabricante.belongsToMany(models.Asset, {
    //         as: 'Asset',
    //         foreignKey: 'assets_id'
    //     })

    // }
    return Fabricante
}
// id, fabricante, assets_id