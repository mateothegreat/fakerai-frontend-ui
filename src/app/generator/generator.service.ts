import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GeneratorService {

    public constructor(private httpClient: HttpClient) {

    }

    public generate(body: string, count: number, unique?: boolean): Observable<any> {

        return this.httpClient.post(`${environment.API_BASE}/pattern?n=${count}&unique=${unique}`, body, {

            headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})

        });

    }

}
