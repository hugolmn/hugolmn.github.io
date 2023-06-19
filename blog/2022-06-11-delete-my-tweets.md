---
title: "Twitter API - Delete my tweets!"
tags: [Python, API, Twitter]
style: border
color: primary
description: I reset my account using twitter API, to delete all my existing tweets.
comments: true
---

# Why?

I opened my twitter account [@hugo_le_moine_](https://twitter.com/hugo_le_moine_) back in 2012 during my high school years, and have mostly used it to retweet/like content, using it like a bookmarking tool. Over time, I accumulated a couple hundreds tweets and I certainly don't remember >95% of them. 

It's now time for a deep cleaning!

But... Twitter does not let you delete more than a tweet at time. Then how to automate this ?

---

# Twitter API

Leveraging [Twitter API](https://developer.twitter.com/en/docs/api-reference-index) is the first option I explored. Twitter has built quite a comprehensive set of endpoints enabling developer to:

- Post and delete a tweet / retweet / like / quote / bookmark

- Search tweets 

- Follow / unfollow

##### Applying for a developer account

Using Twitter API requires a [developer account](https://developer.twitter.com/en). The "Essential" level was enough for this tiny project. As I plan to try other functionalities later on, I got the "Elevated" level.

##### Creating an app and getting your keys and tokens

Before we can dive into the API and play with the endpoints, we need some more configuration: [creating an app](https://developer.twitter.com/en/portal/apps/new). 

> Note: keys generated cannot be displayed again, in case you forgot to write them somewhere, you can still regenerate them.

In the "Settings" tab, the "OAuth 1.0a" must be activated, with "Read and write" permissions. The callback URI / Redirect URL can be your own github page.

In the Keys and tokens tab, you can now get your consumer keys and generate authentication tokens for your personal account.

---

# Tweepy

APIs can be used in most programming languages, and as Python is the one I am most comfortable with, I looked for a library that wraps the Twitter API for conveniency. I came across [tweepy](https://github.com/tweepy/tweepy).

###### Credentials

Your credentials can be stored in a yaml file to avoid hard-coding them in your python files (**do not commit your keys!**). For example in `delete-my-tweets.yaml`:

```yaml
delete-my-tweets-dev:
  consumer_key: ***********
  consumer_secret: **************
  access_token: *************************
  access_token_secret: **********************
  bearer_token: ********************************************
```

Then, you can load them using [pyyaml](https://github.com/yaml/pyyaml):

```python
import yaml

# https://stackoverflow.com/a/1774043/13765085
with open("delete-my-tweets.yaml", "r") as stream:
    try:
        parameters = yaml.safe_load(stream)['delete-my-tweets-dev']
    except yaml.YAMLError as exc:
        print(exc)
```

##### Initialize client

```python
import tweepy

client = tweepy.Client(
    bearer_token=parameters['bearer_token'],
    consumer_key=parameters['consumer_key'],
    consumer_secret=parameters['consumer_secret'],
    access_token=parameters['access_token'],
    access_token_secret=parameters['access_token_secret'],
    wait_on_rate_limit=True, # to automatically wait when rate is exceeded
)
```

##### Retrieve user's tweets

To get the list of tweets from a user, it is required to provide the id associated with the account. To get this information, you can use the method `get_user` and provide your username.

```python
user = client.get_user(username='hugo_le_moine_')
```

We can now retrieve the account's tweets. The method `get_user_tweets` allows to collect tweets 100 at a time using pagination: each call will return a maximum of `max_results` tweets, and provide a token `next_token` allowing to collect the next tweets by passing it as an argument to the next call.

> This method only allows to retrieve the most recent 3200 tweets.

We can write a recursive function that will go dig until the no more `next_token` is provided, and return all the tweets as a list.

```python
def collect_tweet_ids(next_token=None):
    # timeline contains tweets and metadata about the user
    timeline = client.get_users_tweets(
        id=user.data.id,
        max_results=100,
        pagination_token=next_token
    )

    # get list of tweets
    tweet_list= timeline.data

    # if a next page exists, append its results to the list of tweets
    if 'next_token' in timeline.meta:
        tweet_list += collect_tweet_ids(timeline.meta['next_token'])
    return tweet_list
```

We can now collect the tweets history:

```python
tweets = collect_tweet_ids()
```

##### Delete tweets

Finally, we can use the tweet ids to delete them using the `delete_tweet` method. 

> **Warning**: twitter cap rate limits tweet deletion to 50 per 15 min window. Deleting all tweets can take a while, more than 8 hours in my case.

I use [tqdm](https://github.com/tqdm/tqdm) to display a progress bar.

```python
from tqdm import tqdm

for tweet in tqdm(tweets):
    client.delete_tweet(tweet.id)
```

---

That's it!! I can now resume using twitter with a seemingly blank account, except that I get to keep all my settings and followings. I learnt to use the Twitter API and it's python wrapper tweepy, not in depth, but I will quite likely get back to it in the future!

Has it been useful to you? Any faster way that you found? Any feedback will be appreciated, hit me up on twitter [@hugo_le_moine_](https://twitter.com/hugo_le_moine_)!
