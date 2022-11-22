pragma ever-solidity >= 0.61.2;
pragma AbiHeader expire;
pragma AbiHeader pubkey;


contract HelloContract{
    uint16 static _nonce;
	
    constructor() public {
        tvm.accept();
    }

    function getResult(uint a, uint b) public view returns(uint result) {
        return a + b;
    }
}   
