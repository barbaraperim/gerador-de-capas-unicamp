import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.component.html',
  styleUrls: ['./header-image.component.scss']
})
export class HeaderImageComponent implements OnInit, AfterViewInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }
  curso: string;
  ano: string;
  turma: string;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.curso = params.curso;
      this.ano = params.ano;
      this.turma = params.turma;
    });
  }

  downloadClick() {
      htmlToImage.toJpeg(document.getElementById('header-image-container'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
      });
  }

  voltarClick() {
    this.router.navigate(['']);
  }

}
