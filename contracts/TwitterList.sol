// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TwitterList {
    mapping(int => Tweet) public tweets;
    event TwitterCreated(int id, string txt);
    event TwitterUpdated(int id, string txt);
    event TwitterDeleted(int id);
    int count= 0;

    struct Tweet {
        string txt;
        int id;
    }

    function insertTweet(string memory txt) public{
        count++;
        Tweet  memory tweet = Tweet(txt, count);
        tweets[count] = Tweet(txt, count); 
        emit TwitterCreated(tweet.id, tweet.txt);
    }

    function updateTweet(int  _id, string memory txt) public{
        Tweet memory _tweet = tweets[_id];
        _tweet.txt = txt;
        tweets[_id] = _tweet;
        emit TwitterUpdated(_tweet.id, _tweet.txt);
    }

    function deleteTweet(int _id) public {
        delete tweets[_id];
        emit TwitterDeleted(_id);
    }
}