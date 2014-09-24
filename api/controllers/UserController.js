/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	read: function(req, res){
		User.findOne({ username: req.param('username') }, function(err, user){
			if(err){
				return console.log(err);
			} else{
				res.json(user);
			}
		});
	},

	saldo: function(req, res){
		User.findOne({ username: req.param('username') }, function(err, user){
			if(err){
				console.log(err);
			}

			if(user){
				User.update({ username: user.username }, { retirable: req.param('retirable') }, function(err, user){
					console.log(user);
				});
			}
		});
	},

	inversion: function(req, res){
		User.findOne({ username: req.param('username') }, function(err, user){
			if(err){
				console.log(err);
			}

			if(user){
				User.update({ username: user.username }, { inversion: req.param('inversion') }, function(err, user){
					console.log(user);
				});
			}
		});
	},

	produccion: function(req, res){
		User.findOne({ username: req.param('username') }, function(err, user){
			if(err){
				console.log(err);
			}

			if(user){
				User.update({ username: user.username }, { produccion: req.param('produccion') }, function(err, user){
					console.log(user);
				});
			}
		});
	}
};

