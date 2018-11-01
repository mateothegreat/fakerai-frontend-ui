import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneratorService } from './generator.service';

@Component({
    selector: 'app-generator',
    templateUrl: './generator.component.html',
    styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {

    public outputs: string = '';

    public formGroup = new FormGroup({

        category: new FormControl('address'),
        input: new FormControl('["{{company.companyName}} ({{internet.email}})","{{image.avatar}}"]', [

            Validators.required,

        ]),
        optionCount: new FormControl(100),
        optionUnique: new FormControl('true')

    });

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

        },
        company: {

            label: 'Companies',
            key: 'company',
            children: [
                'suffixes',
                'companyName',
                'catchPhrase',
                'catchPhraseAdjective',
                'catchPhraseDescriptor',
                'catchPhraseNoun',
                'bs',
                'bsAdjective',
                'bsBuss',
                'bsNoun',

            ]

        },
        database: {

            label: 'Databases',
            key: 'database',
            children: [
                'columns',
                'type',
                'collation',
                'engine'
            ]

        },
        date: {

            label: 'Dates',
            key: 'date',
            children: [
                'past',
                'future',
                'recent'
            ]

        },
        finance: {

            label: 'Finance',
            key: 'finance',
            children: [
                'account',
                'accountName',
                'mask',
                'amount',
                'transactionType',
                'currencyCode',
                'currencyName',
                'currencySymbol',
                'bitcoinAddress',
                'ethereumAddress',
                'iban',
                'bic'
            ]

        },
        hacker: {

            label: 'Hacker Terms',
            key: 'hacker',
            children: [
                'abbreviation',
                'adjective',
                'noun',
                'verb',
                'ingverb',
                'phrase'
            ]

        },
        image: {

            label: 'Images',
            key: 'image',
            children: [
                'image',
                'avatar',
                'imageUrl',
                'abstract',
                'animals',
                'business',
                'cats',
                'city',
                'food',
                'nightlife',
                'fashion',
                'people',
                'nature',
                'sports',
                'technics',
                'transport',
                'dataUri'
            ]

        },
        internet: {

            label: 'Internet',
            key: 'internet',
            children: [
                'avatar',
                'email',
                'exampleEmail',
                'userName',
                'protocol',
                'url',
                'domainName',
                'domainSuffix',
                'domainWord',
                'ip',
                'ipv6',
                'userAgent',
                'color',
                'mac',
                'password'
            ]

        },
        lorem: {

            label: 'Lorem Ipsum',
            key: 'lorem',
            children: [
                'word',
                'words',
                'sentence',
                'sentences',
                'slug',
                'paragraph',
                'paragraphs',
                'text',
                'lines'
            ]

        },
        name: {

            label: 'Names',
            key: 'name',
            children: [
                'firstName',
                'lastName',
                'findName',
                'jobTitle',
                'prefix',
                'suffix',
                'title',
                'jobDescriptor',
                'jobArea',
                'jobType'
            ]

        },
        phone: {

            label: 'Phone Numbers',
            key: 'phone',
            children: [
                'phoneNumber',
                'phoneNumberFormat',
                'phoneFormats'
            ]

        },
        random: {

            label: 'Random Data',
            key: 'random',
            children: [
                'alphaNumeric',
                'arrayElement',
                'boolean',
                'float',
                'hexaDecimal',
                'image',
                'locale',
                'number',
                'objectElement',
                'uuid',
                'word'
            ]

        },
        system: {

            label: 'Systems',
            key: 'system',
            children: [
                'fileName',
                'commonFileName',
                'mimeType',
                'commonFileType',
                'commonFileExt',
                'fileType',
                'fileExt',
                'directoryPath',
                'filePath',
                'semver'
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

        });

    }

}
