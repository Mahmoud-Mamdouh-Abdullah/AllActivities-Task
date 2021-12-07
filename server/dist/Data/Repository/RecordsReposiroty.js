"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsRepository = void 0;
var ConnectToMySQL_1 = require("../../Core/ConnectToMySQL");
var RecordsRepository = /** @class */ (function () {
    function RecordsRepository() {
    }
    RecordsRepository.prototype.select = function (query) {
        return new Promise(function (resolve, reject) {
            ConnectToMySQL_1.connection.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    };
    RecordsRepository.prototype.insert = function (data) {
        return new Promise(function (resolve, reject) {
            var sql = "INSERT INTO records (start_date, end_date, description) VALUES ("
                + ConnectToMySQL_1.connection.escape(data.startDate) + ","
                + ConnectToMySQL_1.connection.escape(data.endDate)
                + "," + ConnectToMySQL_1.connection.escape(data.description) + ")";
            ConnectToMySQL_1.connection.query(sql, function (err, result) {
                if (err)
                    return reject(err);
                resolve(result.insertId);
            });
        });
    };
    return RecordsRepository;
}());
exports.RecordsRepository = RecordsRepository;
