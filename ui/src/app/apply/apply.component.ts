import { ApplyService } from './apply.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit  {
  
  recaptcha: any[];
  catcheResolve : boolean = false;
  
  Form: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl(''),
    comments: new FormControl(''),
    previous_level: new FormControl(''),
    agriculture: new FormControl(''),
    business: new FormControl(''),
    care: new FormControl(''),
    catering: new FormControl(''),
    construction: new FormControl(''),
    creative: new FormControl(''),
    digital: new FormControl(''),
    education: new FormControl(''),
    engineering: new FormControl(''),
    hair: new FormControl(''),
    health: new FormControl(''),
    legal: new FormControl(''),
    protective: new FormControl(''),
    sales: new FormControl(''),
    transport: new FormControl('')
  });

  constructor(private applyService: ApplyService,
              private router: Router,
              private toastr: ToastrService     
    ) {}

  ngOnInit() {

  }


  resolved(captchaResponse: any[]) {
    this.recaptcha = captchaResponse;
    this.catcheResolve = true;
  }

  submit() {
    if (!this.catcheResolve) {
      this.toastr.error('Are you a robot?')
      return;
    }
    if(this.Form.valid){
      this.Form.controls.firstname.markAsDirty();
      this.Form.controls.surname.markAsDirty();
      this.Form.controls.firstname.markAsTouched();
      this.Form.controls.surname.markAsTouched();
      this.Form.controls.firstname.markAsPristine();
      this.Form.controls.surname.markAsPristine();
    } 
    if (this.Form.invalid) {
      this.toastr.error('Please complete the form')
    }
    this.applyService.apply(this.Form.value).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/landing']);
    })
  }

}
