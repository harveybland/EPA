module.exports = (sequelize, DataTypes) => {
    const Apprenticeship = sequelize.define("Apprenticeship", {
        route: {
            type: DataTypes.STRING, primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        reference: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
        },
        level: {
            type: DataTypes.NUMBER,
        },
        funding: {
            type: DataTypes.STRING,
        },
        duration: {
            type: DataTypes.NUMBER,
        },
        core_options: {
            type: DataTypes.NUMBER,
        },
        eqa: {
            type: DataTypes.STRING,
        },
        link: {
            type: DataTypes.STRING,
        }
    })

    return Apprenticeship;
}