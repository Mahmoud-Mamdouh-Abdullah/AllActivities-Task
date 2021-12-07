import { connection } from "../../Core/ConnectToMySQL";
import { RecordModel } from "../Models/RecordModel";

export class RecordsRepository {
    select(query: string) {
        return new Promise((resolve, reject) => {
            connection.query(query, function (err, result, fields) {
                if (err) return reject(err)
                resolve(result);
            })
        });
    }

    insert(data: RecordModel) {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO records (start_date, end_date, description) VALUES ("
                + connection.escape(data.startDate) + ","
                + connection.escape(data.endDate)
                + "," + connection.escape(data.description) + ")";

            connection.query(sql, function (err, result) {
                if (err) return reject(err);
                resolve(result.insertId);
            });
        });
    }
}