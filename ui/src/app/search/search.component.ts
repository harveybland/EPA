import { ApprenticeshipService } from './search.service';
import { Component, OnInit } from '@angular/core';
import { apprenticeship } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private apprenticeshipService: ApprenticeshipService) { }

  public AppArray: apprenticeship[] = []

 model = {
    route: '',
    status: '',
    level: '',
    duration: ''
  };

  ngOnInit() {
 
  }

  find() {
    this.apprenticeshipService.getApprenticeships(this.model).subscribe(data => {
      console.log(this.model)
      console.log(data)
      this.AppArray = data;
    })
  }

}
