import { RecordModel } from "../Data/Models/RecordModel";
import { RecordsRepository } from "../Data/Repository/RecordsReposiroty";


const recordsRepository = new RecordsRepository();


export class RecordsService {

    async selectAllRecords() {
        const sql = "SELECT * FROM records ORDER BY start_date";
        const data = await recordsRepository.select(sql);
        if (!data) {
            return {
                msg: "Internal Server Error"
            }
        }
        return data;
    }

    async insertOne(reqObject: any) {
        const { start_date, end_date, description } = reqObject;
        if (!start_date || !end_date || !description) {
            return {
                message: 'Invalid or missing data'
            }
        }
        const recordId = await recordsRepository.insert(new RecordModel(
            start_date,
            end_date,
            description
        ));

        if (!recordId) {
            return {
                message: 'Internal Server Error'
            }
        }

        return {
            message: `Record Inserted Successfully with ID ${recordId}`
        }
    }
}