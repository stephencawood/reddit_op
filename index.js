const { ux } = require('@cto.ai/sdk')
const https = require('https');
const main = async () => {
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
      res.on('end',async function(){
        if (res.statusCode != 200) {
          await ux.print("Reddit call failed with response code " + res.statusCode);
        } else {
          try {
            for(i = 0; i < count; i++) {
              await ux.print('🌍 ' + JSON.stringify(JSON.parse(body).data.children[i].data.title));
              await ux.print(JSON.stringify(JSON.parse(body).data.children[i].data.url) + '\n');
            }
          } catch (err) {
            await ux.print('Error: ' + err);
          }
        }
      });
    })

    req.on('error', async (error) => {
      await ux.print(error)
    })
    req.end()
}
main()
