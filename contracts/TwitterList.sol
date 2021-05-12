// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TwitterList {
    mapping(int256 => Tweet) public tweets;
    event TwitterCreated(int256 id, string txt);
    event TwitterUpdated(int256 id, string txt);
    event TwitterDeleted(int256 id);
    int256 public count = 0;

    struct Tweet {
        string txt;
        int256 id;
    }

    function insertTweet(string memory txt) public {
        count++;
        Tweet memory tweet = Tweet(txt, count);
        tweets[count] = Tweet(txt, count);
        emit TwitterCreated(tweet.id, tweet.txt);
    }

    function updateTweet(int256 _id, string memory txt) public {
        Tweet memory _tweet = tweets[_id];
        _tweet.txt = txt;
        tweets[_id] = _tweet;
        emit TwitterUpdated(_tweet.id, _tweet.txt);
    }

    function deleteTweet(int256 _id) public {
        delete tweets[_id];
        emit TwitterDeleted(_id);
    }

    function getTweetById(int256 _id)
        public
        view
        returns (int256 id, string memory txt)
    {
        return (tweets[_id].id, tweets[_id].txt);
    }
}
