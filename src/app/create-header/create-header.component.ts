import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-create-header',
  templateUrl: './create-header.component.html',
  styleUrls: ['./create-header.component.scss']
})
export class CreateHeaderComponent implements OnInit {

  createHeaderForm: FormGroup = new FormGroup({
    curso: new FormControl('', Validators.required),
    ano: new FormControl('', {
      validators: [Validators.required],
    }),
    turma: new FormControl('')
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buttonClick() {    
    const params: NavigationExtras = { queryParams: { 
      curso: this.createHeaderForm.get('curso').value, 
      ano: this.createHeaderForm.get('ano').value, 
      turma: this.createHeaderForm.get('turma').value 
    }};
    this.router.navigate(['header-image'], params);
  }

}
