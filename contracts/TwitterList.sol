// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract TwitterList {
    mapping(uint256 => Tweet) tweets;
    uint256 count= uint256(0);

    struct Tweet {
        string txt;
        uint256 id;
    }

    function insertTweet(string memory txt) public returns(uint256){
        count++;
        Tweet  memory tweet = Tweet(txt, count);
        tweets[count] = Tweet(txt, count); 
        return tweet.id;
    }
}