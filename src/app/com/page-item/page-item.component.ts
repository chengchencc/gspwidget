import { Output, Input, Component, OnInit, EventEmitter } from '@angular/core';

import { FileModel,FileState,FileType } from "../../model/file-model";

@Component({
  selector: 'app-page-item',
  templateUrl: './page-item.component.html',
  styleUrls: ['./page-item.component.css']
})
export class PageItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() 
  file:FileModel;
  @Output() 
  fileChange = new EventEmitter<FileModel>();

  addFolderCommit(file:FileModel){
      //TODO:save to server
      file.state=FileState.Normal;
  }
  addFolderRollback(){
      //this.files.pop();
      this.fileChange.emit(this.file);
  }


}
