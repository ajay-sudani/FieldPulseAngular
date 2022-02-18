import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { IEvent } from "../core/models/event";
import { EventDetailsDialogComponent } from "../event-details-dialog/event-details-dialog.component";

@Component({
  selector: "app-event-card",
  templateUrl: "./event-card.component.html",
  styleUrls: ["./event-card.component.scss"],
})
export class EventCardComponent {
  @Input() eventDetails: IEvent | null = null;

  constructor(private dialog: MatDialog) {}

  openEventDialog() {
    const dialogRef = this.dialog.open(EventDetailsDialogComponent, {
      data: this.eventDetails,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
