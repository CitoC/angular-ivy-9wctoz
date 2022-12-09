import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Declare where this service is available for use
@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  // Create a new Subject
  subject = new Subject();

  data: string[] = ['Jessi', 'Lexi', 'Ethan'];

  onSubscribe() {
    // Returning the Subject as an Observable for subscription
    return this.subject.asObservable();
  }

  onNewData(val: string) {
    // Next will describe the next emitted value in the Observable Stream
    this.subject.next(val);
  }


}