import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gsp-widget-tpl2',
    template:`   
    <gsp-widget [col]="1" [row]="1" [disableSelect]="false" [bodyStyle]="{'border-radius':'10px'}" [wgStyle]="{'border-radius':'5px','color':'white','background-color':'#2196f3'}" [title]="'My Notifications'" >
    <ng-template #titleTpl>
        <div class="w-title" style="background:red;">
            title
        </div>
    </ng-template>
    <div style="">
        <ul class="item" >
            <li><img src="http://localhost:9300/img/a4.jpg" alt="" class="cover" style="border-radius:20px;"><span>3 Approved</span></li>
            <li><img src="http://localhost:9300/img/a4.jpg" alt="" class="cover" style="border-radius:20px;">4 Waiting</li>
            <li><img src="http://localhost:9300/img/a4.jpg" alt="" class="cover" style="border-radius:20px;">1 Rejected</li>
        </ul>
    </div>
    </gsp-widget>
        `,
        styles:[`
        .item{
            padding: 0px;
            list-style-type: none;
            padding-left: 10px;
            margin-top:10px;
        }
        .item li{
            height:30px;
            line-height:30px;
        }
        .item li img{
            width: 25px;
            height: 25px;
            border-radius: 20px;
            vertical-align: middle;
            margin-right: 5px;
        }
        `]
})
export class GspWidgetTpl2Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}