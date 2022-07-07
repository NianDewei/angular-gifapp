import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  // search selector with ViewChild
  @ViewChild('textSearch') textSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifsService) {}

  ngOnInit(): void {}

  // methods
  search() {
    const inpuText = this.textSearch.nativeElement;
    const searchInformation = inpuText.value;
    // save in  record
    this.gifService.addRecord(searchInformation)
    // console.log(searchInformation);
    // clear input
    inpuText.value = '';
  }
}
