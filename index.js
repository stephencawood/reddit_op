const snoowrap = require('snoowrap'); // reddit API wrapper
const { ux, sdk } = require('@cto.ai/sdk')
var config = require('./config');
var r = new snoowrap(config.snooConfig);
// sdk.log(ux.colors.primary('\n\nLogging into Reddit...'))

const main = async () => {
  async function getPosts(){
    await r.getHot('worldnews', {limit: 5}).then((val)=>{
      if(val.length == 0) {
        sdk.log("No Reddit posts found...");
      } else {
        for(let i = 0;i<val.length;i++){
          let title = val[i].title;
          let url = val[i].url;
          sdk.log(ux.colors.magentaBright(`🌍 ${title}`), `${url}\n`);
        }
      } 
    });
  }
  getPosts();
}

main()
