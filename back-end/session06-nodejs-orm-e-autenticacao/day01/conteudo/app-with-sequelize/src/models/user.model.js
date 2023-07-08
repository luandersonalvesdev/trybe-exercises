const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
    isAdmin: DataTypes.INTEGER,
  });
  (async () => {
    await sequelize.sync({ force: true });
  })();

  return User;
};

module.exports = UserModel;