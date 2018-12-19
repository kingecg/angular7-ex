import { Directive, ElementRef, AfterViewInit, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cgDrag]'
})
export class CgDragDirective implements AfterViewInit {
  ngAfterViewInit(): void {
  // this.el.nativeElement
  }
  @Input() cgDragData:any

  @HostBinding('draggable')
  draggable:boolean = true

  @HostListener('dragStart',['$event'])
  onDragStart(event:DragEvent){
    event.dataTransfer.setData('text','111')
  }
  constructor(private el:ElementRef) { }

}
