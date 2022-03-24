import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { BordSpel } from './bordspel';

@Component({
  selector: 'my-student',
  templateUrl: 'student.component.html',
  providers: [StudentService]
})
export class StudentComponent {
    voornaam = 'fred';
    spellen : BordSpel[] = [];
    
    changeName(){
        this.voornaam = 'Joost';

        this.studentService.eenMethodeProberen().subscribe(
            antwoord => {  //lambda
               console.log(antwoord);
               this.spellen = antwoord;
            }
        );;

    }
    voegSpelToe(){
        console.log("naar de post");
        this.studentService.voegEenSpelToe().subscribe(
            antwoord => {  //lambda
               console.log(antwoord);
            }
        );
    }

    constructor(private studentService: StudentService){

    }


}
