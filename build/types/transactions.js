"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = void 0;
/**
 * Available transaction types
 */
var TransactionType;
(function (TransactionType) {
    /**
     * Transaction that increases account and cashbook
     */
    TransactionType["Deposit"] = "Deposit";
    /**
     * Transaction that decreases account and cashbook
     */
    TransactionType["Withdraw"] = "Withdraw";
    /**
     * Tranasction that decreases account and increases our revenue
     */
    TransactionType["Purchase"] = "Purchase";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
