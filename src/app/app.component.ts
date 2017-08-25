import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  value = '';
  onEnter(value: string) { this.value = value; }

  
  letterCombos = function(input:string){

    var dict = {
     0: ['0'],
     1: ['1'],
     2: ['a', 'b', 'c'],
     3: ['d', 'e', 'f'],
     4: ['g', 'h', 'i'],
     5: ['j', 'k', 'l'],
     6: ['m', 'n', 'o'],
     7: ['p', 'q', 'r', 's'],
     8: ['t', 'u', 'v'],
     9: ['w', 'x', 'y', 'z'],
   };

   if(input.length === 0) {
     return [];
   } else if(input.length === 1) {
     return dict[input];
   } else {
    var front = dict[input.slice(0, 1)];
    var back = this.letterCombos(input.slice(1)); // jumps to second-to-last number in string
    var result:any = [];
    
    //concatenates combinations of two digit string, then three, then four, then up to n
    front.forEach( (f:any) => {
      back.forEach( (b:any) => {
        result.push(f + b);
      });
    });

    return result;
  };

 }
}
