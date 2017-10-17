import { NgModule } from '@angular/core';
import { GspWidgetComponent } from './gsp-widget.component';
import { GspWidgetContainerComponent } from './gsp-widget-container.component';
// import { NzColDirective } from './nz-col.directive';
// import { NzColComponent } from './nz-col.component';
import { CommonModule } from '@angular/common';
import { GspWidgetService } from "./gsp-widget.service";
import { DefaultConfig } from "./gsp-widget.service";

@NgModule({
  declarations: [GspWidgetComponent,GspWidgetContainerComponent],//[ NzRowComponent, NzColDirective, NzColComponent ],
  exports     : [GspWidgetComponent,GspWidgetContainerComponent],//[ NzRowComponent, NzColDirective, NzColComponent ],
  providers   : [GspWidgetService,DefaultConfig],
  imports     : [ CommonModule ]
})

export class GspWidgetModule {



}