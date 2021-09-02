import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelsiusSymbolComponent } from './celsius-symbol.component';

describe('CelsiusSymbolComponent', () => {
  let component: CelsiusSymbolComponent;
  let fixture: ComponentFixture<CelsiusSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelsiusSymbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelsiusSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
