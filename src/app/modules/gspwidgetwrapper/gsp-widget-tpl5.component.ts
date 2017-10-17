import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'gsp-widget-tpl5',
    template:`   
    <gsp-widget [col]="2" [row]="2" [title]="'封面图片'">
        <img src="http://localhost:9300/img/p5.jpg" alt="" class="cover">
    </gsp-widget>
        `,
        styles:[`
        .cover {
            width: 100%;
        }
        `]
})
export class GspWidgetTpl5Component implements OnInit {
    constructor() { }

    ngOnInit() { }
}