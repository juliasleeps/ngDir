import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBold]'
})
export class BoldDirective implements OnInit {
  @Input() appBold: number | string = '400';

  @HostListener('mouseover') onMouseover() {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', this.appBold)
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
  }
  @HostListener('mouseleave') onMouseleave() {
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'normal')
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'white')
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    console.log(this.el.nativeElement);

  }
}
