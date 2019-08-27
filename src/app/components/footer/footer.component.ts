import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'lacc-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    year: number = new Date().getFullYear();
    url: string;
    company: string;
    createdby: string;

    ngOnInit(): void {
       this.url = 'https://github.com/mdsaifalam96/Resturent-Pro';
        this.company = 'Md Saif Alam';
        this.createdby = 'Website designed by';
    }
}
