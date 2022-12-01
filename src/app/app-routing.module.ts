import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { FilesListComponent } from './files-list/files-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/file-reader', pathMatch: 'full' },
  { path: 'file-reader', component: FileReaderComponent },
  { path: 'files-list', component: FilesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
