// const {ethers} = require("hardhat");

async function main(){
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
}

try{
main();

}catch(err){
  console.log("error!!-->",+err);
}
