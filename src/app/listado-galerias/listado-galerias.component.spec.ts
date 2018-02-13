import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoGaleriasComponent } from './listado-galerias.component';

describe('ListadoGaleriasComponent', () => {
  let component: ListadoGaleriasComponent;
  let fixture: ComponentFixture<ListadoGaleriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoGaleriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoGaleriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
