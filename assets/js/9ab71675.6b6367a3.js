"use strict";(self.webpackChunkdocusaurus_test=self.webpackChunkdocusaurus_test||[]).push([[8933],{7892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(5893),i=n(4137);const s={title:"Twitter API - Delete my tweets!",tags:["Python","API","Twitter"],authors:"hugo",style:"border",color:"primary",description:"I reset my account using twitter API, to delete all my existing tweets."},o="Why?",a={permalink:"/blog/2022/06/11/delete-my-tweets",editUrl:"https://github.com/hugolmn/hugolmn.github.io/tree/main/blog/2022-06-11-delete-my-tweets.md",source:"@site/blog/2022-06-11-delete-my-tweets.md",title:"Twitter API - Delete my tweets!",description:"I reset my account using twitter API, to delete all my existing tweets.",date:"2022-06-11T00:00:00.000Z",formattedDate:"June 11, 2022",tags:[{label:"Python",permalink:"/blog/tags/python"},{label:"API",permalink:"/blog/tags/api"},{label:"Twitter",permalink:"/blog/tags/twitter"}],readingTime:3.565,hasTruncateMarker:!1,authors:[{name:"Hugo Le Moine",title:"Data Scientist",url:"https://github.com/hugolmn",imageURL:"https://github.com/hugolmn.png",key:"hugo"}],frontMatter:{title:"Twitter API - Delete my tweets!",tags:["Python","API","Twitter"],authors:"hugo",style:"border",color:"primary",description:"I reset my account using twitter API, to delete all my existing tweets."},unlisted:!1,nextItem:{title:"SNCF Open Data: found items - 2",permalink:"/blog/2020/07/28/sncf-found-items-2"}},l={authorsImageUrls:[void 0]},c=[{value:"Applying for a developer account",id:"applying-for-a-developer-account",level:5},{value:"Creating an app and getting your keys and tokens",id:"creating-an-app-and-getting-your-keys-and-tokens",level:5},{value:"Credentials",id:"credentials",level:6},{value:"Initialize client",id:"initialize-client",level:5},{value:"Retrieve user&#39;s tweets",id:"retrieve-users-tweets",level:5},{value:"Delete tweets",id:"delete-tweets",level:5}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h5:"h5",h6:"h6",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["I opened my twitter account ",(0,r.jsx)(t.a,{href:"https://twitter.com/hugo_le_moine_",children:"@hugo_le_moine_"})," back in 2012 during my high school years, and have mostly used it to retweet/like content, using it like a bookmarking tool. Over time, I accumulated a couple hundreds tweets and I certainly don't remember >95% of them."]}),"\n",(0,r.jsx)(t.p,{children:"It's now time for a deep cleaning!"}),"\n",(0,r.jsx)(t.p,{children:"But... Twitter does not let you delete more than a tweet at time. Then how to automate this ?"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h1,{id:"twitter-api",children:"Twitter API"}),"\n",(0,r.jsxs)(t.p,{children:["Leveraging ",(0,r.jsx)(t.a,{href:"https://developer.twitter.com/en/docs/api-reference-index",children:"Twitter API"})," is the first option I explored. Twitter has built quite a comprehensive set of endpoints enabling developer to:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Post and delete a tweet / retweet / like / quote / bookmark"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Search tweets"}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Follow / unfollow"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h5,{id:"applying-for-a-developer-account",children:"Applying for a developer account"}),"\n",(0,r.jsxs)(t.p,{children:["Using Twitter API requires a ",(0,r.jsx)(t.a,{href:"https://developer.twitter.com/en",children:"developer account"}),'. The "Essential" level was enough for this tiny project. As I plan to try other functionalities later on, I got the "Elevated" level.']}),"\n",(0,r.jsx)(t.h5,{id:"creating-an-app-and-getting-your-keys-and-tokens",children:"Creating an app and getting your keys and tokens"}),"\n",(0,r.jsxs)(t.p,{children:["Before we can dive into the API and play with the endpoints, we need some more configuration: ",(0,r.jsx)(t.a,{href:"https://developer.twitter.com/en/portal/apps/new",children:"creating an app"}),"."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"Note: keys generated cannot be displayed again, in case you forgot to write them somewhere, you can still regenerate them."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:'In the "Settings" tab, the "OAuth 1.0a" must be activated, with "Read and write" permissions. The callback URI / Redirect URL can be your own github page.'}),"\n",(0,r.jsx)(t.p,{children:"In the Keys and tokens tab, you can now get your consumer keys and generate authentication tokens for your personal account."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h1,{id:"tweepy",children:"Tweepy"}),"\n",(0,r.jsxs)(t.p,{children:["APIs can be used in most programming languages, and as Python is the one I am most comfortable with, I looked for a library that wraps the Twitter API for conveniency. I came across ",(0,r.jsx)(t.a,{href:"https://github.com/tweepy/tweepy",children:"tweepy"}),"."]}),"\n",(0,r.jsx)(t.h6,{id:"credentials",children:"Credentials"}),"\n",(0,r.jsxs)(t.p,{children:["Your credentials can be stored in a yaml file to avoid hard-coding them in your python files (",(0,r.jsx)(t.strong,{children:"do not commit your keys!"}),"). For example in ",(0,r.jsx)(t.code,{children:"delete-my-tweets.yaml"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"delete-my-tweets-dev:\n  consumer_key: ***********\n  consumer_secret: **************\n  access_token: *************************\n  access_token_secret: **********************\n  bearer_token: ********************************************\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then, you can load them using ",(0,r.jsx)(t.a,{href:"https://github.com/yaml/pyyaml",children:"pyyaml"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'import yaml\n\n# https://stackoverflow.com/a/1774043/13765085\nwith open("delete-my-tweets.yaml", "r") as stream:\n    try:\n        parameters = yaml.safe_load(stream)[\'delete-my-tweets-dev\']\n    except yaml.YAMLError as exc:\n        print(exc)\n'})}),"\n",(0,r.jsx)(t.h5,{id:"initialize-client",children:"Initialize client"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import tweepy\n\nclient = tweepy.Client(\n    bearer_token=parameters['bearer_token'],\n    consumer_key=parameters['consumer_key'],\n    consumer_secret=parameters['consumer_secret'],\n    access_token=parameters['access_token'],\n    access_token_secret=parameters['access_token_secret'],\n    wait_on_rate_limit=True, # to automatically wait when rate is exceeded\n)\n"})}),"\n",(0,r.jsx)(t.h5,{id:"retrieve-users-tweets",children:"Retrieve user's tweets"}),"\n",(0,r.jsxs)(t.p,{children:["To get the list of tweets from a user, it is required to provide the id associated with the account. To get this information, you can use the method ",(0,r.jsx)(t.code,{children:"get_user"})," and provide your username."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"user = client.get_user(username='hugo_le_moine_')\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We can now retrieve the account's tweets. The method ",(0,r.jsx)(t.code,{children:"get_user_tweets"})," allows to collect tweets 100 at a time using pagination: each call will return a maximum of ",(0,r.jsx)(t.code,{children:"max_results"})," tweets, and provide a token ",(0,r.jsx)(t.code,{children:"next_token"})," allowing to collect the next tweets by passing it as an argument to the next call."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"This method only allows to retrieve the most recent 3200 tweets."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["We can write a recursive function that will go dig until the no more ",(0,r.jsx)(t.code,{children:"next_token"})," is provided, and return all the tweets as a list."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"def collect_tweet_ids(next_token=None):\n    # timeline contains tweets and metadata about the user\n    timeline = client.get_users_tweets(\n        id=user.data.id,\n        max_results=100,\n        pagination_token=next_token\n    )\n\n    # get list of tweets\n    tweet_list= timeline.data\n\n    # if a next page exists, append its results to the list of tweets\n    if 'next_token' in timeline.meta:\n        tweet_list += collect_tweet_ids(timeline.meta['next_token'])\n    return tweet_list\n"})}),"\n",(0,r.jsx)(t.p,{children:"We can now collect the tweets history:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"tweets = collect_tweet_ids()\n"})}),"\n",(0,r.jsx)(t.h5,{id:"delete-tweets",children:"Delete tweets"}),"\n",(0,r.jsxs)(t.p,{children:["Finally, we can use the tweet ids to delete them using the ",(0,r.jsx)(t.code,{children:"delete_tweet"})," method."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Warning"}),": twitter cap rate limits tweet deletion to 50 per 15 min window. Deleting all tweets can take a while, more than 8 hours in my case."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["I use ",(0,r.jsx)(t.a,{href:"https://github.com/tqdm/tqdm",children:"tqdm"})," to display a progress bar."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from tqdm import tqdm\n\nfor tweet in tqdm(tweets):\n    client.delete_tweet(tweet.id)\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:"That's it!! I can now resume using twitter with a seemingly blank account, except that I get to keep all my settings and followings. I learnt to use the Twitter API and it's python wrapper tweepy, not in depth, but I will quite likely get back to it in the future!"}),"\n",(0,r.jsxs)(t.p,{children:["Has it been useful to you? Any faster way that you found? Any feedback will be appreciated, hit me up on twitter ",(0,r.jsx)(t.a,{href:"https://twitter.com/hugo_le_moine_",children:"@hugo_le_moine_"}),"!"]})]})}function h(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4137:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return n?r.createElement(m,o(o({ref:t},h),{},{components:n})):r.createElement(m,o({ref:t},h))}));h.displayName="MDXCreateElement"}}]);