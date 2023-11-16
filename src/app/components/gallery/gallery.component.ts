import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  albums: any[] = [];

  constructor(
    private galleryService: GalleryService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getAlbums();
  }

  onLogout(): void {
    this.authService.logout();
  }

  getAlbums() {
    this.galleryService.getAlbums().subscribe(
      (data) => {
        this.albums = data;
        console.log('Álbuns:', this.albums);
      },
      (error) => {
        console.error('Erro ao obter álbuns:', error);
      }
    );
  }
}
