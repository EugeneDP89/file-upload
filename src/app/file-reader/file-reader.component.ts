import { Component, OnInit } from '@angular/core';
import { CalculateSizeService } from '../services/calculate-size.service';

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
    private calculateSizeService: CalculateSizeService
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const input = event.target

    var reader = new FileReader()
    reader.onload = () => {
      this.fileContent = reader.result as string
    }
    this.file = input.files[0]
    this.calculateFileSize(this.file.size)
    reader.readAsText(this.file)
  }

  calculateFileSize(size: number) {
    this.fileSize = this.calculateSizeService.formatBytes(size)
  }

}
