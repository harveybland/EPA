import { ApplyService } from './apply.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,  Validators } from '@angular/forms';


@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit  {
  


  constructor(private applyService: ApplyService,
              private router: Router,
              
    ) {}

  Form: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required)
  });

  ngOnInit() {

  }

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

  

  submit() {
    console.log(this.apply)
    this.applyService.apply(this.apply).subscribe((res) => {
      console.log(res)
      
      this.router.navigate(['/landing']);
    })
  }

}
