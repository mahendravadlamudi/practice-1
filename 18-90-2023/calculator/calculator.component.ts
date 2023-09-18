import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})


export class CalculatorComponent implements OnInit {
  calculatorComponent: any;

  constructor() { }

  ngOnInit(): void {
  }

  // calculate() {
   
  //   let screen = document.querySelector('.screen');
  //   let buttons = document.querySelectorAll('.btn');
  //   let clear = document.querySelector('.btn-clear');
  //   let equal = document.querySelector('.btn-equal');
  
  //   buttons.forEach(this.calculatorComponent.calculate(buttons)); 
  //     buttons = this.addEventListener('click', this.calculate(e) {
  //        let value = e.target.dataset.num,
  //        screen.value += values,
  //     });
    
  
  //   equal.addEventListener('click', this.calculate(e){
  //     if(screen.value === ''){
  //       screen.value = '';
  //     }else{
  //       let answer = eval(screen.value);
  //       screen.value = answer;
  //     }
  //   })
  
  //   clear.addEventListener('click', calculate(e){
  //     screen.value = '';
  //   })
  
  // };
}
