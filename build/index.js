"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const queries_1 = require("./queries");
const client_1 = __importDefault(require("./client"));
/**
 * Class for communicating with CodeX Accounting API
 */
class Accounting {
    /**
     * Default constructor
     *
     * @param settings - settings for client module
     */
    constructor(settings) {
        this.client = new client_1.default(settings);
    }
    /**
     * Create account in Accounting service
     *
     * @param accountInput - Account creation mutation input
     */
    createAccount(accountInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.client.call(queries_1.MUTATION_CREATE_ACCOUNT, {
                input: accountInput,
            })).account.create;
        });
    }
    /**
     * Get workspace account
     *
     * @param accountId - workspace account id
     */
    getAccount(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.client.call(queries_1.QUERY_GET_ACCOUNT, {
                id: accountId,
            })).getAccount;
        });
    }
    /**
     * Decrease money from account
     *
     * @param purchaseInput - purchase data
     */
    purchase(purchaseInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.client.call(queries_1.MUTATION_PURCHASE, {
                input: purchaseInput,
            })).purchase;
        });
    }
    /**
     * Increase account balance
     *
     * @param input - data for depositing money
     */
    payOnce(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.client.call(queries_1.MUTATION_PAY_ONCE, {
                input,
            })).deposit;
        });
    }
}
exports.default = Accounting;
__exportStar(require("./types"), exports);
__exportStar(require("./constants"), exports);
