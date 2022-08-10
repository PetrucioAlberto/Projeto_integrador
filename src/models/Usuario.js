module.exports = (sequelize, dataType) => {
    const Usuario = sequelize.define('Usuario', {

        name: {
            type: dataType.STRING(45),
            allowNull: false,
        },
        surname: {
            type: dataType.STRING(45),
            
            allowNull: false,
        },
        password: {
            type: dataType.STRING(30),
            allowNull: false,

        },
        
        gender: {
            type: dataType.STRING(30),
            allowNull: false,
        },
        cpf: {
            type: dataType.STRING(14),            
            allowNull: false,
        },        
        cel_whats: {
            type: dataType.STRING(15),
            allowNull: false,
        },
        tel: {
            type: dataType.STRING(15),
            allowNull: true
        },
        email: {
            type: dataType.STRING(45),
            allowNull: false
        },
        cep_res: {
            type: dataType.STRING(09),
            allowNull: false
        },
        endereco_res: {
            type: dataType.STRING(45),
            allowNull: false
        },
        numero_res: {
            type: dataType.STRING(06),
            allowNull: false
        },
        complemento_res: {
            type: dataType.STRING(45),
            allowNull: true
        },
        bairro_res: {
            type: dataType.STRING(45),
            allowNull: false
        },
        referencia_res: {
            type: dataType.STRING(45),
            allowNull: true
        },
        cidade_res: {
            type: dataType.STRING(45),
            allowNull: false
        },
        estado_res: {
            type: dataType.STRING(05),
            allowNull: false
        },
        pais_res: {
            type: dataType.STRING(45),
            allowNull: false
        },
        cep_ent: {
            type: dataType.STRING(09),
            allowNull: false
        },
        endereco_ent: {
            type: dataType.STRING(45),
            allowNull: false
        },
        numero_ent: {
            type: dataType.STRING(06),
            allowNull: false
        },
        complemento_ent: {
            type: dataType.STRING(45),
            allowNull: true
        },
        bairro_ent: {
            type: dataType.STRING(45),
            allowNull: false
        },
        referencia_ent: {
            type: dataType.STRING(45),
            allowNull: false
        },
        cidade_ent: {
            type: dataType.STRING(45),
            allowNull: false
        },
        estado_ent: {
            type: dataType.STRING(03),
            allowNull: false
        },
        pais_ent: {
            type: dataType.STRING(45),
            allowNull: false
        }


    }, {
        tableName: 'usuarios',
        timestamps: true,
    })
    


    return Usuario
}