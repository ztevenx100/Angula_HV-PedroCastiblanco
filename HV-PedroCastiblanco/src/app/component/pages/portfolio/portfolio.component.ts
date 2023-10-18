import { Component, OnInit } from '@angular/core';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';

//Constants
const PATH_PROJECT_IMAGE: string = "../../../../assets/img/project/";

//Interfaces
class ProjectItem {
  // private id: number;
  // private title: string;
  // private nameImage: string;

  constructor(
    public id:number = 0
    , public title:string = ""
    , public subTitle:string = ""
    , public description:string = ""
    , public urlRepository:string = ""
    , public nameMainImage:string = "project-0.png"
    , public namesImages: string[] = []
    , public yearsExpirience:number = 0
    , public technologies: string[] = []
  ){ }

  get getId(): number {
    return this.id;  
  }
  get getTitle(): string {
    return this.title;  
  }
  get getSubTitle(): string {
    return this.subTitle;  
  }
  get getDescription(): string {
    return this.description;  
  }
  get getIconRepository() {
    let image:string = "";
    if(this.urlRepository.toLowerCase().includes('gitlab')){
      image = 'fa-brands fa-square-gitlab'
    } else {
      image = 'fa-brands fa-square-github'
    }
    return image;
  }
  get getUrlRepository():string {
    return this.urlRepository;
  }
  get getUrlMainImage(): string {
    return PATH_PROJECT_IMAGE + this.nameMainImage;  
  }
  get getNamesImages(): string[] {
    return this.namesImages;
  }
  get getUrlImages(): string[] {
    return this.namesImages.map(item => PATH_PROJECT_IMAGE + item);
  }
  get getYearsExpirience(): number {
    return this.yearsExpirience;  
  }
  get getYearsExpirienceText(): string {
    return "+" + this.yearsExpirience + " years";  
  }
  get getTechnologies(): string[] {
    return this.technologies;
  }

}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projectItems: Array<ProjectItem>= new Array<ProjectItem>();
  projecyModal: ProjectItem = new ProjectItem();
  activeSlideIndex = 0;
  myInterval = 0;

  constructor(){
    // const PROYECTS =[
    //   {
    //     title: "proyect"
    //   }
    // ];

  }
  
  ngOnInit(): void{
    
    this.projectItems.push(new ProjectItem(
      0
      , "Orario"
      , "Web tasks managment"
      , "Degree project presented for the Escuela Tecnológica Instituto Técnico Central"
      , "https://gitlab.com/itcproyect/pg-taskmanagement"
      , "project-1.png"
      , ["Orario-1.png","Orario-2.png","Orario-3.png"]
      , 1
      , ['Java',"Tomcat","JSP","HTML","CSS3","Bootstrap","MySQL"]
    ));
    this.projectItems.push(new ProjectItem(
      1
      , "Orario"
      , ""
      , "Test React"
      , "https://gitlab.com/itcproyect/pg-taskmanagement"
      , "project-0.png"
      , ["Orario-1.png","Orario-2.png","Orario-3.png"]
      , 1
      , ['Java',"JSP","HTML","CSS3","Bootstrap","MySQL"]
    ));
  
    // console.log(this.projectItems);
  }

  dataModal(id:number){
    this.projecyModal = this.projectItems[id];
  }

}
