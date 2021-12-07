

export class RecordModel {
    startDate:string;
    endDate:string;
    description:string;

    constructor(startDate:string, endDate:string, description:string) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
    }
}