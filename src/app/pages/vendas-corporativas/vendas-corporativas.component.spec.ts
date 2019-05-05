import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendasCorporativasComponent } from './vendas-corporativas.component';

describe('VendasCorporativasComponent', () => {
  let component: VendasCorporativasComponent;
  let fixture: ComponentFixture<VendasCorporativasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendasCorporativasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendasCorporativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
