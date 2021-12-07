import { Request, Response } from "express";
import { RecordsService } from "../Services/RecordsService";


const recordsService = new RecordsService();

export const all = async (req: Request, res: Response) => {
    const records: any = await recordsService.selectAllRecords();
    res.send({
        count: records.length,
        records
    });
}


export const addRecord = async (req: Request, res: Response) => {
    const result = await recordsService.insertOne(req.body);
    res.send(result);
}