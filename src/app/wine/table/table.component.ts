import { Component, OnInit, Input } from '@angular/core';
import { Wine } from "../model/wine.model"

@Component({
  selector: 'wc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() wines: Wine[] 
  // polje wines je sada (kad sam stavio @Input ispred) postao Input za ovu komponentu (table).
  constructor() { }

  ngOnInit(): void {
  }

}
