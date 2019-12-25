const https = require('https');
const main = async () => {
  async function getPosts(){
    var count = 5;
    var sub = 'worldnews';
    var path = '/r/' + sub + '/hot.json?count=' + count;
    const options = {
      hostname: 'www.reddit.com',
      port: 443,
      path: path,
      method: 'GET'
    }

    const req = https.request(options, res => {
      var body = '';
      res.on('data', function (chunk) {
        body = body + chunk;
      });
      res.on('end',function(){
        if (res.statusCode != 200) {
          console.log("Reddit call failed with response code " + res.statusCode);
        } else {
          try {
            for(i = 0; i < count; i++) {
              console.log('🌍 ' + JSON.stringify(JSON.parse(body).data.children[i].data.title));
              console.log(JSON.stringify(JSON.parse(body).data.children[i].data.url) + '\n');
            }
          } catch (err) {
            console.log('Error: ' + err);
          }
        }
      });
    })

    req.on('error', error => {
      console.error(error)
    })
    req.end()

  };
  getPosts();

}
main()
