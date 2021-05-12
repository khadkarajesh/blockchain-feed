const { expect, assert } = require("chai");
var TwitterList = artifacts.require("TwitterList");
require("chai").should();

contract("TweetList", function ([]) {
  beforeEach(async () => {
    this.tweetList = await TwitterList.deployed();
  });

  describe("Insert Tweet", () => {
    it("should insert tweet", async () => {
      // given
      let txt = "It is going to rain today";

      // when
      await this.tweetList.insertTweet(txt);

      // then
      const tweet = await this.tweetList.getTweetById(1);
      tweet.txt.should.equal(txt);
    });
  });

  describe("Update Tweet", () => {
    it("should update tweet", async () => {
      // given
      let txt = "It is going to rain today";
      let updatedTweet = "It is not going to rain today";
      await this.tweetList.insertTweet(txt);

      //when
      await this.tweetList.updateTweet(1, updatedTweet);
      const tweet = await this.tweetList.getTweetById(1);

      //then
      tweet.txt.should.equal(updatedTweet);
    });
  });

  describe("Delete Tweet", () => {
    it("should delete tweet", async () => {
      // given
      let txt = "It is going to rain today";
      const result = await this.tweetList.insertTweet(txt);
      //   console.log(tweet.logs[0].event);

      console.log(result.logs[0].args.id.toNumber());
      //when
      const deletedResult = await this.tweetList.deleteTweet(
        result.logs[0].args.id.toNumber()
      );
      //   console.log(deletedTweet.id);

      //then
      //   deletedResult.logs[0].args.id
      //     .toNumber()
      //     .equal(result.logs[0].args.id.toNumber());

      assert.equal(
        deletedResult.logs[0].args.id.toNumber(),
        result.logs[0].args.id.toNumber()
      );
    });
  });
});
