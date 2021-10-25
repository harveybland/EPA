import { ApprenticeshipService } from './search.service';
import { Component, OnInit } from '@angular/core';
import { apprenticeship } from './search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private apprenticeshipService: ApprenticeshipService) { }

  public AppArray: apprenticeship[] = []

  totalLength: any;
  page: number = 1;


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
      this.totalLength = data.length;
      this.AppArray = data;
    })
  }

}
