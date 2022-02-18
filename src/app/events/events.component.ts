import { Component, OnInit } from "@angular/core";
import { IEvent } from "../core/models/event";
import { EventsService } from "../core/services/events.service";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent implements OnInit {
  public events: IEvent[] = [];

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEventsJSON().subscribe((response) => {
      this.events = response.events;
    });
  }
}
