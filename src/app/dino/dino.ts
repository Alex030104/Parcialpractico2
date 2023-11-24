export class Dino {
  id: number;
 name: string;
 scientificName: string;
 description: string;
 image: string;
 shortDescription: string;
 era: string;
 feeding: string;
 discoveryCountry: string;

 constructor(
   id: number,
   name: string,
   scientificName: string,
   description: string,
   image: string,
   shortDescription: string,
   era: string,
   feeding: string,
   discoveryCountry:string,
 ) {
   this.id = id;
   this.name = name;
   this.scientificName = scientificName;
   this.description = description;
   this.image = image;
   this.shortDescription = shortDescription;
   this.era = era;
   this.feeding = feeding;
   this.discoveryCountry = discoveryCountry;
 }
}
