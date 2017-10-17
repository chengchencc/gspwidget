import { Component, OnInit,Input,TemplateRef } from '@angular/core';

import { DefaultConfig } from "./gsp-widget.service";

@Component({
    selector: 'gsp-widget',
    templateUrl: './gsp-widget.component.html',
    styleUrls: ['./gsp-widget.component.css']
    // template:`
    //     <div class="gsp-widget">
    //         <!-- <ng-template [tpl]="gsp-widget-default-tpl"></ng-template> -->
    //         gsp widget running!!!
    //     </div>
    // `,
    
    // styles:[`
    // .gsp-widget{
    //     width:100px;
    //     height: 100px;
    //  }  
    
    // `]
})
export class GspWidgetComponent implements OnInit {
    constructor(private config:DefaultConfig) { }

    _titleTpl:TemplateRef<any>;
    _contentTpl:TemplateRef<any>;
    _footerTpl:TemplateRef<any>;
    _title:string;
    _content:string;
    _footer:string;    

    _wgStyle:any = {};
    _bodyStyle:any={};

    _disableSelectStyle:any={
        '-webkit-user-select': 'none',
        /* Chrome all / Safari all */
        '-moz-user-select': 'none',
        /* Firefox all */
        '-ms-user-select': 'none',
        /* IE 10+ */
    };

    @Input() 
    set title(value:TemplateRef<any> | string){
        if (value instanceof TemplateRef) {
            this._titleTpl = value;
          } else {
            this._title = <string>value;
          }
    }
    @Input() 
    set content(value:TemplateRef<any> | string){
        if (value instanceof TemplateRef) {
            this._contentTpl = value;
          } else {
            this._content = <string>value;
          }
          console.log(value);
    }
    @Input() 
    set footer(value:TemplateRef<any> | string){
        if (value instanceof TemplateRef) {
            this._footerTpl = value;
          } else {
            this._footer = <string>value;
          }
          console.log(value);
    }

    @Input()
    col:number = 1;

    @Input()
    row:number = 1;

    @Input()
    disableSelect:boolean = true;

    @Input()
    set wgStyle(value:Object){
        this._wgStyle = value;
    }
    get wgStyle(){
        var re = Object.assign({},this._wgStyle,{
            "width":this._width+"px",
            "height":this._height+"px",
            "margin-left":this.marginLeft+"px",
            "margin-top":this.marginTop+"px",
            "margin-right":this.marginRight+"px",
            "margin-bottom":this.marginBottom+"px"
        });
        if(this.disableSelect){
            Object.assign(re,this._disableSelectStyle);
        }
        return re;
    }

    @Input()
    set bodyStyle(value:Object){
        this._bodyStyle = value;
    }
    get bodyStyle(){
        return this._bodyStyle;
    }


    _width:number;
    _height:number;

    marginLeft:number = this.config.seedMargin.left;
    marginRight:number = this.config.seedMargin.right;
    marginTop:number = this.config.seedMargin.top;
    marginBottom:number = this.config.seedMargin.bottom;

    ngOnInit() { 

        this._width = this.config.seedCol*this.col+(this.col-1)*(this.marginLeft+this.marginRight);
        this._height = this.config.seedRow*this.row+(this.row-1)*(this.marginTop+this.marginBottom);
        

    }


}