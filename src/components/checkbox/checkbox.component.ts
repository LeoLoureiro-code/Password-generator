import { Component } from '@angular/core';
import { GeneratorService } from '../../services/generator/generator.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent {

  constructor(private generatorService: GeneratorService) {}

  setUpper(value: boolean) {
    this.generatorService.SetUpperCase = value;
  }

  setLower(value: boolean) {
    this.generatorService.SetLowerCase = value;
  }

  setNumbers(value: boolean) {
    this.generatorService.SetNumbers = value;
  }

  setSymbols(value: boolean) {
    this.generatorService.SetSymbols = value;
  }
}
