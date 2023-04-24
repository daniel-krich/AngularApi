import { InjectionToken, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

const baseUrl = 'http://localhost:5188';

export const BASE_URL = new InjectionToken<string>('baseUrl');

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatDialogModule,
        BrowserAnimationsModule
    ],
    providers: [
        { 
            provide: BASE_URL,
            useValue: baseUrl
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
