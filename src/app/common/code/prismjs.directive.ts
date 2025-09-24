import { AfterViewInit, Directive, ElementRef } from "@angular/core";
import prism from "prismjs";

@Directive({

    selector: '[appPrismHighliter]',
    standalone: true
})
export class PrismJsHighlighterDirective implements AfterViewInit{

    constructor(private codeElement: ElementRef){}

    ngAfterViewInit(): void {
        
        prism.highlightElement(this.codeElement.nativeElement);
    }


}