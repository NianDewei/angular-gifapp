import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass'],
})
export class SidebarComponent implements OnInit {
  // getter
  get records(): string[] {
    return this.gifService.record;
  }

  constructor(private gifService: GifsService) {}

  ngOnInit(): void {}
}
