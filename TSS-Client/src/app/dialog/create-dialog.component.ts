import {MatDialogRef} from "@angular/material/dialog";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  description:string;
  dialogForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateDialogComponent>){

    this.description = "New Ticket"

    this.dialogForm = new FormGroup({
      developerId: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
      });
}

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.dialogForm.value);
  }

  close() {
    this.dialogRef.close();
  }
}
