// scripts/deploy.js
async function main() {
  // We get the contract to deploy
  const Gold = await ethers.getContractFactory("GLDToken");
  console.log("Deploying Gold...");
  const gold = await Gold.deploy();
  await gold.deployed();
  console.log("Gold deployed to:", gold.address);
  //  const gold = await Gold.attach(gold.address);

  const GameItem = await ethers.getContractFactory("GameItem");
  console.log("Deploying GameItem...");
  const gameItem = await GameItem.deploy();
  await gameItem.deployed();
  console.log("GameItem deployed to:", gameItem.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
