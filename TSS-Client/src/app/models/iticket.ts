export interface ITicket {
    ticketId:number;
    curDeveloperId:number;
    newDeveloperId:number;
    name:string
    description:string;
    status:string;
    resolution:string;
    startDt:Date;
    completionDt:Date;
  }
