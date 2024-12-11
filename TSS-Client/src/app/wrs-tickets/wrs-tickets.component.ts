import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITicket } from '../models/iticket';
import { TicketService } from '../services/wrs-ticket-service';
import {CreateDialogComponent} from "../dialog/create-dialog.component";
import {UpdateDialogComponent} from "../dialog/update-dialog.component";

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-tickets',
  templateUrl: './wrs-tickets.component.html',
  styleUrls: ['./wrs-tickets.component.css']
})
export class WRSTicketsComponent implements OnInit {

  public displayedColumns = ['name', 'description', 'resolution', 'status', 'completionDt', 'update', 'delete'];
  public dataSource = new MatTableDataSource<ITicket>();

  tktData: ITicket;

  constructor(private ticketSrv: TicketService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllTickets();
  }

  public getAllTickets() {
        this.ticketSrv.getAllTicketsSrvs()
        .subscribe(result =>
         {
           this.dataSource.data = result
           console.log(this.dataSource.data)
         },
         error => console.log(error));
         console.log(this.dataSource.data);
  }

  private saveTicket(tkt:ITicket) {
      		this.ticketSrv.saveTicketSrvs(tkt)
          .subscribe(result =>
          {
            console.log(result);
            this.getAllTickets();
          },
          error => console.log(error));
  }
  public saveTicketDialog = () => {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.width = '400px';
    dialogConfig.height = '300px';

    const saveDialogRef = this.dialog.open(CreateDialogComponent, dialogConfig);

    saveDialogRef.afterClosed().subscribe( val =>
    { console.log("Dialog output:", val)
      if(val !== undefined) {
        let ticket =  {} as ITicket;
        ticket.curDeveloperId = val.developerId;
        ticket.description= val.description;
        this.saveTicket(ticket);
      }
    },
    error => console.log(error));
  }

  private updateTicket(tkt:ITicket) {
    this.ticketSrv.updateTicketSrvs(tkt)
    .subscribe(result =>
    {
      console.log(result);
      this.getAllTickets();
    },
    error => console.log(error));
}

  public updateTicketDialog = (rowData) => {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.width = '400px';
    dialogConfig.height = '450x';
    dialogConfig.data = rowData;
    this.tktData = rowData;

    const updDialogRef = this.dialog.open(UpdateDialogComponent, dialogConfig);


    updDialogRef.afterClosed().subscribe( val =>
    { //console.log("Dialog output:", val)
      if(val !== undefined) {
        let ticket =  {} as ITicket;
        ticket.ticketId = this.tktData.ticketId;
        ticket.curDeveloperId = this.tktData.curDeveloperId;
        if(val.developerId > 0) ticket.newDeveloperId = val.developerId;
        ticket.description= val.description;
        ticket.resolution = val.resolution;
        ticket.status= val.status;
        ticket.completionDt= val.completionDt;
        this.updateTicket(ticket);
      }
    },
    error => console.log(error));
  }


  public redirectToUpdate = (id: string) => {
    console.log("Update" + id);
  }

  public deleteTicket(tktId: number) {
    	this.ticketSrv.deleteTicketSrvs(tktId)
          .subscribe(result =>
          {
            console.log(result);
            this.getAllTickets();
          },
          error => console.log(error));
  }
}
