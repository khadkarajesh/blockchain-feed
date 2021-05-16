// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TwitterList {
    uint public count = 1;
    string public name = 'Project Bitcoin...!!!';
    mapping(uint => Tweet) public tweets;
    event TwitterCreated(uint id, string txt);
    event TwitterUpdated(uint id, string txt);
    event TwitterDeleted(uint id);    

    struct Tweet {
        string txt;
        uint id;
    }

    function insertTweet(string memory txt) public {
        count++;
        Tweet memory tweet = Tweet(txt, count);
        tweets[count] = Tweet(txt, count);
        emit TwitterCreated(tweet.id, tweet.txt);
    }

    function updateTweet(uint _id, string memory txt) public {
        Tweet memory _tweet = tweets[_id];
        _tweet.txt = txt;
        tweets[_id] = _tweet;
        emit TwitterUpdated(_tweet.id, _tweet.txt);
    }

    function deleteTweet(uint _id) public {
        delete tweets[_id];
        emit TwitterDeleted(_id);
    }
}
