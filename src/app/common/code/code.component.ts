import { Component, Input } from '@angular/core';
import { PrismJsHighlighterDirective } from './prismjs.directive';
import "prismjs/components/prism-typescript";

@Component({
  selector: 'app-code',
  imports: [PrismJsHighlighterDirective],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class CodeComponent {

  @Input({required: true}) codeContent!: string;
  @Input({required: true}) contentType!: string;
}
