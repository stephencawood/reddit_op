# Reddit Posts Op for CTO.ai Ops CLI

Quickly get posts from Reddit in your terminal window. The default is World News, but you can change it to any subreddit. The Reddit posts Op runs on the CTO.ai Ops CLI.

### Installation

<a name="installation"></a>

First install the Ops CLI from [CTO.ai].

```shell
ops install @cawood/reddit
```
```shell
ops run reddit
```

### Configuration

To run this Op, there are two configuration steps. The app requires a Reddit client ID and secret (to access the Reddit API) and a Reddit user account for authentication.

Note: If you fork this repo, please do not check in your account details or Reddit client secret.

Inside config.js...

1. Add your Reddit account information. Reddit accounts are free and easy to set up: https://www.reddit.com/signup
2. Add your Reddit API key. Getting a client ID (and secret) is not difficult, you just need to go through the process: https://github.com/reddit-archive/reddit/wiki/OAuth2-Quick-Start-Example#first-steps

If you do not configure the Op, you will see this error:

 ```UnhandledPromiseRejectionWarning: StatusCodeError: 401 - {"message":"Unauthorized","error":401}```