import { Component, OnInit, VERSION } from '@angular/core';
import { from, of } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// Must implement lifecycle Interface!
export class AppComponent implements OnInit {
  // Injecting our Service into this component
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Service and Dependancy Injection
    // Return is of type Observable
    // let response = this.userService.getData();
    // console.log(response);
    // To extract the value, we must subscribe
    // response.subscribe((users: any) => console.log(users));
    // Emitting values through Observable Stream
    //******************************************* */
    // Of vs From
    // let arr = [1,2,3];
    // // Using from to create an Observable
    // // Accepts Promises, Observables, iterables (array) to be converted to an Observable
    // let observableFrom = from(arr).subscribe(items => console.log(items));
    // console.log(observableFrom)
    // // Using of to create an Observable
    // // Accepts values with no conversion
    // let observableOf = of(arr).subscribe(items => console.log(items));
    // console.log(observableOf);
    //******************************************* */
    // Subjects
    // Subscribe to the Suject expecting string values
    // this.userService.onSubscribe()
    //   .subscribe((newData:string) => {
    //     this.userService.data.push(newData);
    //     console.log(this.userService.data);
    //   })
  }

  // stringData: string = '';

  // newEntry() {
  //   this.userService.onNewData(this.stringData);

  // }

  //********************************************* */
  // Route Guards
  setToken() {
    localStorage.setItem('token', 'my jwt');
  }
}
