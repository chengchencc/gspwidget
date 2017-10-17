import { Component, OnInit,ComponentFactoryResolver,ViewContainerRef,Type } from '@angular/core';



import { PageItemComponent } from "../page-item/page-item.component";

import { AppUtilService } from "../../services/app-util.service";
import { FileService } from "../../services/file.service";
import { FileModel,FileState,FileType } from "../../model/file-model";

import { ModalComponent } from "../../modal/modal/modal.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
    private util: AppUtilService,
    private fileService:FileService,
    private componentFactoryResolver: ComponentFactoryResolver,
    public viewContainerRef: ViewContainerRef) { }
  
      files:FileModel[] = [];
      filesHistory:any[] = [];
      filesCache:any[]=[];
      breadcrumbs:any[]=[{name:"全部文件",url:"#"}];
      ngOnInit() {
          for (var i = 0; i < 10; i++) {            
             var item = new FileModel();
             item.id=i+"";
             item.title="文件夹名称"+i;
             item.icon="assets/images/Folder.png";
             item.state = FileState.Normal;
             item.type = FileType.Folder;
             item.desc = "";
              this.files.push(item);
          }
      }
      openFolder(file:FileModel){
          console.log(file);
          if(file.state != FileState.Normal) return;
  
          this.filesHistory.push({
              id:file.id,
              files:this.files
          });
  
          this.files = this.getFiles(file.id);
  
          //操作breadcrumb
          this.breadcrumbs.push({
              name:file.title,
              url:"#"
          });
      }
  
      getFiles(id:string):any[]{
          //TODO:ajax get data
          return  [];
      }
  
      updateFilesCache(id:string,files:any[]){
          
      }
  
      back(){
          let history = this.filesHistory.pop();
          this.files = history.files;
  
          this.breadcrumbs.pop();
      }
  
      addFolder(){
  
             var item = new FileModel();
             item.id=this.util.getGuid();
             item.title="新建文件夹";
             item.icon="../images/Folder.png";
             item.state = FileState.Add;
             item.type = FileType.Folder;
             item.desc = "";
  
          this.files.push(item);
      };
      addFolderCommit(file:FileModel){
          //TODO:save to server
          file.state=FileState.Normal;
      };
      addFolderRollback(){
          this.files.pop();
      };
        test(){
          this.fileService.getPageInfos().subscribe((res)=>{

            console.log(res);
          });
          
        };
        newPage(){
          console.log(this.viewContainerRef);
          this.openModal("DemoComponent");
        }

        openModal(modalName:string){

          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(<Type<any>>ModalComponent);
          
               let viewContainerRef = this.viewContainerRef;
               //viewContainerRef.clear();
               let componentRef = viewContainerRef.createComponent(componentFactory);
              
               componentRef.instance.item=modalName;
        }
  
  }