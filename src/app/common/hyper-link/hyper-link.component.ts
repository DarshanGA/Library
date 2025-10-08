import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hyper-link',
  imports: [],
  templateUrl: './hyper-link.component.html'
})
export class HyperLinkComponent {

  @Input({required: true}) link!: string;
  @Input({required: true}) linkText!: string;

  openLink(){

    window.open(this.link, '_blank');
  }
}
