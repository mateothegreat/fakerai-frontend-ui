import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public code: string = `import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    public constructor(private httpClient: HttpClient) {
    }

    public getCompanyNames(): Observable<{

        status: boolean,
        data: Array<{

            data: Array<string>,
            pattern: string,
            requestedLength: number,
            unique: boolean

        }>

    }> {

        return this.httpClient.post('https://api.faker.ai/pattern?n=100&unique=true', ['{{company.companyName}}']);

    }

}
`;

    public json: string = `{
    "status": true,
    "data": {
        "name": "Cecile Lemke III",
        "username": "Georgette.Ebert",
        "email": "Michael38@gmail.com",
        "address": {
            "street": "Marina Trace",
            "suite": "Apt. 089",
            "city": "North Douglasville",
            "zipcode": "40725-7712",
            "geo": {
                "lat": "-72.2600",
                "lng": "36.7209"
            }
        },
        "phone": "1-599-600-4740 x7695",
        "website": "fredrick.org",
        "company": {
            "name": "Pfeffer Inc",
            "catchPhrase": "Decentralized systematic extranet",
            "bs": "transparent strategize users"
        }
    }
`;

    constructor() {
    }

    ngOnInit() {
    }

}
