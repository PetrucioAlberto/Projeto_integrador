module.exports = (sequelize, dataType) => {
    const Plataforma = sequelize.define('Plataforma', {

        nome: {
            type: dataType.STRING(200),
            allowNull: false,
        },
        preco: {
            type: dataType.DECIMAL(09, 2),
            allowNull: false,
        },
        estoque: {
            type: dataType.INTEGER(11),
            allowNull: false,
        },
        promocao: {
            type: dataType.INTEGER(1),
            allowNull: false,
        },
        novo_usado: {
            type: dataType.INTEGER(1),
            allowNull: false,
        },
        descricao: {
            type: dataType.INTEGER(1),
            allowNull: true,
        },
        image: {
            type: dataType.INTEGER(1),
            allowNull: true,
        },
        video_link: {
            type: dataType.INTEGER(1),
            allowNull: true,
        }
    

    }, {
        tableName: 'plataformas',
        timestamps: false,
    })
    
    Plataforma.associate = (models) => {
        
        Plataforma.belongsTo(models.Fabricante, {
            as: 'fabricante',
            foreignKey: 'fabricantes_id'
        })       

     }
    return Plataforma
}
// id, nome, preco, estoque, promocao, novo_usado, assets_id, fabricantes_id