module.exports = (sequelize, dataType) => {
    const FormasPgto = sequelize.define('FormasPgto', {        
         
        cartao_1: {
            type: dataType.STRING,            
        },
        cartao_2: {
            type: dataType.STRING,            
        },
        cartao_3: {
            type: dataType.STRING,            
        },
        banco_transferencia: {
            type: dataType.STRING,            
        }        
        
    },
    {
        tableName:'formas_pgtos',
        timestamps: false,
    })
    
    
    return FormasPgto
}
