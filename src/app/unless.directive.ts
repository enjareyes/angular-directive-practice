import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
	@Input() set appUnless(condition: boolean) {
		if (!condition) {
			// display view
			this.vcRef.createEmbeddedView(this.templateRef);
		} else {
			// display nothing
			this.vcRef.clear();
		}
	}

	constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
		//
	}

}
