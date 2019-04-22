import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  //paises: any[] = [];
  nuevasCanciones:any[] = [];
  loading: boolean;
  error: boolean = false;
  mensajeError: string;

  constructor(private spotify: SpotifyService) { 
    // private http:HttpClient como parametro
    // console.log('Constructor hecho');
    //this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //  .subscribe((paises:any[]) => {
    //    this.paises = paises;
    //    console.log(paises);
    //  });
    this.loading = true;
    this.spotify.getNewReleases()
      .subscribe(data =>{
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      },(errorServicio)=>{
        this.mensajeError = errorServicio.error.error.message;
        this.error=true;
      });
  }

  ngOnInit() {
  }

}
