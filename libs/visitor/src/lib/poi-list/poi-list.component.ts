import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-poi-list',
  templateUrl: './poi-list.component.html',
  styleUrls: ['./poi-list.component.css'],
})
export class PoiListComponent implements OnInit {
  public pois$ = this.store.select(PoiSelectors.getAllPoi);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PoiActions.init());
  }
}