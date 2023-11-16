// gallery-list.component.ts
import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})
export class GalleryListComponent implements OnInit {
  albums: any[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.loadAlbums();
  }

  private loadAlbums() {
    this.galleryService.getAlbums().subscribe(
      (albums) => {
        this.albums = albums;
      },
      (error) => {
        console.error('Error loading albums:', error);
      }
    );
  }

  getThumbnailUrl(albumId: number): string {
    return `https://via.placeholder.com/150?text=Album+${albumId}`;
  }
}
