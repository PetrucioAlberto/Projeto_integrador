module.exports = (sequelize, dataType) => {
    const Usuario = sequelize.define('Usuario', {

        name: {
            type: dataType.STRING,
            allowNull: false,
        },
        surname: {
            type: dataType.STRING,
            allowNull: false,
        },
        password: {
            type: dataType.STRING,
            allowNull: false,
        },
        
        gender: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        cpf: {
            type: dataType.STRING,
            allowNull: false,
        },
        
        cel_whats: {
            type: dataType.STRING,
            allowNull: false,
        },
        tel: {
            type: dataType.STRING,
            allowNull: false,
        },
        email: {
            type: dataType.STRING,
            allowNull: false
        },
        cep_res: {
            type: dataType.STRING,
            allowNull: false
        },
        endereco_res: {
            type: dataType.STRING,
            allowNull: false
        },
        numero_res: {
            type: dataType.STRING,
            allowNull: false
        },
        bairro_res: {
            type: dataType.STRING,
            allowNull: false
        },
        referencia_res: {
            type: dataType.STRING,
            allowNull: true
        },
        cidade_res: {
            type: dataType.STRING,
            allowNull: false
        },
        estado_res: {
            type: dataType.STRING,
            allowNull: false
        },
        pais_res: {
            type: dataType.STRING,
            allowNull: false
        },
        cep_ent: {
            type: dataType.STRING,
            allowNull: false
        },
        endereco_ent: {
            type: dataType.STRING,
            allowNull: false
        },
        numero_ent: {
            type: dataType.STRING,
            allowNull: false
        },
        bairro_ent: {
            type: dataType.STRING,
            allowNull: false
        },
        referencia_ent: {
            type: dataType.STRING,
            allowNull: true
        },
        cidade_ent: {
            type: dataType.STRING,
            allowNull: false
        },
        estado_ent: {
            type: dataType.STRING,
            allowNull: false
        },
        pais_ent: {
            type: dataType.STRING,
            allowNull: false
        }


    }, {
        tableName: 'usuarios',
        timestamps: true,
    })
    Usuario.associate = (models) => {

        Usuario.belongsTo(models.FormasPgto, {
            as: 'forma_pgto',
            foreignKey: 'formas_pgtos_id',
        })
    }


    return Usuario
}