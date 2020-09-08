// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgerRepo = orm("burgers");

var burger = {
  all: function(cb) {
    burgerRepo.findAll(function(res) {
      cb(res);
    });
  },
  
  create: function(newRow, cb) {
    burgerRepo.create(newRow, function(res) {
      cb(res);
    });
  },
  update: function(updatedRow, condition, cb) {
    burgerRepo.update(updatedRow, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    burgerRepo.delete(condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;
