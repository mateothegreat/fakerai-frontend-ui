import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatToolbarModule
} from '@angular/material';
import {HeaderComponent} from './header/header.component';
import {GeneratorComponent} from './generator/generator.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MonacoEditorModule} from 'ngx-monaco';

@NgModule({

    declarations: [

        AppComponent,
        GeneratorComponent,
        HeaderComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,

        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSliderModule,
        MatToolbarModule,

        MonacoEditorModule.forRoot(),

    ],

    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule {
}
