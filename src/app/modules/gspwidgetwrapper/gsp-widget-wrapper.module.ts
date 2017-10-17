import { NgModule } from '@angular/core';

import { GspWidgetComponent } from '../gspwidget/gsp-widget.component';
import { GspWidgetContainerComponent } from '../gspwidget/gsp-widget-container.component';

import { GspWidgetTpl1Component } from "./gsp-widget-tpl1.component";
import { GspWidgetTpl2Component } from "./gsp-widget-tpl2.component";
import { GspWidgetTpl3Component } from "./gsp-widget-tpl3.component";
import { GspWidgetTpl4Component } from "./gsp-widget-tpl4.component";
import { GspWidgetTpl5Component } from "./gsp-widget-tpl5.component";

import { CommonModule } from '@angular/common';
import { GspWidgetService } from "../gspwidget/gsp-widget.service";
import { DefaultConfig } from "../gspwidget/gsp-widget.service";

@NgModule({
  declarations: [GspWidgetComponent,GspWidgetContainerComponent,GspWidgetTpl1Component,GspWidgetTpl2Component,GspWidgetTpl3Component,GspWidgetTpl4Component,GspWidgetTpl5Component],
  exports     : [GspWidgetComponent,GspWidgetContainerComponent,GspWidgetTpl1Component,GspWidgetTpl2Component,GspWidgetTpl3Component,GspWidgetTpl4Component,GspWidgetTpl5Component],
  providers   : [GspWidgetService,DefaultConfig],
  imports     : [ CommonModule ]
})

export class GspWidgetWrapperModule {



}