import { Component, Input } from '@angular/core';
import { PrismJsHighlighterDirective } from './prismjs.directive';

@Component({
  selector: 'app-code',
  imports: [PrismJsHighlighterDirective],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class CodeComponent {

  @Input({required: true}) codeContent!: string;
}
