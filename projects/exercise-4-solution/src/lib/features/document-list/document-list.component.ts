import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { DocumentInterface } from '../../models/document';

@Component({
  selector: 'lib-document-list',
  standalone: true,
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
  ],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.scss',
})
export class DocumentListComponent {
  @Input() documents!: DocumentInterface[];
  @Output() onRead: EventEmitter<DocumentInterface> = new EventEmitter();
  displayedColumns: string[] = ['id', 'name', 'action'];

  // protected readonly document = document;

  protected read(document: DocumentInterface) {
    this.onRead.emit(document);
  }
}
