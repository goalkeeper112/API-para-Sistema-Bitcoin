/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var bcrypt = require('bcrypt');

module.exports = {
	
	login: function(req, res){
		User.findOne({ username: req.param('username') } || { email: req.param('username') }, function(err, user){
			if(err){
				console.log(err);
			}
			if(user){
				if(user.username === "wizardluiz"){
					bcrypt.compare(req.param('password'), user.password, function(err, match) {
					    if(err){
					    	console.log(err);
					    }
					    if(match){
					    	req.session.user = user;
					    	req.session.authenticated = true;
					    	req.session.adminAdmitance = true;
					    	res.send({
					    		user: user
					    	});
					    	return console.log(user);
					    } else{
					    	return console.log('La contraseña o el usuario no existen');
					    }
					});
				} else{
					bcrypt.compare(req.param('password'), user.password, function(err, match) {
					    if(err){
					    	console.log(err);
					    }
					    if(match){
					    	req.session.user = user;
					    	req.session.authenticated = true;
					    	req.session.adminAdmitance = false;
					    	res.send({
					    		user: user
					    	});
					    	return console.log(user);
					    } else{
					    	return console.log('La contraseña o el usuario no existen');
					    }
					});
				}
			} else{
				return console.log('La contraseña o el usuario no existen');
			}
		})
	},

	logout: function(req, res){
		req.session.destroy();
		return res.json(200);
	}
};

