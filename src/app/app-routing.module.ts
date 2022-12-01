import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileReaderComponent } from './file-reader/file-reader.component';

const routes: Routes = [
  { path: '', redirectTo: '/file-reader', pathMatch: 'full' },
  { path: 'file-reader', component: FileReaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
