"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCommentSchema = void 0;
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
exports.ProductCommentSchema = new mongoose_1.Schema({
    id: { type: String, default: uuid_1.v4 },
    dateCreated: { type: Date, default: Date.now },
    title: String,
    description: String,
    rating: Number,
    user: String,
});
