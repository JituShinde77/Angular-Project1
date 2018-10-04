import { Component } from '@angular/core';
import {EventService } from './event.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

class Event {
    name: String;
    location: String;
    city: String ;
    country: String;
    no_of_seats: Number;
    imageUrl: string;

   // description: String;
}

@Component({
    selector: "event_page",
    templateUrl: './event.component.html',
    providers: [EventService]

})
export class EventComponent {
    public eventForm: FormGroup;
    event: Event;
    constructor(private eventService: EventService) {
        this.event = new Event();
    }

    addEvent() {
        console.log(this.event);
        this.eventService.saveEvent(this.event, () => {
        },
            () => {
            });
    }
    processEventData()
    {
        console.log(this.event);
    }






}
