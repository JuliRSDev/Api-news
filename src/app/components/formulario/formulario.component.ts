import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  /* Vamos a pasar datos de aquí(componente hijo) al componente padre */
  @Output() parametrosSeleccionados = new EventEmitter<any>();  
  /* =========== */

  categoriaSeleccionada = 'general';
  paisSeleccionada = 'co';

  categorias: any[] = [
    { value:'general', nombre:'General' },
    { value:'business', nombre:'Negocios' },
    { value:'entertainment', nombre:'Entretenimiento' },
    { value:'health', nombre:'Salud' },
    { value:'science', nombre:'Ciencia' },
    { value:'sports', nombre:'Deportes' },
    { value:'technology', nombre:'Tecnología' }
  ];

  paises: any[] = [
    { value: 'co', nombre: 'Colombia' },
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'gb', nombre: 'Reino Unido' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    /* creamos el objeto */
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionada
    }

    /* Vamos a emitir ese valor hacia el componete padre */
    this.parametrosSeleccionados.emit( PARAMETROS );
  }

}
