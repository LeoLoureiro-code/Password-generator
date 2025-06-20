import { Component } from '@angular/core';
import { GeneratorService } from '../../services/generator/generator.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  standalone: true,
})
export class CheckboxComponent {

  constructor(public generatorService: GeneratorService) {}

onUpperChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.generatorService.SetUpperCase = input.checked;
  console.log(this.generatorService.GetUpperCase);
}

onLowerChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.generatorService.SetLowerCase = input.checked;
  console.log(this.generatorService.GetLowerCase);
}

onNumbersChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.generatorService.SetNumbers = input.checked;
  console.log(this.generatorService.GetNumbers);
}

onSymbolsChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.generatorService.SetSymbols = input.checked;
  console.log(this.generatorService.GetSymbols);
}

}
