import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/umd';
import { EdicionPerfilPage } from './edicion-perfil';

@NgModule({
  declarations: [
    EdicionPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(EdicionPerfilPage),
  ],
})
export class EdicionPerfilPageModule {}
