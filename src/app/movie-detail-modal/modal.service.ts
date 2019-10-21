import { Injectable } from '@angular/core';

export class ModalService {
  modalId: string;
  show = false;
  movie: Object;

  // Show Modal
  showModal() {
    this.show = !this.show;
  }
  hideModal() {
    this.show = false;
  }
}
