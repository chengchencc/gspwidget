import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageComponent } from './com/page/page.component';
import { ContentComponent } from './com/content/content.component';
import { PageItemComponent } from './com/page-item/page-item.component';

import {HttpClientModule} from '@angular/common/http';

//Service
import { AppUtilService } from "./services/app-util.service";
import { FileService } from "./services/file.service";
import { ModalDirective } from './modal/modal.directive';
import { ModalComponent } from './modal/modal/modal.component';
import { DemoComponent } from './modal/demo/demo.component';
import { DragDemoComponent } from './com/drag-demo/drag-demo.component';
import { DragDemoDirective } from './com/drag-demo/drag-demo.directive';

//modules
// import { GspWidgetModule } from "./modules/gspwidget/gsp-widget.module";
import { GspWidgetWrapperModule } from "./modules/gspwidgetwrapper/gsp-widget-wrapper.module";


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ContentComponent,
    PageItemComponent,
    ModalDirective,
    ModalComponent,
    DemoComponent,
    DragDemoComponent,
    DragDemoDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    // GspWidgetModule,
    GspWidgetWrapperModule
  ],
  providers: [AppUtilService,FileService],
  bootstrap: [AppComponent],
  entryComponents:[DemoComponent,ModalComponent]
})
export class AppModule { }
