module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
        firstname: {
            type: DataTypes.STRING,
            required: true
        },
        surname: {
            type: DataTypes.STRING,
            required: true
        },
        email: {
            type: DataTypes.STRING,
            required: true
        },
        phone: {
            type: DataTypes.STRING,
            required: true
        },
        previous_level: {
            type: DataTypes.STRING
            
        },
        agriculture: {
            type: DataTypes.STRING
        },
        business: {
            type: DataTypes.STRING
        },
        care: {
            type: DataTypes.STRING
        },
        catering: {
            type: DataTypes.STRING
        },
        construction: {
            type: DataTypes.STRING
        },
        creative: {
            type: DataTypes.STRING
        },
        digital: {
            type: DataTypes.STRING
        },
        education: {
            type: DataTypes.STRING
        },
        engineering: {
            type: DataTypes.STRING
        },
        hair: {
            type: DataTypes.STRING
        },
        health: {
            type: DataTypes.STRING
        },
        legal: {
            type: DataTypes.STRING
        },
        protective: {
            type: DataTypes.STRING
        },
        sales: {
            type: DataTypes.STRING
        },
        transport: {
            type: DataTypes.STRING
        },
        comments: {
            type: DataTypes.STRING
        }
    })

    return Contact;
}