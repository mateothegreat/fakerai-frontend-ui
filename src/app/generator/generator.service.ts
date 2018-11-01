import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GeneratorService {

    public constructor(private httpClient: HttpClient) {

    }

    public generate(body: string, count: number, unique?: boolean): Observable<any> {

        return this.httpClient.post(`https://api.faker.ai/pattern?n=${count}&unique=${unique}`, body);

    }

}
