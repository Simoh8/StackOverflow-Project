"use strict";
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
const ejs_1 = __importDefault(require("ejs"));
const email_1 = __importDefault(require("../Helpers/email"));
const mssql_1 = __importDefault(require("mssql"));
const config_1 = require("../config");
const sendWelcomeEmail = () => __awaiter(void 0, void 0, void 0, function* () {
    const pool = yield mssql_1.default.connect(config_1.sqlConfig);
    const users = yield (yield pool.request().query("SELECT * FROM users WHERE isSent ='0'")).recordset;
    // console.log('hello world');
    for (let user of users) {
        ejs_1.default.renderFile('Templates/registration.ejs', { name: user.username }, (error, html) => __awaiter(void 0, void 0, void 0, function* () {
            const message = {
                from: process.env.EMAIL,
                to: user.email,
                subject: "StackOverflow Registration",
                html
            };
            // console.log(html);
            try {
                yield (0, email_1.default)(message),
                    yield pool.request().query(`UPDATE users SET isSent ='1' WHERE id ='${user.id}'`);
            }
            catch (error) {
                console.log(error);
            }
        }));
    }
});
exports.default = sendWelcomeEmail;
