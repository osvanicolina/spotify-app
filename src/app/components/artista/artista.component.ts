import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent{
  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;
  
  constructor(private activateRoute: ActivatedRoute,
              private spotify: SpotifyService) {
    this.activateRoute.params.subscribe( params=>{
      this.getArtista(params['id']);
      this.loading = true;
      this.getTopTracks(params['id']);
    })
   }

   getArtista(id: string){
     this.spotify.getArtista(id)
           .subscribe(artista=>{
              console.log(artista);
              this.artista = artista;
              this.loading = false;
           });
   }

   getTopTracks(id: string){
    this.spotify.getTopTrack(id)
      .subscribe(topTracks=>{
        console.log(topTracks);
        this.topTracks = topTracks;
      });
   }


}
