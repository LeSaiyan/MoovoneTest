import { Component, OnInit } from '@angular/core';
import { AnimeServiceService } from './services/anime-service.service';
import { MatCardModule } from '@angular/material/card';
import Anime from './models/anime';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  animesTab: [];
  animeCount: number;
  constructor(private animeService: AnimeServiceService, public dialog: MatDialog) {
  }

  openDialog(item): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: item
    });
  }

  ngOnInit() {
      this.animeService.getAnimesList()
      .subscribe(animes => {
        this.animesTab = animes.results.map((anime) => {
          return anime;
        })
      });
  }
}
