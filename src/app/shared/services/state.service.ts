import { Injectable } from '@angular/core';
import {Label} from '../models/label.model';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  labels: Label[];

  constructor() {
    this.labels = [
      {
        id: '0001',
        status: false,
      },
      {
        id: '0002',
        status: true,
      },
      {
        id: '0003',
        status: false,
      }
    ]
  }

  getAllLabels(): Label[] {
    return this.labels;
  }
}
