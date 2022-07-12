module.exports = (sequelize, dataType) => {

    const Jogo = sequelize.define('Jogo', {

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
            allowNull: true,
        },
        chave: {
            type: dataType.STRING(100),
            allowNull: true,
        },
        midia_fisica: {
            type: dataType.TINYINT(1),
            allowNull: true,
        },
        promocao: {
            type: dataType.TINYINT(1),
            allowNull: true,
                    },
        novo_usado: {
            type: dataType.TINYINT(1),
            allowNull: false,
        },
        genero: {
            type: dataType.STRING,
            allowNull: false,
        },
        descricao: {
            type: dataType.STRING,
            allowNull: false,
        },
        image: {
            type: dataType.STRING,
            allowNull: false,
        },
        video_link: {
            type: dataType.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'jogos',
        timestamps: false,
    })
    
    Jogo.associate = (models) => {        
        Jogo.belongsTo(models.Fabricante, {
            as: 'fabricante',
            foreignKey: 'fabricantes_id'
        })

        
    } 
    return Jogo

}