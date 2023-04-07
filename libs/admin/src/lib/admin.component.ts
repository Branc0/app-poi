import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiEntity, PoiSelectors } from '@packt/poi';
import { Subscription } from 'rxjs';
import { AdminService } from './admin.service';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'packt-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit, OnDestroy {
  public data: any;

  private subscription: Subscription | undefined;

  constructor(private store: Store, private adminService: AdminService) {}

  ngOnInit(): void {
    this.subscription = this.store
      .select(PoiSelectors.getAllPoi)
      .subscribe((pois) => this.buildChart(pois));
    this.store.dispatch(PoiActions.init());
  }

  private buildChart(pois: PoiEntity[]) {
    const labels = pois.map((poi) => poi.name);
    this.data = {
      chartType: 'pie',
      labels: labels,
      datasets: [
        {
          data: this.adminService.getStatistics(pois),
        },
      ],
    };
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
