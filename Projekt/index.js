const exampleTrackID ='xxx';


const SpotifyWebApi = require('./node_modules/spotify-web-api-node');

const   spotifyApi = new SpotifyWebApi({
        clientId: '<insert client id>',
        clientSecret: '<insert client secret>',
});



spotifyApi.getAccessToken().then( //token wird geholt
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
  
    
      spotifyApi.setAccessToken(data.body['access_token']); //token wird gespeichert
    },
    function(err) {
      console.log(err);
    }
  );
  
  spotifyApi.getTrack('exampleTrackID').then((function(data){
    console.log('[Track Info] Name'+ data.body ,'Artist'+ data.artistname );
    }, function(err){

        console.log(err)

    }))





