import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SendDocumentsDialogComponent} from './send-documents-dialog.component';

export interface BatchInterface {
  id: number;
  type: string;
  dateEnvoi: string;
  statut: string;
  nomFichier: string;
}

const ELEMENT_DATA: BatchInterface[] = [
    {id:11255, nomFichier: 'Demandes Adhésion.docx', type:'Document', dateEnvoi: '01/06/2021-21/06/2021', statut:'En cours de traiment'},
    {id:2786, nomFichier: 'Fiche Paie Brice NTSA 20-06-21.PDF', type:'Receiver', dateEnvoi: '01/06/2021-21/06/2021', statut:'Succès'},
    {id:4593, nomFichier: 'Fichier du personnel 2021', type:'Document', dateEnvoi: '01/01/2021-01/01/2022', statut:'Succès'},
    {id:1445, nomFichier: 'Panneau publicitaire Bruxelle 0129.jpg', type:'Receiver', dateEnvoi: '01/06/2021-21/06/2021', statut:'En cours de traiment'},
    {id:6893, nomFichier: 'Déclaration TVA 2è Trimestre BAOTEC 2021.xml', type:'Receiver', dateEnvoi: '01/03/2021-01/06/2021', statut:'Annulé'},
    {id:96774, nomFichier: 'Dévis et Contrat Doccle.docx', type:'Receiver', dateEnvoi: '01/06/2021-21/07/2021', statut:'Annulé'},
    {id:755884, nomFichier: 'Document Test.pdf', type:'PDF', dateEnvoi: '01/06/2021-21/06/2021', statut:'Annulé'},
    {id:8889965, nomFichier: 'Document sans nom.pdf', type:'PDF', dateEnvoi: '01/06/2021-21/06/2021', statut:'Annulé'},
  ];
@Component({
  selector: 'list-batch',
  templateUrl: './app.list-batch.component.html',
})
export class ListBatchComponent implements AfterViewInit {
  title = 'baotec-doccle-screens';

  displayedColumns: string[] = ['select', 'id', 'type', 'dateEnvoi', 'statut', 'nomFichier'];
  dataSource = new MatTableDataSource<BatchInterface>(ELEMENT_DATA);
  selection = new SelectionModel<BatchInterface>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: BatchInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


detailsBatch() {
    this.router.navigate(['/details-batch']);
}

addBatch() {
    
}

deleteBatch() {
    
}
}
