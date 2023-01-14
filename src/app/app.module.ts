import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';

import { DecimalPipe } from '@angular/common';



@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [DecimalPipe],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        PrincipalModule,
        
    ]
})
export class AppModule { }
