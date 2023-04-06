import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as PoiActions from './poi.actions';
import { PoiEffects } from './poi.effects';

describe('PoiEffects', () => {
  let actions: Observable<Action>;
  let effects: PoiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        PoiEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PoiEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PoiActions.init() });

      const expected = hot('-a-|', {
        a: PoiActions.loadPoiSuccess({ poi: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
