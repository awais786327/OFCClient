import { Component, OnInit } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss'],
})
export class CardGridComponent implements OnInit {
  isLoading: any = false;

  constructor(public loadingBarService: LoadingBarService) {
    this.loadingBarService.useRef().value$.subscribe((v: any) => (this.isLoading = !!v));
  }

  ngOnInit(): void {}
}
