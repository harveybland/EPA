import { ApplyService } from './apply.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit  {
  
  recaptcha: any[];
  catcheResolve : boolean = false;
  
  Form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  });

  apply = {
    firstname: '',
    surname: '',
    email: '',
    phone: '',
    comments: '',
    previous_level: '',
    agriculture: '',
    business: '',
    care: '',
    catering: '',
    construction: '',
    creative: '',
    digital: '',
    education: '',
    engineering: '',
    hair: '',
    health: '',
    legal: '',
    protective: '',
    sales: '',
    transport: ''
  }


  constructor(private applyService: ApplyService,
              private router: Router,
              private fb: FormBuilder              
    ) {}

  ngOnInit() {
    this.Form = this.fb.group({
      firstname: ['', [Validators.required] ],
      surname: ['', [Validators.required] ]
    })
  }


  resolved(captchaResponse: any[]) {
    this.recaptcha = captchaResponse;
    console.log(this.recaptcha)
    this.catcheResolve = true;
  }

  submit() {
    if (!this.catcheResolve) {
      alert('Are you a robot!')
      return;
    }
    if(this.Form.valid){
      this.Form.controls.firstname.markAsDirty();
      this.Form.controls.surname.markAsDirty();
      this.Form.controls.firstname.markAsTouched();
      this.Form.controls.surname.markAsTouched();
      this.Form.controls.firstname.markAsPristine();
      this.Form.controls.surname.markAsPristine();
      return
    }
    console.log(this.apply)
    this.applyService.apply(this.apply).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/landing']);
    })
  }

}
