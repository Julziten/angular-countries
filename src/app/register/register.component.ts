import { Component, OnInit } from '@angular/core';
import { rForm }    from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class FormRegister {

    model = new rForm (1, 'Juliana', 'Rocha', 37611525, 'rochajulianacarolina@gmail.com', 'bebeloco', 'bebeloco', 54545454, '11 de Septiembre 2615');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    // newHero() {
    //   this.model = new rForm (1, 'Fernando', 'Blasco', 3535357, 'pipipip@gmail.com', 'cucu', 'cucu', 736832, '11 de Septiembre 2615');
    // }

}

