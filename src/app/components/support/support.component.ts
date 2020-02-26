import { Component, OnInit } from '@angular/core';
import { Support } from 'src/app/interface/support';
import { SupportService } from 'src/app/services/support/support.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  supports:Support[];
  constructor(public supportService:SupportService) {
    this.supports=this.supportService.getSupports();
   }

  ngOnInit() {
  }

}
