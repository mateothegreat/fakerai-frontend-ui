import {Injectable} from '@angular/core';
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
