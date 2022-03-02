import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor( private http: HttpClient ) { }

  getNoticias( parametros: any ):Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country='
     + parametros.pais + '&category=' + parametros.categoria + 
     '&apiKey=604f8605e7284b20858dd20175730f3b';
     return this.http.get( URL );
  }
  /* Para poder hacer las peticiones http, tenemos que importar un module con app.module.ts */
}
