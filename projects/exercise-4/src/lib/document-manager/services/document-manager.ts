import { DocumentInterface, MyDocument } from '../models/document';
import { User } from '../models/user';

export class DocumentManager {
  private readonly documents: Record<number, DocumentInterface> = {
    1: new MyDocument(1, 'Document 1', 'Content 1', 1),
    2: new MyDocument(2, 'Document 2', 'Content 2', 2),
    3: new MyDocument(3, 'Document 3', 'Content 3', 3),
  };

  public getDocumentById(id: number, user: User): DocumentInterface {
    if (this.hasAccess(id, user)) {
      return this.documents[id];
    }
    throw new Error(`Access to doc ${id} denied`);
  }

  private hasAccess(documentId: number, user: User): boolean {
    return this.documents[documentId].accessLevel <= user.accessLevel;
  }
}
