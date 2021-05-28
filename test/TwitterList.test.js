const { expect, assert } = require("chai");
var TwitterList = artifacts.require("TwitterList");
require("chai").should();

contract("TweetList", function ([]) {
  beforeEach(async () => {
    this.tweetList = await TwitterList.deployed();
  });

  describe("List tweets", () => {
    it("Should return counts of inserted tweets", async () => {
      // given
      let tweetOne =
        "Tesla is not going to use accept bitcoin for trading purpose";
      result = await this.tweetList.insertTweet(tweetOne);

      let tweenTwo =
        "Elon musk tweet had lost billion dolloar economy in bitcoin market";
      result = await this.tweetList.insertTweet(tweenTwo);

      // when
      count = await this.tweetList.count.call();

      // then
      assert.equal(2, count);
    });
  });

  describe("Insert Tweet", () => {
    it("should insert tweet", async () => {
      // given
      let txt = "It is going to rain today";

      // when
      result = await this.tweetList.insertTweet(txt);
      data = await this.tweetList.tweets.call([1]);

      // then
      assert.equal(result.logs[0].args.txt, txt);
    });
  });

  describe("Update Tweet", () => {
    it("should update tweet", async () => {
      // given
      let txt = "It is going to rain today";
      let updatedTweet = "It is not going to rain today";
      await this.tweetList.insertTweet(txt);

      //when
      result = await this.tweetList.updateTweet(1, updatedTweet);

      //then
      assert.equal(result.logs[0].args.txt, updatedTweet);
    });
  });

  describe("Delete Tweet", () => {
    it("should delete tweet", async () => {
      // given
      let txt = "It is going to rain today";
      const result = await this.tweetList.insertTweet(txt);

      //when
      const deletedResult = await this.tweetList.deleteTweet(
        result.logs[0].args.id.toNumber()
      );

      //then
      assert.equal(
        deletedResult.logs[0].args.id.toNumber(),
        result.logs[0].args.id.toNumber()
      );
    });
  });
});
