import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomNgIf]'
})
export class CustomNgIfDirective implements OnChanges {

  @Input() appCustomNgIf = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['appCustomNgIf']) {
      if (this.appCustomNgIf) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.remove();
      }
    }
  }

}
