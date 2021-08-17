import { ApplyService } from './apply.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent  {

  constructor(private applyService: ApplyService,
              private router: Router
    ) { }

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
