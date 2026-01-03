import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesasPedidosComponent } from './mesas-pedidos.component';

describe('MesasPedidosComponent', () => {
  let component: MesasPedidosComponent;
  let fixture: ComponentFixture<MesasPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesasPedidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesasPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
