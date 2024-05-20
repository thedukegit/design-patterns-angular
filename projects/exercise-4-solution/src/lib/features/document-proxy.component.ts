import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { DocumentInterface } from '../models/document';
import { DocumentProxy } from '../models/document.proxy';
import { DocumentListComponent } from './document-list/document-list.component';

@Component({
  selector: 'lib-document-proxy',
  standalone: true,
  imports: [MatButton, MatCard, MatCardContent, DocumentListComponent],
  templateUrl: './document-proxy.component.html',
  styleUrl: './document-proxy.component.scss',
})
export class DocumentProxyComponent {
  @Input() documents!: DocumentInterface[];
  @Output() onRead: EventEmitter<DocumentInterface> = new EventEmitter();

  private readonly documentProxy: DocumentProxy = inject(DocumentProxy);

  protected read(document: DocumentInterface) {
    this.documentProxy.setDocument(document);
    this.onRead.emit(this.documentProxy);
  }
}
