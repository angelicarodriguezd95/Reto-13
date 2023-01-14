import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormretoComponent } from './formreto/formreto.component';
import { SolperuPipe } from '../solperu.pipe';



@NgModule({
  declarations: [

    FormretoComponent,
    SolperuPipe
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [
  
    FormretoComponent,
   
  ]
})
export class PrincipalModule { }
