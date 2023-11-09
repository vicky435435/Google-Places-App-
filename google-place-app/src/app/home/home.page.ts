import { OnDestroy } from '@angular/core';
import { NgZone } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit , OnDestroy{
  
  places: any[] =[];
  query: string;


  constructor(private zone:NgZone ) {}

 
  ngOnInit(): void {
    
  }

  async onSearchChange(event:any){
      console.log(event);
      this.query = event.details.value;
      if(this.query.length > 0) await this.getPlaces();
  }

  async getPlaces(){
    try{
      let services = new google.maps.places.AutocompleteService();
      services.getPlacePredictions({
        input: this.query,
      }, (prediction)=>{
        let autoCompleteItems = [];
        this.zone.run(()=>{
          
        })
      })

    } catch (e){

    }
  }

  ngOnDestroy(): void {
   
  }

}
