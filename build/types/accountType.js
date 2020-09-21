"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountType = void 0;
/**
 * Available account types
 * See: https://www.principlesofaccounting.com/account-types/
 */
var AccountType;
(function (AccountType) {
    /**
     * When we need to pay some money to someone (credit)
     */
    AccountType["LIABILITY"] = "Liability";
    /**
     * Something valuable belonging to a person or organization
     * that can be used for the payment of debts (debit) — Cashbook
     */
    AccountType["ASSET"] = "Asset";
    /**
     * When we have some money earned from services (credit)
     */
    AccountType["REVENUE"] = "Revenue";
    /**
     * When we pay some our money for some serivces (debit)
     */
    AccountType["EXPENSE"] = "Expense";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
