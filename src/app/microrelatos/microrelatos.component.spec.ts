import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrorelatosComponent } from './microrelatos.component';

describe('MicrorelatosComponent', () => {
  let component: MicrorelatosComponent;
  let fixture: ComponentFixture<MicrorelatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrorelatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrorelatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
