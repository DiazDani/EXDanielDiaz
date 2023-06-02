import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-qatar',
  templateUrl: './qatar.component.html',
  styleUrls: ['./qatar.component.css']
})
export class QatarComponent {
  constructor(private http: HttpClient) {
    this.MetodePost();
    this.MetodeGET();
  }






  MetodePost(): void {
    const jugador = 'Messi';
    const url = 'http://localhost:3010/DaniDiaz/mvp/' + jugador;

    this.http.post(url, {}).subscribe(
      () => {
        console.log('funca');
      }
    );
  }

  MetodeGET(): void {
    const url = 'http://localhost:3010/DaniDiaz/jugadors';

    this.http.get(url).subscribe(
      (response: any) => {
        console.log('Jugador amb un sol gol:', response.jugador);
      }
    );
  }
}
