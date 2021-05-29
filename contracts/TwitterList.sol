// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TwitterList {
    mapping(int256 => Tweet) public tweets;
    /**
     * @dev event to notify twitter post creation
     * @param id tweet id
     * @param txt tweet
     */
    event TwitterCreated(int256 id, string txt);

     /**
     * @dev event to notify twitter update
     * @param id tweet id
     * @param txt tweet
     */
    event TwitterUpdated(int256 id, string txt);

    /**
     * @dev event to notify twitter delete
     * @param id tweet id
     */

    event TwitterDeleted(int256 id);
    int256 public count = 0;

    /**
     * @dev structure to hold tween information
     * @param txt tweet text
     * @param id tweet id
     */
    struct Tweet {
        string txt;
        int256 id;
    }

    /**
     * @dev A function to insert tweet
     * @param _tweet content of the tweet
     */
    function insertTweet(string memory _tweet) public {
        count++;
        Tweet memory tweet = Tweet(_tweet, count);
        tweets[count] = Tweet(_tweet, count);
        emit TwitterCreated(tweet.id, tweet.txt);
    }

    /**
     * @dev A function to update tweet
     * @param _id identifier of tweet
     * @param txt updated tweet content
     */
    function updateTweet(int256 _id, string memory txt) public {
        Tweet memory _tweet = tweets[_id];
        _tweet.txt = txt;
        tweets[_id] = _tweet;
        emit TwitterUpdated(_tweet.id, _tweet.txt);
    }

    /**
     * @dev A function to delete tweet
     * @param _id identifier of tweet
     */
    function deleteTweet(int256 _id) public {
        delete tweets[_id];
        emit TwitterDeleted(_id);
    }
}
