import { Directive,OnInit,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRend]'
})
export class RendDirective implements OnInit{

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  }
}
