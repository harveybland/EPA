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
            type: DataTypes.NUMBER
            
        },
        agriculture: {
            type: DataTypes.NUMBER
        },
        business: {
            type: DataTypes.NUMBER
        },
        care: {
            type: DataTypes.NUMBER
        },
        catering: {
            type: DataTypes.NUMBER
        },
        construction: {
            type: DataTypes.NUMBER
        },
        creative: {
            type: DataTypes.NUMBER
        },
        digital: {
            type: DataTypes.NUMBER
        },
        education: {
            type: DataTypes.NUMBER
        },
        engineering: {
            type: DataTypes.NUMBER
        },
        hair: {
            type: DataTypes.NUMBER
        },
        health: {
            type: DataTypes.NUMBER
        },
        legal: {
            type: DataTypes.NUMBER
        },
        protection: {
            type: DataTypes.NUMBER
        },
        sales: {
            type: DataTypes.NUMBER
        },
        transport: {
            type: DataTypes.NUMBER
        },
        comments: {
            type: DataTypes.STRING
        }
    })

    return Contact;
}