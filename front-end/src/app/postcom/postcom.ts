import { Component } from '@angular/core';
import { Data, Postser } from '../postser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-postcom',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './postcom.html',
  styleUrl: './postcom.css',
})
export class Postcom {
  datas:Data[] = []
  constructor(private postser:Postser){}

  ngOnInit():void{
    this.postser.getData().subscribe((val) =>{
      this.datas = val
    })
  }

  new_data:Partial<Data> = { Name:"", Age:18};
  submitData(){
    this.postser.postDta(this.new_data).subscribe((val) => {
      this.datas.unshift(val);
      this.new_data = { Name:"", Age:18};
    })
  }
}
