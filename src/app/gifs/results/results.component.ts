import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.sass'],
})
export class ResultsComponent implements OnInit {
  // getter
  get results() {
    return this.gifService.results;
  }

  constructor(private gifService: GifsService) {}

  ngOnInit(): void {}
}
