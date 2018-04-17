import { Component, OnInit, SimpleChanges, SimpleChange } from '@angular/core';
import { FormControl } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  searchControl = new FormControl();

  ngOnInit() {
    console.log(this.searchControl);

    this.searchControl.setValue('');
    // setInterval(() => console.log(this.searchControl), 5000);
  }




}
