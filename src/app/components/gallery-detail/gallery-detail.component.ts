import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.scss'],
})
export class GalleryDetailComponent implements OnInit {
  albumId!: number;
  photos: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.albumId = +params.id;
      this.loadPhotos();
      console.log(this.albumId);
      console.log(this.photos);
    });
  }

  loadPhotos() {
    this.galleryService.getPhotos(this.albumId, 10).subscribe((photos) => {
      this.photos = photos;
    });
  }
}
