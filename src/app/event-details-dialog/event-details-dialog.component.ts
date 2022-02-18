import { Component, Optional, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IEvent } from "../core/models/event";

@Component({
  selector: "app-event-details-dialog",
  templateUrl: "./event-details-dialog.component.html",
  styleUrls: ["./event-details-dialog.component.scss"],
})
export class EventDetailsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EventDetailsDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public eventDetails: IEvent
  ) {}
}
