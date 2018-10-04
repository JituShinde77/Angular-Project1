import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent} from './booking.components';
import { BookingService} from './booking.services';
import { AuthGuard} from '../shared/services/auth-guard.service';




const routes: Routes = [
    {path:'', component: BookingComponent, canActivate: [AuthGuard] }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)],
    providers: [
        BookingService
    ],
    declarations: [
        BookingComponent
    ]
})
export class BookingModule { }