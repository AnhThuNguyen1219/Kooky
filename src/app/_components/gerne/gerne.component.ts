import { Component, OnInit } from '@angular/core';
import { GerneService } from 'src/app/_service/gerne.service';
import { Observable } from 'rxjs';
import { Food } from 'src/app/_entities/food';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gerne',
  templateUrl: './gerne.component.html',
  styleUrls: ['./gerne.component.css']
})
export class GerneComponent implements OnInit {
  foods:Food[];
  constructor(private genreService:GerneService, private route:ActivatedRoute,
    private location:Location) { }
  
  ngOnInit() {
    this.getFoodByGerne();
  }
  getFoodByGerne()
  {
    const id= +this.route.snapshot.paramMap.get('id');
  }
}
