// Please do not change the name of this function
function getTweetData (tweet) {
  const hashtags = [...new Set(tweet.match(/#\w+/g))] || []
  const mentions = [...new Set(tweet.match(/@\w+/g))] || []
  return {tags: hashtags, mentions: mentions, tagCount: hashtags.length,mentionCount: mentions.length,length: tweet.length}
  
};

module.exports = getTweetData;
