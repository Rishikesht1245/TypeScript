"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const getUsers = async (req, res, next) => {
    console.log("getUsers");
    const users = ["a", "B", "C"];
    res.json(users);
};
exports.getUsers = getUsers;
