import { Component, OnInit } from '@angular/core';
import { StateService } from '../../shared/services/state.service';
import { Label } from '../../shared/models/label.model';

@Component({
  selector: 'app-switch-page',
  templateUrl: './switch-page.component.html',
  styleUrls: ['./switch-page.component.scss']
})
export class SwitchPageComponent implements OnInit {

  allLabels: Label[] = [];
  statusOn = false;

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.allLabels = this.stateService.getAllLabels();
  }

}
