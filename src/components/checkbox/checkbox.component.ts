import { Component } from '@angular/core';
import { GeneratorService } from '../../services/generator/generator.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone: true,
})
export class CheckboxComponent {

  constructor(public generatorService: GeneratorService) {}

onUpperChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.generatorService.SetUpperCase = input.checked;
}

onLowerChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.generatorService.SetLowerCase = input.checked;
}

onNumbersChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.generatorService.SetNumbers = input.checked;
}

onSymbolsChange(event: Event): void {
  const input = event.target as HTMLInputElement;
  this.generatorService.SetSymbols = input.checked;
}

}
