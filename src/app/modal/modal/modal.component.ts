import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy,Type,ViewContainerRef } from '@angular/core';

import { ModalDirective } from "../modal.directive";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements AfterViewInit, OnDestroy {

  @Input() item:string;
  @ViewChild(ModalDirective) adHost: ModalDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,private viewContainerRef: ViewContainerRef) { }
  ngAfterViewInit() {
    this.loadComponent();
    //this.getAds();
  }

  ngOnDestroy() {
    //clearInterval(this.interval);
  }

  loadComponent() {

    console.log(this.componentFactoryResolver);
    console.log(this.item);
    var factories = Array.from(this.componentFactoryResolver['_factories'].keys());
    var factoryClass = <Type<any>> factories.find((x: any) => x.name === this.item);
    var componentFactory = this.componentFactoryResolver.resolveComponentFactory(factoryClass);

     let viewContainerRef = this.adHost.viewContainerRef;
     viewContainerRef.clear();

     let componentRef = viewContainerRef.createComponent(componentFactory);
    // (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {

  }
  cancle(){
    //this.viewContainerRef.clear();
    this.viewContainerRef.element.nativeElement.remove();
  }

}
