import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  imports: [],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss'
})
export class CodeComponent {

  @Input({required: true}) codeContent!: string;
}
