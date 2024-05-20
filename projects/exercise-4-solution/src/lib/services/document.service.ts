import { DocumentInterface, MyDocument } from '../models/document';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  private selectedDocument?: DocumentInterface;

  public getDocuments(): MyDocument[] {
    return [
      new MyDocument(1, 'Document_1', 'Content 1'),
      new MyDocument(2, 'Document_2', 'Content 2'),
    ];
  }

  public setSelectedDocument(document: DocumentInterface): void {
    this.selectedDocument = document;
  }

  public getSelectedDocument(): DocumentInterface {
    if (this.selectedDocument) return this.selectedDocument;
    throw new Error('No document selected');
  }
}
