import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.page.html',
  styleUrls: ['./explore-container.page.scss'],
})
export class ExploreContainerPage implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
