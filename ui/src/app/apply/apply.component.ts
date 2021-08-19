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

  Form: FormGroup;

  // Form state 
  loading = false;
  success = false;

  apply = {
    firstname: '',
    surname: '',
    email: '',
    phone: '',
    comments: '',
    previous_level: null,
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
  }

  submit() {
    console.log(this.apply)
    this.applyService.apply(this.apply).subscribe((res) => {
      console.log(res)
      
      this.router.navigate(['/landing']);
    })
  }

}
