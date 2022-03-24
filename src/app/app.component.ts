import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'felix';
  leeftijd = 35;
  stad = 'Eindhoven';

  naamFunctie(){
    console.log("het werkt");
    this.leeftijd = 77;
    return 34;
  }
  veranderNaam($event:any) {
    console.log(typeof($event));
    this.title = $event.target.value;
   // this.title =$newName.target.;
  }

}
