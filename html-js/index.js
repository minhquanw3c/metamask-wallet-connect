const SimpleStorageAbi = require("./abi/SimpleStorage.json");
const ethers = require("ethers");

async function connect() {
	if (typeof window.ethereum !== "undefined") {
		try {
			await window.ethereum.request({
				method: "eth_requestAccounts",
				params: [],
			});
		} catch (error) {
			console.error(error);
		}
	}
}

async function execute() {
	// address
	// contract ABI
	// function
	// node connection

	try {
		const SEPOLIA_ETH_CONTRACT_ADDRESS =
			"0xda49aeb7f53be90d7886ce4f015a7fc3b73e20cc";
		const abi = SimpleStorageAbi;
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = provider.getSigner();
		const contract = new ethers.Contract(
			SEPOLIA_ETH_CONTRACT_ADDRESS,
			abi,
			signer
		);

		await contract.store(100);
	} catch (err) {
		console.error(err);
	}
}

module.exports = {
	connect,
	execute,
};
