/**
 *
 * gate8team SearchController
 */

var twitter = require('twitter');
var twit = new twitter({
    consumer_key: '99QcJu4BGJemRiJ1BiwpCjOkz',
    consumer_secret: 'cRPEKQCdIJ2NQdIt2e2wsFJF5wM5GiTTjt4Y7qzIF1vi5rVByz',
    access_token_key: '382663088-nQ5Oepbn0eTkQI3mtaOZ7EhNO5J7vh2eTTJuCPXy',
    access_token_secret: '6BTHRzHq5EDVKSNx8NallMEFnhuLDR9bmYl2p82Et2UCN'
});

module.exports = {
   index: function (req, res) {
      return res.view({
//          corndogs: [{name: 'Hank the Corndog'}, {name: 'Lenny the Corndog'}]
          title: 'SocialMood'
      });
  },

    twitter: function (req, res) {
        var flag = false;
        var message = [];

        twit.search(req.param('q'), {}, function(data) {
            data['statuses'].forEach(function(el){
                message.push({text: el['text'], userName: el['user']['name'], screenName: el['user']['screen_name'], profileImage: el['user']['profile_image_url'], location: el['user']['location']});
//                message.push(el);
            });

            return res.json({
                error: flag,
                content: message
            });
        });
    },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SearchController)
   */
  _config: {}

  
};
