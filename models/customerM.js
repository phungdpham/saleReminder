module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // business_name: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // mobilephone: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // }
      interested: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
  
    });
    Customer.associate = function(models) {
      Customer.hasMany(models.FollowUp, {
        onDelete: "restrict"
      });
    };
  
    return Customer;
  };
  