import {AfterViewInit, Component, ViewChild} from '@angular/core';
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
  {position: 1, numero:'00001', nom: 'NTSA', prenom: 'Brice', niss:'', email:'brice.ntsa@kps-it.com', langue:'Français', dateact:'18/06/2021'},
  {position: 2, numero:'00002', nom: 'CHINDA', prenom: 'Joel', niss:'', email:'joel.chinda@kps-it.com', langue:'Français', dateact:'18/06/2021'},
  {position: 3, numero:'00003', nom: 'MAMEKEM', prenom: 'Christelle', niss:'', email:'chrsitelle.mamekem@kps-it.com', langue:'Anglais', dateact:'18/06/2021'},
  {position: 4, numero:'00004', nom: 'NGOUMA', prenom: 'Berthold', niss:'', email:'brice.ntsa@kps-it.com', langue:'Français', dateact:'18/06/2021'},
  {position: 5, numero:'00005', nom: 'KOMBOU', prenom: 'Yvan', niss:'', email:'yvan.kombou@kps-it.com', langue:'Anglais', dateact:'18/06/2021'},
  {position: 6, numero:'00006', nom: 'FOKOU', prenom: 'Guy', niss:'', email:'guy.fokou@baotec.com', langue:'Français', dateact:'18/06/2021'},
  {position: 7, numero:'00007', nom: 'LONTSI', prenom: 'Sévérin', niss:'', email:'severin.lontsi@kps-it.com', langue:'Français', dateact:'18/06/2021'},
  {position: 8, numero:'00008', nom: 'OSSONGO', prenom: 'Joel', niss:'', email:'joel.ossongo@kps-it.com', langue:'Français', dateact:'18/06/2021'},
  {position: 9, numero:'00009', nom: 'MFEG', prenom: 'Luis', niss:'', email:'luis.mfeg@kps-it.com', langue:'Français', dateact:'18/06/2021'},
  {position: 10, numero:'00010', nom: 'NTSA', prenom: 'Karele', niss:'', email:'karele.ntsa@gmail.com', langue:'Français', dateact:'18/06/2021'},
  {position: 11, numero:'00011', nom: 'EBA', prenom: 'Judicael', niss:'', email:'ebajudicael@gmail.com', langue:'Français', dateact:'18/06/2021'},
  {position: 12, numero:'00012', nom: 'BIBI', prenom: 'Marthe', niss:'', email:'marthebi1254@yahoo.com', langue:'Français', dateact:'18/06/2021'},
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
