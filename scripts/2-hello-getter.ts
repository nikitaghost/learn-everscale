import { Address } from "locklift";

async function main() {
    let contractAddr = "0:fcffedbedb8df319507fd9eb3744fe4c3b89a3b4361c5c8da08ce7d4751dbb2e";
    let helloContract = await locklift.factory.getDeployedContract(
        "HelloContract",
        new Address(contractAddr)
    );

    const answer = await helloContract.methods.getResult({a: 2, b: 3}).call();
    console.log(answer.result);
}

main()
.then(() => process.exit(0))
.catch(e => {
    console.log(e);
    process.exit(1);
});
