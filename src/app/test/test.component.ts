import {Component} from '@angular/core';
import {TestService} from './test.service';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent {

    public companyNames: Array<string> = [];

    public constructor(private testService: TestService) {

        this.testService.getCompanyNames().subscribe((results) => {

            this.companyNames = results.data[0].data;

            console.log(results);

        });

    }

}
