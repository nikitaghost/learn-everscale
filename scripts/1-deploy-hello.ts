async function main() {
    const signer = (await locklift.keystore.getSigner("0"))!;
    const { contract: hello, tx } = await locklift.factory.deployContract({
        contract: "HelloContract",
        publicKey: signer.publicKey,
        initParams: {
        _nonce: locklift.utils.getRandomNonce(),
        },
        constructorParams: {
        },
        value: locklift.utils.toNano(0.2),
    });

    console.log(`Hello Contract deployed at: ${hello.address.toString()}`);
}

main()
.then(() => process.exit(0))
.catch(e => {
    console.log(e);
    process.exit(1);
});
