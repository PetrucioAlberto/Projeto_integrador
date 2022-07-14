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
        birthday: {
            type: dataType.DATE,
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
        rg: {
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
        


    }, {
        tableName: 'usuarios',
        timestamps: false,
    })
    Usuario.associate = (models) => {
        Usuario.belongsTo(models.EnderecoRes, {
            as: 'end_res',
            foreignKey: 'enderecos_res_id'

        })
        Usuario.belongsTo(models.EnderecoEnt, {
            as: 'end_ent',
            foreignKey: 'enderecos_ent_id',
        })
        Usuario.belongsTo(models.FormasPgto, {
            as: 'forma_pgto',
            foreignKey: 'formas_pgtos_id',
        })
    }


    return Usuario
}