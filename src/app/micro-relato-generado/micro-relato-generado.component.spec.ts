import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroRelatoGeneradoComponent } from './micro-relato-generado.component';

describe('MicroRelatoGeneradoComponent', () => {
  let component: MicroRelatoGeneradoComponent;
  let fixture: ComponentFixture<MicroRelatoGeneradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroRelatoGeneradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroRelatoGeneradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
