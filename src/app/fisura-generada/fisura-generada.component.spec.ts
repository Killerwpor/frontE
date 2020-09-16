import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisuraGeneradaComponent } from './fisura-generada.component';

describe('FisuraGeneradaComponent', () => {
  let component: FisuraGeneradaComponent;
  let fixture: ComponentFixture<FisuraGeneradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisuraGeneradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisuraGeneradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
