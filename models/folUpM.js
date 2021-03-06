module.exports = function(sequelize, DataTypes) {
    var FollowUp = sequelize.define("FollowUp", {
      // groupID: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // },
      // order: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // },
      open: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
     action: {
         type: DataTypes.STRING,
         allowNull: false
     },
     memo: {
         type: DataTypes.STRING,
         allowNull: true
     },
     duedate: {
         type: DataTypes.DATE,
         allowNull: false
     }
    });
    return FollowUp;
  };
