/**
 * MensageController
 *
 * @description :: Server-side logic for managing mensages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	send: function(req, res){
		mensaje.sendMessage({ username: req.session.user.username, btc: req.param('btc'), saldo: req.param('saldo') });
		res.redirect('/status');
	}
};

