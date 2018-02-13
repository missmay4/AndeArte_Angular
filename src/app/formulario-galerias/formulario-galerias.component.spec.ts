import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioGaleriasComponent } from './formulario-galerias.component';

describe('FormularioGaleriasComponent', () => {
  let component: FormularioGaleriasComponent;
  let fixture: ComponentFixture<FormularioGaleriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioGaleriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioGaleriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
