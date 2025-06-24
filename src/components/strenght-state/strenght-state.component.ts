import { Component } from '@angular/core';
import { GeneratorService } from '../../services/generator/generator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-strenght-state',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strenght-state.component.html',
  styleUrl: './strenght-state.component.scss'
})
export class StrenghtStateComponent {
  constructor(public generatorService: GeneratorService) {}

  get strength(): number {
    return this.generatorService.getStrengthLevel();
  }

  getBoxColor(position: number): string {
    if (this.strength >= position) {
      if (this.strength === 1) return 'box-red';
      if (this.strength === 4) return 'box-green';
      return 'box-yellow';
    }
    return 'box-empty';
  }
}
