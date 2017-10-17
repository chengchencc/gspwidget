import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gsp-widget-tpl1',
    template:`   
    <gsp-widget [col]="2" [row]="2" [title]="'封面图片'"  [bodyStyle]="{'width':'100%','height':'100%'}" [wgStyle]="{'color':'white','background':'url(http://localhost:9300/img/p5.jpg)'}" >
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
export class GspWidgetTpl1Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}
