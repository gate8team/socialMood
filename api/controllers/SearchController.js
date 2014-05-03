/**
 *
 * gate8team SearchController
 */

module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/search/index`
   *    `/search`
   */
   index: function (req, res) {
    
    // Send a JSON response
//    return res.json({
//      hello: 'world'
//    });
      return res.view({
          corndogs: [{name: 'Hank the Corndog'}, {name: 'Lenny the Corndog'}]
      });
  },

    twitter: function (req, res) {
        var twitter = require('twitter');

        var flag = false;
        var message = 'initial message';

        var twit = new twitter({
            consumer_key: '99QcJu4BGJemRiJ1BiwpCjOkz',
            consumer_secret: 'cRPEKQCdIJ2NQdIt2e2wsFJF5wM5GiTTjt4Y7qzIF1vi5rVByz',
            access_token_key: '382663088-nQ5Oepbn0eTkQI3mtaOZ7EhNO5J7vh2eTTJuCPXy',
            access_token_secret: '6BTHRzHq5EDVKSNx8NallMEFnhuLDR9bmYl2p82Et2UCN'
        });

            twit.search(req.param('q'), {}, function(data) {
                data['statuses'].forEach(function(el){
                    message += el['text'] + "\n"
                });
                return res.json({
                        error: flag,
                        content: message
                    }
                );
            });
    },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SearchController)
   */
  _config: {}

  
};
