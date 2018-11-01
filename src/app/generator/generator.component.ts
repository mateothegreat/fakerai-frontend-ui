import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GeneratorService} from './generator.service';
import {MonacoEditorDirective} from 'ngx-monaco';

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

    @ViewChild(MonacoEditorDirective) editor: MonacoEditorDirective;

    public outputs: string = '';

    public formGroup = new FormGroup({

        category: new FormControl('address'),
        input: new FormControl('["{{company.companyName}} ({{internet.email}})","{{image.avatar}}"]', [

            Validators.required,

        ]),
        optionCount: new FormControl(100),
        optionUnique: new FormControl('true')

    });

    public readonly monacoOptions = {

        quickSuggestions: true,
        lineNumbers: true,
        cursorBlinking: 'phase',
        scrollBeyondLastLine: false,
        autoIndent: true,
        formatOnType: true,
        formatOnPaste: true,
        codeLens: true,

    };

    public categories: {

        [key: string]: {

            label: string,
            key: string,
            children: Array<string>

        }

    } = {

        address: {

            label: 'Addresses',
            key: 'address',

            children: [

                'zipCode',
                'city',
                'cityPrefix',
                'citySuffix',
                'streetName',
                'streetAddress',
                'streetSuffix',
                'streetPrefix',
                'secondaryAddress',
                'county',
                'country',
                'countryCode',
                'state',
                'stateAbbr',
                'latitude',
                'longitude'

            ]

        },
        commerce: {

            label: 'Commerce',
            key: 'commerce',
            children: [

                'color',
                'department',
                'productName',
                'price',
                'proudctAdjective',
                'productMaterial',
                'product'

            ]

        }

    };

    public categoryNames = Object.keys(this.categories);

    public constructor(private generatorService: GeneratorService) {

    }

    public ngOnInit() {

    }

    public generateClick(): void {

        this.generatorService.generate(this.formGroup.controls.input.value, this.formGroup.controls.optionCount.value, this.formGroup.controls.optionUnique.value).subscribe((results: any) => {

            console.log(results);

            this.outputs = JSON.stringify(results, null, 4);

            this.editor.open({

                uri: 'outputs.json',
                language: 'json',
                content: JSON.stringify(results, null, 4)

            });

        });

    }

}
