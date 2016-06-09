import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Fb1AppComponent } from '../app/fb1.component';

beforeEachProviders(() => [Fb1AppComponent]);

describe('App: Fb1', () => {
  it('should create the app',
      inject([Fb1AppComponent], (app: Fb1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'fb1 works!\'',
      inject([Fb1AppComponent], (app: Fb1AppComponent) => {
    expect(app.title).toEqual('fb1 works!');
  }));
});
