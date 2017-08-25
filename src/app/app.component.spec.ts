import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should define a function that maps input to possible letter combos', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.letterCombos).toBeDefined();
  }));

  it('should map single digit strings to array of letters', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.letterCombos('1')).toEqual(['1']);
    expect(app.letterCombos('3')).toEqual( ['d', 'e', 'f'] );
    expect(app.letterCombos('7')).toEqual( ['p', 'q', 'r', 's'] );
  }));

  it('should map multiple digit strings to combinations', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.letterCombos('23')).toEqual(['ad', 'ae', 'af',
     'bd', 'be', 'bf', 'cd', 'ce', 'cf']);

    expect(app.letterCombos('876')).toEqual(["tpm", "tpn", "tpo", "tqm", 
    "tqn", "tqo", "trm", "trn", "tro", "tsm", "tsn", "tso", "upm", "upn", "upo", "uqm", 
    "uqn", "uqo", "urm", "urn", "uro", "usm", "usn", "uso", "vpm", "vpn", "vpo", "vqm", 
    "vqn", "vqo", "vrm", "vrn", "vro", "vsm", "vsn", "vso"]);
  }));

});
