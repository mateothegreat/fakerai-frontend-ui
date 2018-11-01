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
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {PrismModule} from '@ngx-prism/core';

@NgModule({

    declarations: [

        AppComponent,
        FooterComponent,
        GeneratorComponent,
        HeaderComponent,
        HomeComponent,

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

        PrismModule,

    ],

    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule {
}
