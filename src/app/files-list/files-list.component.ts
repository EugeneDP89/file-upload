import { Component, OnInit } from '@angular/core';
import { FilesListService } from '../services/files-list.service';
import { UploadedFile } from '../interfaces/uploaded-file';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit {

  files: UploadedFile[] = []

  constructor(
    private filesListService: FilesListService
  ) { }

  ngOnInit(): void {
    this.filesListService.filesSubject.subscribe((files: UploadedFile[]) => {
      this.files = files
    })
  }

}
