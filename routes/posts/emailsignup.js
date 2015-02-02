var MailChimpAPI = require('mailchimp').MailChimpAPI;

var apiKey = process.env.MAILCHIMP_API;
var listId = process.env.MAILCHIMP_LIST_ID;
var api = new MailChimpAPI(apiKey, { version : '1.3' });

exports = module.exports = function(req, res) {
  var emailAddress = req.body['email'];
  if (!emailAddress) {
    res.writeHead(400, 'Bad Request');
    return;
  }
  api.listSubscribe({ id: listId, email_address: emailAddress }, function (error, data) {
    if (error) {
      res.writeHead(400, error.message);
      res.end();
    } else {
      res.writeHead(200);
      res.write(JSON.stringify(data));
      res.end();
    }
  });
};
