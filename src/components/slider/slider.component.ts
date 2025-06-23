import { Component } from '@angular/core';
import { GeneratorService } from '../../services/generator/generator.service';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  sliderValue: number = 4;

  constructor(private generatorService: GeneratorService){

  }

  changeSlider(event: Event){
    const slider = event.target as HTMLInputElement;
    this.generatorService.SetPasswordLength = Number(slider.value);
    this.sliderValue = Number(slider.value);
  }
}
