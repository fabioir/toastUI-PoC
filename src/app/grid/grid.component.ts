import { Component, OnInit } from '@angular/core';

import Grid from 'tui-grid';
import { timeout } from '../../../node_modules/@types/q';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  instance;

  constructor() { }

  ngOnInit() {


    this.instance = new Grid({
      el: ('#grid'), // Container element
      columns: [
        {
          title: 'Name',
          name: 'name'
        },
        {
          title: 'Artist',
          name: 'artist'
        },
        {
          title: 'Release',
          name: 'release'
        },
        {
          title: 'Genre',
          name: 'genre'
        },
        {
          title: 'Name',
          name: 'name'
        },
        {
          title: 'Artist',
          name: 'artist'
        },
        {
          title: 'Release',
          name: 'release'
        },
        {
          title: 'Genre',
          name: 'genre'
        },
        {
          title: 'Name',
          name: 'name'
        },
        {
          title: 'Artist',
          name: 'artist'
        },
        {
          title: 'Release',
          name: 'release'
        },
        {
          title: 'Genre',
          name: 'genre'
        },
        {
          title: 'Name',
          name: 'name'
        },
        {
          title: 'Artist',
          name: 'artist'
        },
        {
          title: 'Release',
          name: 'release'
        },
        {
          title: 'Genre',
          name: 'genre'
        }
      ],
      data: [
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        },
        {
          name: 'Beautiful Lies',
          artist: 'Birdy',
          release: '2016.03.26',
          genre: 'Pop'
        }
      ]
    });

    Grid.applyTheme('striped');

    console.log(this.instance)
  }

}
