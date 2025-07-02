import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vino } from './lista-vinos/Vino';
import { Observable } from 'rxjs';

const URL = 'https://68500da9e7c42cfd17972d0f.mockapi.io/vinos'

@Injectable({
  providedIn: 'root'
})
export class VinoDataService {

  constructor(private http: HttpClient) { }

  public obtenerVinos(): Observable<Vino[]> {
    return this.http.get<Vino[]>(URL);
  }

  public crearVino(vino: Vino): Observable<Vino> {
    return this.http.post<Vino>(URL, vino);
  }

  public actualizarVino(id: string, vino: Omit<Vino, 'cantidad'>): Observable<Vino> {
    return this.http.put<Vino>(`${URL}/${id}`, vino);
  }

  public eliminarVino(id: string): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }

}
