module.exports = (sequelize, dataType) => {

    const Acessorio = sequelize.define('Acessorio', {
        
        nome: {
            type: dataType.STRING,
            allowNull: false,
        },
        preco: {
            type: dataType.DECIMAL(10,2),
            allowNull: false,
        },
        estoque: {
            type: dataType.TINYINT(1),
            allowNull: null,
        },
        promocao: {
            type: dataType.TINYINT(1),
            allowNull: true,
        },
        novo_usado: {
            type: dataType.TINYINT(1),
            allowNull: false,
        },
        descricao: {
            type: dataType.STRING,
            allowNull: true,
        },
        image: {
            type: dataType.STRING,
            allowNull: true,
        },
        video_link: {
            type: dataType.STRING,
            allowNull: true,
        }
    }, {
        tableName: 'acessorios',
        timestamps: false,
    })
    Acessorio.associate = (models) => {
        Acessorio.belongsTo(models.Fabricante, {
            as: 'fabricante',
            foreignKey: 'fabricantes_id'
        })
    }
    return Acessorio

}