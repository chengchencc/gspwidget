import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDragDemo]'
})
export class DragDemoDirective {
  start:boolean = false;
  original:Event;
  constructor(private el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'yellow';
    console.log(el);
 }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  @HostListener('mousedown',['$event']) onMouseDown(event) {
    console.log('mousedown');
    console.log(event);
    //console.log(arguments);
    this.original = event;
    this.start = true;
    //this.el.nativeElement.style.
  }
  
  @HostListener('mouseup') onMouseUp() {
    // console.log('mouseup');
    // console.log(arguments);
    this.start = false;

  }

  @HostListener('mousemove',['$event']) onMouseMove(event) {
    //console.log('mousemove');
    //console.log(arguments);
    console.log(event)

    if(this.start){
        this.el.nativeElement.style.position = "fixed";
        this.el.nativeElement.style.left = event.clientX-50+"px";
        this.el.nativeElement.style.top = event.clientY-50+"px";
      }
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }




}
