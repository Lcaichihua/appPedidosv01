import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-registro',
  templateUrl: './producto-registro.component.html',
  styleUrls: ['./producto-registro.component.css']
})
export class ProductoRegistroComponent implements OnInit {

  frmRegistro!:FormGroup;
  constructor(private productoService:ProductoService,
              private formBuilder:FormBuilder
         ) { 

         }

  ngOnInit(): void {
    this.frmRegistro=this.formBuilder.group(
      {
        nombre:['',[Validators.required,
                   Validators.minLength(10),
                   Validators.maxLength(40)
                    ]
               ],
        precio:['',[Validators.required,
                Validators.minLength(1),
                Validators.maxLength(100000)
                 ]
            ],       
        stock:['',[Validators.required,
              Validators.minLength(0)
               ]
          ]
      }
    );
  }
  registrar(){
    //producto=null;
    this.productoService.registrar(null).subscribe(
      {
        next:(res)=>{
          console.log(res)
        },
        error:()=>{
          console.log('Error al listar productos')
        }
      }
    )
      }


}
