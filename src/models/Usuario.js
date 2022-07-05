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
        
        enderecos_res_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        enderecos_ens_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        formas_pgtos_id: {
            type: dataType.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: dataType.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: dataType.DATE,
            allowNull: false,
        },

        
    },
    {
        tableName:'usuarios',
        timestamps: true,
    })
    return Usuario
}
