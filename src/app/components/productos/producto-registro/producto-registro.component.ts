import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html',
  styleUrls: ['./producto-registro.component.css'],
})
export class ProductoRegistroComponent implements OnInit {
  frmRegistro!: FormGroup;
  constructor(
    private productoService: ProductoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.frmRegistro = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(40),
        ],
      ],
      precio: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(100000),
        ],
      ],
      stock: ['', [Validators.required, Validators.minLength(0)]],
    });
  }
  registrar() {
    const nombre = this.f['nombre'].value;
    const precio = this.frmRegistro.controls['precio'].value;
    const stock = this.f['stock'].value;

    const producto: Producto = {
      nombre: nombre,
      precio: precio,
      stock: stock,
      estado: '1',
    };
    console.log(producto);

    this.productoService.registrar(producto).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {
        console.log('Error al registrar producto');
      },
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.frmRegistro.controls;
  }
}
