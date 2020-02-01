import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minDate1: Date;
  maxDate1: Date;
  minDate2: Date;
  maxDate2: Date;
  minDate3: Date;
  maxDate3: Date;

  constructor() {
    console.log("App component");

    this.minDate1 = new Date();
    this.maxDate1 = new Date();

    // To display only 2019 whole year
    this.maxDate1 = new Date(this.maxDate1.getFullYear(), 11, 31);

    this.minDate2 = new Date();
    this.maxDate2 = new Date();

    // To display only 2019 whole year
    this.maxDate2 = new Date(this.maxDate2.getFullYear(), 11, 31);

    this.minDate3 = new Date();
    this.maxDate3 = new Date();

    this.maxDate3 = new Date(this.maxDate3.getFullYear(), 11, 31);
  }

  departure(e: any) {
    // to select user 23 if he already selectes 22
    let dummyDate = new Date(e);
    let oneDayExtra = dummyDate.getDate() + 1;
    this.minDate2 = new Date(dummyDate.setDate(oneDayExtra));
  }

  departure2(e: any) {
    let r = new Date(e);
    let addone = r.getDate() + 1;
    console.log(addone);
    this.minDate3 = new Date(r.setDate(addone))
  }


  settimeout() {
    setTimeout(() => {
      alert("Set time out function called after 2s");
    }, 2000);
  }

  setinterval() {
    setInterval(() => {
      let d = new Date();
      document.getElementById("demo").innerHTML = d.getSeconds().toString();
    }, 1000);
  }


}
