module.exports = (sequelize, dataType) => {

    const GiftCard = sequelize.define('GiftCard', {

        nome: {
            type: dataType.STRING,
            allowNull: false,
        },
        preco: {
            type: dataType.STRING,
            allowNull: false,
        },
        estoque: {
            type: dataType.STRING,
            allowNull: true,
        },
        promocao: {
            type: dataType.STRING,
            allowNull: true,
        },
        chave: {
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
        }
        
    }, {
        tableName: 'giftcards',
        timestamps: false,
    })
    
    GiftCard.associate = (models) => {        
        GiftCard.belongsTo(models.Fabricante, {
            as: 'fabricante',
            foreignKey: 'fabricantes_id'
        })

        
    } 
    return GiftCard

}