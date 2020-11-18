import { ParteDetailsComponent } from 'src/app/Components/parte-details/parte-details.component';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Parte } from 'src/app/Models/parte';
import { ParteService } from 'src/app/Services/parte.service';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-parte-list",
  templateUrl: "./parte-list.component.html",
  styleUrls: ["./parte-list.component.scss"]
})
export class ParteListComponent implements OnInit {
 // partes: Parte[];
  partes: Observable<Parte[]>;

  constructor(private parteService: ParteService, private router: Router) {

  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData()
  {
    this.partes = this.parteService.getPartesList();
    console.log(this.partes);
  }


  error(error){
    //1this.servicioAvisos.showMenssage("Se ha producido un error", 'Error');
     console.log("Error");
  }
/*
  deleteParte(id: number) {
    this.parteService.deleteParte(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
*/
  parteDetails(id: number){
    this.router.navigate(['details', id]);
  }
}
