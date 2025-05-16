import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeHolidayComponent } from './employee-holiday/employee-holiday.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {provideHttpClient} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeHolidayComponent,
    EmployeeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
