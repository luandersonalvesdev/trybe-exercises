const UserSchema = (sequelize, DataTypes) => {
  const UserModel = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users'
  });

  return UserModel;
};

module.exports = UserSchema;