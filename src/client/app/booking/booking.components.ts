import { Component } from '@angular/core';
import { BookingService } from './booking.services';
//import { AppState } from '../../../app.service';
//import { Booking} from './booking.model';
import { getDefaultService } from 'selenium-webdriver/chrome';

@Component({
    selector: "booking_page",
    templateUrl: './booking.component.html',

})
export class BookingComponent {

    booking_list: Array<any> = [];
    constructor(private bookingService: BookingService) {

    }
   // let user = appState.get('userData').role; // == 'ROLE_ADMIN

    ngOnInit() {
        console.log("OnInit");
        this.getBookings();
    }
    

    getBookings() {
        this.bookingService.getBookings((bookingsList) => {
            this.booking_list = bookingsList;
            console.log(this.booking_list);
        }, () => {
            console.log('Internal server error');
        });
    }

    newDate(date)
    {
        
        let date1 = new Date(date);
       // console.log("called.",date1);
        let now = new Date();
       // console.log(now);
        if ( date1 > now)
        {
            return false;
        } else{
            return true;
        }
    }
    onCancel()
    {

    }
    onEdit(id)
    {
        console.log("Clicked..", id);
    }
    onDelete(id)
    {
        console.log("Clickedd..", id);
    }
    

}
