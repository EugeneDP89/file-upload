import { Component, OnInit } from '@angular/core';
import { CalculateSizeService } from '../services/calculate-size.service';
import { FilesListService } from '../services/files-list.service';
import { UploadedFile } from '../interfaces/uploaded-file';
import { BufferedFileLineReader } from './buffered-file-line-reader'

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss']
})
export class FileReaderComponent implements OnInit {

  file: any
  fileContent = ''
  fileSize = ''

  constructor(
    private calculateSizeService: CalculateSizeService,
    private filesListService: FilesListService
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0]
    new BufferedFileLineReader(this.file).readLines(
      (line) => this.fileContent = this.fileContent.concat('\n', line),
      () => { return }
    )
    this.file = event.target.files[0]
    this.calculateFileSize(this.file.size)
    const data: UploadedFile = {
      name: this.file.name,
      uploadDate: Date.now(),
      size: this.fileSize
    }
    this.filesListService.addFile(data)
  }

  calculateFileSize(size: number) {
    this.fileSize = this.calculateSizeService.formatBytes(size)
  }

}
