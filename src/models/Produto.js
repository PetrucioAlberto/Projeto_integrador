
module.exports = (sequelize, dataType) => {
    const Produto = sequelize.define('Produto', {
        
          
          
        
    }, {
        tableName: 'produtos',
        timestamps: false,
    })
    
    Produto.associate = (models) => {        
        
        
        Produto.belongsTo(models.Plataforma, {
            as: 'plataforma',
            foreignKey: 'plataformas_id'
        }),
        Produto.belongsTo(models.Jogo, {
            as: 'jogo',
            foreignKey: 'jogos_id'
        }),
        Produto.belongsTo(models.GiftCard, {
            as: 'giftcard',
            foreignKey: 'giftcards_id'
        }),
        Produto.belongsTo(models.Acessorio, {
            as: 'acessorio',
            foreignKey: 'acessorios_id'
        })   
           

     }
    return Produto
}
// id, plataformas_id, acessorios_id, jogos_id, giftcards_id, preco_promocional