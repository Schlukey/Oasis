"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumerSchema = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
exports.ConsumerSchema = new mongoose_1.Schema({
    id: { type: String, default: uuid_1.v4 },
    dateCreated: { type: Date, default: Date.now },
    email: String,
    name: String,
    orders: Array,
});
