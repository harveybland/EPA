import { ApplyService } from './apply.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {

  constructor(private applyService: ApplyService,
              private router: Router
    ) { }

  apply = {
    firstname: '',
    surname: '',
    email: '',
    phone: '',
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
    protection: '',
    sales: '',
    transport: '',
    comments: ''
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.apply)
    // this.applyService.apply(this.apply).subscribe((res) => {
    //   console.log(res)
    // })
  }

}
