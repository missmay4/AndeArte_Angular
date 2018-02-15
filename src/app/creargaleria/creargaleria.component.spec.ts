import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreargaleriaComponent } from './creargaleria.component';

describe('CreargaleriaComponent', () => {
  let component: CreargaleriaComponent;
  let fixture: ComponentFixture<CreargaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreargaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreargaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
