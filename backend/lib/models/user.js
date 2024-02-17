"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
exports.UserSchema = new mongoose_1.Schema({
    id: { type: String, default: uuid_1.v4 },
    dateCreated: { type: Date, default: Date.now },
    name: String,
    email: String,
    storeName: String,
    products: Array,
    storeIcon: String,
    totalPurchases: Number,
    totalSales: Number,
    address: String,
});
