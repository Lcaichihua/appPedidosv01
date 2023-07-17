import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoRegistradoComponent } from './producto-registrado.component';

describe('ProductoRegistradoComponent', () => {
  let component: ProductoRegistradoComponent;
  let fixture: ComponentFixture<ProductoRegistradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoRegistradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoRegistradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
