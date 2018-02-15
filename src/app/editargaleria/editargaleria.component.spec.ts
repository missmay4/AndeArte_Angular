import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditargaleriaComponent } from './editargaleria.component';

describe('EditargaleriaComponent', () => {
  let component: EditargaleriaComponent;
  let fixture: ComponentFixture<EditargaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditargaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditargaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
