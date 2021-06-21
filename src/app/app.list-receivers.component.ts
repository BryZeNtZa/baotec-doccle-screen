import {AfterViewInit, Component, ViewChild, Input} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {SendDocumentsDialogComponent} from './send-documents-dialog.component';

export interface ReceiverInterface {
  position: number;
  numero: string;
  nom: string;
  prenom: string;
  niss: string;
  email: string;
  langue: string;
  dateact: string;
}

const ELEMENT_DATA: ReceiverInterface[] = [
  {position: 1, numero:'00001', nom: 'Peeters', prenom: 'Brice', niss:'', email:'brice.peters@baotec.com', langue:'Français', dateact:'18/06/2021'},
  {position: 2, numero:'00002', nom: 'Janssens', prenom: 'Joel', niss:'', email:'joel.janssens@doccle.com', langue:'Français', dateact:'18/06/2021'},
  {position: 3, numero:'00003', nom: 'Maes', prenom: 'Christelle', niss:'', email:'chrsitelle.maes@doccle.com', langue:'Anglais', dateact:'18/06/2021'},
  {position: 4, numero:'00004', nom: 'Jacobs', prenom: 'Berthold', niss:'', email:'brice.jacobs@doccle.com', langue:'Français', dateact:'18/06/2021'},
  {position: 5, numero:'00005', nom: 'Mertens', prenom: 'Yvan', niss:'', email:'yvan.mertens@kps-it.com', langue:'Anglais', dateact:'18/06/2021'},
  {position: 6, numero:'00006', nom: 'Willems', prenom: 'Guy', niss:'', email:'guy.willems@baotec.com', langue:'Français', dateact:'18/06/2021'},
  {position: 7, numero:'00007', nom: 'Claes', prenom: 'Sévérin', niss:'', email:'severin.claes@kps-it.com', langue:'Français', dateact:'18/06/2021'},
  {position: 8, numero:'00008', nom: 'Goossens', prenom: 'Joel', niss:'', email:'joel.goossens@doccle.com', langue:'Français', dateact:'18/06/2021'},
  {position: 9, numero:'00009', nom: 'Wouters', prenom: 'Luis', niss:'', email:'wouters@kps-it.com', langue:'Français', dateact:'18/06/2021'},
  {position: 10, numero:'00010', nom: 'De Smet', prenom: 'Karele', niss:'', email:'de.smet@gmail.com', langue:'Français', dateact:'18/06/2021'},
  {position: 11, numero:'00011', nom: 'Leclercq', prenom: 'Judicael', niss:'', email:'leclercq@gmail.com', langue:'Français', dateact:'18/06/2021'},
  {position: 12, numero:'00012', nom: 'Renard', prenom: 'Marthe', niss:'', email:'renard@yahoo.com', langue:'Français', dateact:'18/06/2021'},
];

@Component({
  selector: 'list-receivers',
  templateUrl: './app.list-receivers.component.html',
})
export class ListReceiversComponent implements AfterViewInit {
  title = 'baotec-doccle-screens';

  displayedColumns: string[] = ['select', 'position', 'numero', 'nom', 'prenom', 'niss', 'email', 'langue', 'dateact'];
  dataSource = new MatTableDataSource<ReceiverInterface>(ELEMENT_DATA);
  selection = new SelectionModel<ReceiverInterface>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  /**
   * Check if title should be display
   */
  @Input()
  displayTitle: boolean = true;

  /**
   * Check if title should be display
   */
  @Input()
  displaySendDocBtn: boolean = true;

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
  checkboxLabel(row?: ReceiverInterface): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  addReceiver() {
    this.router.navigate(['/add-receiver']);
  }

  deleteReceiver() {}

  openDocumentSender() {
      const dialogRef = this.dialog.open(SendDocumentsDialogComponent, {
        width: '100%',
        minHeight: 'calc(100vh - 90px)',
        height : 'auto'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  }
}
