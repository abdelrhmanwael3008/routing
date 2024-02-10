import { Component } from '@angular/core';

@Component({
  selector: 'app-serves',
  templateUrl: './serves.component.html',
  styleUrls: ['./serves.component.css']
})
export class ServesComponent {


  imgPath(myElement:HTMLDivElement):void{
    myElement.classList.add( "d-block" );
    myElement.classList.remove( "d-none" );
  }

  close( element:HTMLDivElement ){
    element.classList.add( "d-none" );
  }
  
}
