export enum  FileType{
    Folder = 0,
    File,
    Image,
    Music,
    Video,
    Zip,
    Doc,

}
export enum FileState{
    Normal=0,
    Add=1,
    Edit=2,

}

export class FileModel {
    id:string;
    title:string;
    icon:string;
    desc:string;
    state:FileState;
    type:FileType;
}