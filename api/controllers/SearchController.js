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

var instagram = require('instagram').createClient(
    '2c0ccc1aa28945f28e635bd86b91d751',
    '42171dd7a8224a9c95331e5352f6eda6'
);

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
                message.push({
                    text: el['text'],
                    userName: el['user']['name'],
                    screenName: el['user']['screen_name'],
                    profileImage: el['user']['profile_image_url'],
                    location: el['user']['location']
                });
            });

            return res.json({
                error: flag,
                content: message
            });
        });
    },


  instagram: function(req, res){
      var flag = false;
      var message = [];

      instagram.tags.media(req.param('q'), function (tag, error) {
          flag = (error === null) ? false : true;

          if (!flag){
              tag.forEach(function(el){
                  var images = [el['images']['low_resolution']['url'], el['images']['thumbnail']['url']];
                  var i = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
                  var imageType = (i === 0) ? 'low' : 'thumb';
                  message.push({
                      image: images[i],
                      imageType: imageType,
                      imageLow: el['images']['low_resolution']['url'],
                      imageStandart: el['images']['standard_resolution']['url'],
                      imageThumb: el['images']['thumbnail']['url'],
                      link: el['link'],
                      userName: el['user']['username'],
                      fullName: el['user']['full_name'],
                      profileImage: el['user']['profile_picture']
                  });
              });
          } else {
              message = 'An error has occurred ;( Please, try again later...';
          }

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
