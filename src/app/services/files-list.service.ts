import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { UploadedFile } from '../interfaces/uploaded-file';

@Injectable({
  providedIn: 'root'
})

export class FilesListService {

  private _files: UploadedFile[] = []
  public filesSubject = new BehaviorSubject<UploadedFile[]>([])

  constructor() {
  }

  addFile(file: UploadedFile) {
    this._files.push(file)
    this.filesSubject.next(this._files)
  }

  listFiles() {
    this.filesSubject.next(this._files)
  }
}