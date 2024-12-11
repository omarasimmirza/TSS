import { Component, Inject, OnInit, Optional } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { element } from 'protractor';
import { ITicket } from '../models/iticket';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  updateDialogForm: FormGroup;
  tktData: ITicket;
  title:string;

  constructor(
    private fb:FormBuilder,
    private dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ITicket) {

      this.title = "Update Ticket";
      this.tktData = data;

      this.updateDialogForm = new FormGroup({
        description: new FormControl("", [Validators.required]),
        developerId: new FormControl("", [Validators.required]),
        status: new FormControl("", [Validators.required]),
        resolution: new FormControl("", [Validators.required]),
        completionDt: new FormControl("", [Validators.required])
      });
    }

  ngOnInit(): void {
    this.updateDialogForm.get('status').setValue(this.tktData.status);
    this.updateDialogForm.get('description').setValue(this.tktData.description);
    this.updateDialogForm.get('developerId').setValue((String(this.tktData.curDeveloperId)));
    this.updateDialogForm.get('resolution').setValue(this.tktData.resolution);
    if(this.tktData.completionDt !== null) {
      this.updateDialogForm.get('completionDt').setValue(String(this.tktData.completionDt));
    }
  }

  update() {
    this.dialogRef.close(this.updateDialogForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}
