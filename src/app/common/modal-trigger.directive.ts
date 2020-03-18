import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jquery';
import $ from 'jquery' ;
declare var $:$;

@Directive({
  selector: '[appModalTrigger]',
})

export class ModalTriggerDirective implements OnInit {
  @Input('appModalTrigger') modalId: string;

  element: HTMLElement; // The element the directive is on
  constructor(elementRef: ElementRef/* , @Inject(JQ_TOKEN) private $: any */) {
this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    this.element.addEventListener('click', e => {
      console.log($);
      $(`#${this.modalId}`).modal({}); }
    );

    /* $(this.element).on('click', () => {
      console.log('Heyy')
      $(`#${this.modalId}`).modal('toggle')
    }); */

  }
}
