import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-demo',
  templateUrl: './drag-demo.component.html',
  styleUrls: ['./drag-demo.component.css']
})
export class DragDemoComponent implements OnInit {

  private items:any[] = [];
  
  constructor() { }

  ngOnInit() {

    for (var i = 0; i < 20; i++) { 
      this.items.push({
      id:i,
      name:"item"+i
    });

  }


  }

  


}
