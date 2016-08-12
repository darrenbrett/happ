import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HappAppComponent } from '../app/happ.component';

beforeEachProviders(() => [HappAppComponent]);

describe('App: Happ', () => {
  it('should create the app',
      inject([HappAppComponent], (app: HappAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'happ works!\'',
      inject([HappAppComponent], (app: HappAppComponent) => {
    expect(app.title).toEqual('happ works!');
  }));
});
