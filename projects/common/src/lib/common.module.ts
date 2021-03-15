import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { CommonComponent } from './common.component';
import { ToolbarComponent } from './controls/toolbar/toolbar.component';
import { FooterComponent } from './controls/footer/footer.component';



@NgModule({
  declarations: [
    CommonComponent,
    ToolbarComponent,
    FooterComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FlexModule,
    FlexLayoutModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    FlexLayoutModule,
    MatSidenavModule,
    CommonComponent,
    ToolbarComponent,
    FooterComponent,
  ],
  entryComponents: [
    ToolbarComponent,
    FooterComponent
  ]
})
export class CommonComponentsModule { }
