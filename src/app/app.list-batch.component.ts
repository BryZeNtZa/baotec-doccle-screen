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

export interface DocumentInterface {
  id: number,
  nom: string;
  type: string;
  periode: string;
  libelle: string;
  statutEnvoi: string;
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

  const ELEMENT_DATA_DETAILS: DocumentInterface[] = [
    {id:11255, nom: 'Demandes Adhésion.docx', type:'Docx', periode: '01/06/2021-21/06/2021', libelle: 'Demandes Adhésion Association CFEHU', statutEnvoi:'Attente'},
    {id:2786, nom: 'Fiche Paie Brice NTSA 20-06-21.PDF', type:'PDF', periode: '01/06/2021-21/06/2021', libelle: 'Fiche Paie Brice NTSA 20 Juin 2021', statutEnvoi:'Envoyé'},
    {id:4593, nom: 'Fichier du personnel 2021', type:'XLS', periode: '01/01/2021-01/01/2022', libelle: 'Fichier du personnel année 2021', statutEnvoi:'Erreur'},
    {id:1445, nom: 'Panneau publicitaire Bruxelle 0129.jpg', type:'JPG', periode: '01/06/2021-21/06/2021', libelle: 'Panneau publicitaire campagne du 01/06/2021 au 21/06/2021', statutEnvoi:'Attente'},
    {id:6893, nom: 'Déclaration TVA 2è Trimestre BAOTEC 2021.xml', type:'XML', periode: '01/03/2021-01/06/2021', libelle: 'éclaration TVA 2è Trimestre BAOTEC 2021', statutEnvoi:'Attente'},
    {id:96774, nom: 'Dévis et Contrat Doccle.docx', type:'Docx', periode: '01/06/2021-21/07/2021', libelle: 'Dévis et Contrat Doccle', statutEnvoi:'Envoyé'},
    {id:755884, nom: 'Document Test.pdf', type:'PDF', periode: '01/06/2021-21/06/2021', libelle: 'Document Test', statutEnvoi:'Annulé'},
    {id:8889965, nom: 'Document sans nom.pdf', type:'PDF', periode: '01/06/2021-21/06/2021', libelle: 'Document sans nom', statutEnvoi:'Annulé'},
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


  displayedColumnsDetails: string[] = ['select', 'id', 'nom', 'type', 'periode', 'statutEnvoi'];
  dataSourceDetails = new MatTableDataSource<DocumentInterface>(ELEMENT_DATA_DETAILS);
  selectionDetails = new SelectionModel<DocumentInterface>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatPaginator)
  paginatorDetails!: MatPaginator;

  detailsLength : number

  initialized: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.detailsLength = ELEMENT_DATA_DETAILS.length;
  }
  
  ngAfterViewInit() {
    if(!this.initialized) {
      this.dataSource.paginator = this.paginator;
      this.dataSourceDetails.paginator = this.paginatorDetails;
      this.initialized = true;
    }

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


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelectedDetails() {
    const numSelected = this.selectionDetails.selected.length;
    const numRows = this.dataSourceDetails.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleDetails() {
    if (this.isAllSelectedDetails()) {
      this.selectionDetails.clear();
      return;
    }

    this.selectionDetails.select(...this.dataSourceDetails.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabelDetails(row?: DocumentInterface): string {
    if (!row) {
      return `${this.isAllSelectedDetails() ? 'deselect' : 'select'} all`;
    }
    return `${this.selectionDetails.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  editBatchItem() {

  }
  removeBatchItem() {

  }

  backToListBatch() {
    this.router.navigate(['/list-batch']);
  }
}
