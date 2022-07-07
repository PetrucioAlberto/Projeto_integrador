module.exports = (sequelize, dataType) => {
    const EnderecoRes = sequelize.define('EnderecoRes', {        
         
        endereco: {
            type: dataType.STRING,
            allowNull: false,
        },
        cep: {
            type: dataType.STRING,
            allowNull: false,
        },
        numero: {
            type: dataType.STRING,
            allowNull: false,
        },
        bairro: {
            type: dataType.STRING,
            allowNull: false,
        },
        referencia: {
            type: dataType.STRING,
            allowNull: false,
        },
        cidade: {
            type: dataType.STRING,
            allowNull: false,
        },
        estado: {
            type: dataType.STRING,
            allowNull: false,
        },
        pais: {
            type: dataType.STRING,
            allowNull: false,
        },  
                
    }, 
    {
        tableName:'enderecos_res',
        timestamps: false,
    })
    
    
    return EnderecoRes
}
