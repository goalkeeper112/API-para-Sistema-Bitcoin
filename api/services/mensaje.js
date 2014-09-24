var client = require('twilio')('AC2888dff0aec5065b9976fee7d186a511', 'efdbeede498d27a3c44c47fa124c05ca');

module.exports = {
	sendMessage: function(options){
		var mensaje = 'Hola soy el usuario '+options.username+' y estoy solicitando un pago a la dirección '+options.btc+' sobre la cantidad '+options.saldo+' Saludos';
		client.sendMessage({

		    to:'+584242591001', // Any number Twilio can deliver to
		    from: '+17746437079', // A number you bought from Twilio and can use for outbound communication
		    body: mensaje
		}, function(err, responseData) { //this function is executed when a response is received from Twilio

		    if (!err) { // "err" is an error received during the request, if any

		        // "responseData" is a JavaScript object containing data received from Twilio.
		        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
		        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

		        console.log(responseData.from); // outputs "+14506667788"
		        console.log(responseData.body); // outputs "word to your mother."

		    }
});


	}
};