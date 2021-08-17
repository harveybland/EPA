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

  ngOnInit() {
    this.apprenticeshipService.getApprenticeships().subscribe(data => {
      console.log(data)
      this.AppArray = data;
    })
  }

}
