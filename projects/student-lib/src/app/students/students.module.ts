import { NgModule } from '@angular/core';

import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from 'shared';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    SharedModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
