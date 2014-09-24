/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
  	username: {
  		type: 'string',
  		required: true,
  		unique: true
  	},
  	email: {
  		type: 'email',
  		required: true,
  		unique: true
  	},
  	password: {
  		type: 'string',
  		required: true
  	},

    retirable: {
      type: 'float'
    },
    
    inversion: {
      type: 'float'
    },
    produccion: {
      type: 'float'
    },

    capital: {
      type: 'float'
    },

  	toJSON: function(){
  		var obj = this.toObject();
  		delete obj.password;
  		delete obj.createdAt;
  		delete obj.updatedAt;
      delete obj.id;
  		return obj;
  	}
  },

  beforeCreate: function(user, cb){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err){
              console.log(err);
              return cb(null, err);
            } else{
              user.password = hash;
              user.retirable = 0.0;
              user.inversion = 0.0;
              user.produccion = 0.0;
              user.capital = 0.0;
              console.log(user.password);
              return cb(null, user);
            }
        });
    });
  }
};

