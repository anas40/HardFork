const Counterfeit = artifacts.require('Counterfeit');

module.exports = async function (deployer) {
  await deployer.deploy(Counterfeit);
};
