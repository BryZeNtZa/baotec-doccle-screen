import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';

export interface DocumentInterface {
  id: number,
  nom: string;
  type: string;
  periode: string;
  libelle: string;
  statutEnvoi: string;
}

const ELEMENT_DATA: DocumentInterface[] = [
  {id:11255, nom: 'Demandes Adhésion.docx', type:'Docx', periode: '01/06/2021-21/06/2021', libelle: 'Demandes Adhésion Association CFEHU', statutEnvoi:'Attente'},
  {id:2786, nom: 'Fiche Paie Brice NTSA 20-06-21.PDF', type:'PDF', periode: '01/06/2021-21/06/2021', libelle: 'Fiche Paie Brice NTSA 20 Juin 2021', statutEnvoi:'Envoyé'},
  {id:4593, nom: 'Fichier du personnel 2021', type:'XLS', periode: '01/01/2021-01/01/2022', libelle: 'Fichier du personnel année 2021', statutEnvoi:'Envoyé'},
  {id:1445, nom: 'Panneau publicitaire Bruxelle 0129.jpg', type:'JPG', periode: '01/06/2021-21/06/2021', libelle: 'Panneau publicitaire campagne du 01/06/2021 au 21/06/2021', statutEnvoi:'Attente'},
  {id:6893, nom: 'Déclaration TVA 2è Trimestre BAOTEC 2021.xml', type:'XML', periode: '01/03/2021-01/06/2021', libelle: 'éclaration TVA 2è Trimestre BAOTEC 2021', statutEnvoi:'Attente'},
  {id:96774, nom: 'Dévis et Contrat Doccle.docx', type:'Docx', periode: '01/06/2021-21/07/2021', libelle: 'Dévis et Contrat Doccle', statutEnvoi:'Envoyé'},
  {id:755884, nom: 'Document Test.pdf', type:'PDF', periode: '01/06/2021-21/06/2021', libelle: 'Document Test', statutEnvoi:'Annulé'},
  {id:8889965, nom: 'Document sans nom.pdf', type:'PDF', periode: '01/06/2021-21/06/2021', libelle: 'Document sans nom', statutEnvoi:'Annulé'},
];

@Component({
    selector: 'details-batch',
    templateUrl: './app.details-batch.component.html',
})
export class DetailsBatchComponent {

  displayedColumns: string[] = ['select', 'id', 'nom', 'type', 'periode', 'statutEnvoi'];
  dataSource = new MatTableDataSource<DocumentInterface>(ELEMENT_DATA);
  selection = new SelectionModel<DocumentInterface>(true, []);

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
  checkboxLabel(row?: DocumentInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  editBatchItem() {

  }
  removeBatchItem() {

  }

  backToListBatch() {
    this.router.navigate(['/list-batch']);
  }

}