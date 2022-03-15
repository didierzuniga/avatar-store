const deploy = async () => {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account: ", deployer.address);

    const AvatarStore = await ethers.getContractFactory("AvatarStore");
    const deployed = await AvatarStore.deploy();

    console.log("Avatar Store was deployed at: ", deployed.address);
};

deploy()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    });