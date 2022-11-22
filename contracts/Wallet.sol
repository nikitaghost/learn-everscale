pragma ever-solidity >= 0.61.2;
pragma AbiHeader expire;
pragma AbiHeader pubkey;

/// @title Простой кошелек
/// @author itgold.io
contract Wallet {
    /// Число, которое влияет на адрес контракта
    /// Устанавливается случайным образом при деплое
    uint16 static _nonce;

    /*
     Exception codes:
      100 - message sender is not a wallet owner.
      101 - invalid transfer value.
    */

    /// @notice Contract constructor.
    constructor() public {
        /// Позволяем потратить на деплой средства смарт-контракта
        tvm.accept();
    }


    // Модификатор, позволяющий функции принимать внешний вызов только в том случае, если он был подписан
    // публичным ключом контракта (tvm.pubkey())
    modifier checkOwnerAndAccept {
        // Проверка, что входящее сообщение было подписано публичным ключом владельца.
        require(msg.pubkey() == tvm.pubkey(), 100);

		// Функция, которая позволяет контракту обрабатывать входящие сообщения.
		// Используя его собственные ресурсы (это необходимо, если контракт должен обрабатывать все входящие сообщения,
		// не только те, которые несут в себе нативный токен (ever)
		tvm.accept();
		_;
	}

    /// @notice Позволяет переводить эверы на счет получателя.
    /// @param dest Transfer target address.
    /// @param value Nanotons value to transfer.
    /// @param bounce Флаг, который позволяет отправлять сообщение об отказе в случае ошибки целевого контракта.
    function sendTransaction(address dest, uint128 value, bool bounce) public view checkOwnerAndAccept {
        // Функция, позволяющая осуществлять передачу токенов с произвольными параметрами.
        dest.transfer(value, bounce, 0);
    }
}