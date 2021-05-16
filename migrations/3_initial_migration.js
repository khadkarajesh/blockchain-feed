const Migrations = artifacts.require("./TwitterList.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
