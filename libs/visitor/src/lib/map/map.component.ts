import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Store } from '@ngrx/store';
import { PoiActions, PoiSelectors } from '@packt/poi';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  public poi$ = this.store.select(PoiSelectors.getSelected);

  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;

  constructor(private readonly store: Store) {}

  public showInfo(marker: MapMarker, poiId: string | number) {
    this.info?.open(marker);
    this.store.dispatch(PoiActions.visitPoi({ poiId }));
  }
}
