import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisurasComponent } from './fisuras.component';

describe('FisurasComponent', () => {
  let component: FisurasComponent;
  let fixture: ComponentFixture<FisurasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisurasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
