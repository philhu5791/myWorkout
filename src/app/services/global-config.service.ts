import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  isDemo: boolean;
  isAutoPlay: boolean;

  constructor() { }
}
