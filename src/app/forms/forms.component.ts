import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Template Driven Forms
  templateForm = {
    username: '',
    email: '',
    password: ''
  };

  onClick() {
    console.log(this.templateForm)
  }

  // Reactive Forms
  // reactiveForm = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });

  // onClick() {
  //   // Form Group instance
  //   console.log(this.reactiveForm);

  //   // Actual form values
  //   console.log(this.reactiveForm.getRawValue())
  // }
  
  // FormBuilder with Validators
  // fBuilder = new FormBuilder().group({
  //   username: ['', Validators.minLength(3)],
  //   email: '',
  //   password: ''
  // })

  // onClick() {
  //   console.log(this.fBuilder);

  //   console.log(this.fBuilder.getRawValue());
  // }
}