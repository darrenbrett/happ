import { Component, OnInit } from '@angular/core';
// import { Album } from '../album';

@Component({
  moduleId: module.id,
  selector: 'app-album-list',
  templateUrl: 'album-list.component.html',
  styleUrls: ['album-list.component.css']
})
export class AlbumListComponent implements OnInit {

 // album: Album[] = [];
  albumId: number;

  constructor() {}

  ngOnInit() {
  }

}
