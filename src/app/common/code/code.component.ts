import { Component, Input } from '@angular/core';
import { PrismJsHighlighterDirective } from './prismjs.directive';
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-java";

@Component({
  selector: 'app-code',
  imports: [PrismJsHighlighterDirective],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class CodeComponent {

  @Input({ required: true }) codeContent!: string;
  @Input({ required: true }) contentType!: string;
  isCodeCopied: boolean = false;

  copyCodeToClipboard() {

    navigator.clipboard.writeText(this.codeContent).then(() => {
      this.isCodeCopied = true;

      //async function to reset the copy icon after 2 seconds.
      setTimeout(() => this.isCodeCopied = false, 2000);
    }
    );
  }
}
