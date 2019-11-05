import {
	Directive,
	Renderer2,
	OnInit,
	ElementRef,
	HostListener,
	HostBinding,
	Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	@Input() defaultColor: string = 'transparent';
	@Input() highlightColor: string = 'lightblue';

	// On the dom element where this directive sits access the style property and backgroundColor sub-property
	@HostBinding('style.backgroundColor') backgroundColor: string;

	constructor(private elRef: ElementRef, private renderer: Renderer2) { }

	ngOnInit() {
		// Renderer is a better approach than basic-highlight because
		// Angular is not limited to running in the browser. It also works w/ service workers

		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue')
		this.backgroundColor = this.defaultColor;
	}

	// listen to events on an element
	@HostListener('mouseenter') mouseover(eventData: Event) {
		// change background color on hover
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightblue')
		this.backgroundColor = this.highlightColor;
	}

	@HostListener('mouseleave') mouseleave(eventData: Event) {
		// this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
		this.backgroundColor = this.defaultColor;
	}

}
