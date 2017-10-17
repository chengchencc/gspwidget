import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
    selector: 'gsp-widget-container',
    template:` 

    <div class="gsp-widget-container">   
        <gsp-widget *ngFor="let item of widgets" [col]="item.col" [row]="item.row" [content]="item.content" [title]="item.title" [footer]="item.footer">
        </gsp-widget>
    </div>
    `,
    styles:[`
 
    `]
    //templateUrl: './gsp-widget.component.html',
    //styleUrls: ['./gsp-widget.component.css']
})
export class GspWidgetContainerComponent implements OnInit {
    constructor() { }

    @Input()
    widgets:GspWidgetModel[];


    @Input()
    tpl:TemplateRef<any>;

    ngOnInit() {

 for (var i = 0; i < 20; i++) {
     if(i%3==0){
        this.widgets.push(this.newContentWidget());
        
     }else{
        this.widgets.push(this.newContentWidget2());
        
     }
     
 }


     }

    private newContentWidget(): GspWidgetModel {
        return {
            title:"title1",
            content:"content",
            footer:"footer",
            col:1,
            row:1
        };
    }

    private newContentWidget2(): GspWidgetModel {
        return {
            title:"title1",
            content:"content",
            footer:"footer",
            col:2,
            row:2
        };
    }
}

export interface GspWidgetModel{
    title:string | TemplateRef<any>,
    content:string | TemplateRef<any>,
    footer:string | TemplateRef<any>,
    col:number,
    row:number,
} 