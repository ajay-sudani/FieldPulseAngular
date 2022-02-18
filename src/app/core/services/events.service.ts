import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IEvent } from "../models/event";

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {}

  public getEventsJSON(): Observable<{ events: IEvent[] }> {
    return this.http.get<{ events: IEvent[] }>("./assets/json/events.json");
  }
}
