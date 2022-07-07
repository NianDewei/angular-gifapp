import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export class SearchComponent implements OnInit {
  // search selector with ViewChild
  @ViewChild('textSearch') textSearch!: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  // methods
  search() {
    const inpuText = this.textSearch.nativeElement;
    const searchInformation = inpuText.value;
    console.log(searchInformation);
    // clear input
    inpuText.value = '';
  }
}
