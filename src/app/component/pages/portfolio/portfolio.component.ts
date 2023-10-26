import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';

//Constants
const PATH_PROJECT_IMAGE: string = "./assets/img/project/";

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
    , public owner:string|null = "Own project"
    , public urlProject:string = ""
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
  get getOwner(): string{
    return this.owner ?? "Own project"
  }
  get getUrlProject(): string{
    return this.urlProject
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
  styleUrls: ['./portfolio.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

  projectItems: Array<ProjectItem>= new Array<ProjectItem>();
  projecyModal: ProjectItem = new ProjectItem();
  activeSlideIndex = 0;
  myInterval = 2500;

  constructor(){

  }
  
  ngOnInit(): void{
    
    this.projectItems.push(new ProjectItem(
      0
      , "Neon"
      , "Application of megasoft contractual processes"
      , "Participant in the development of application of megasoft contractual processes."
      , "Megasoft S.A.S."
      , "https://www.megasoft.com.co"
      , ""
      , "project-3.png"
      , ["Neon-1.png","Neon-2.png","Neon-3.png"]
      , 4
      , ['Java',"Tomcat","JSP","HTML","CSS3","JavaScript","Bootstrap","Oracle","SqlServer","PostgreSql","Eclipse"]
    ));
    this.projectItems.push(new ProjectItem(
      1
      , "Orario"
      , "Web tasks managment"
      , "Degree project presented for the Escuela Tecnológica Instituto Técnico Central, website of a task manager for companies."
      , null
      , ""
      , "https://gitlab.com/itcproyect/pg-taskmanagement"
      , "project-1.png"
      , ["Orario-1.png","Orario-2.png","Orario-3.png"]
      , 1
      , ["Java","Tomcat","JSP","HTML","CSS3","JavaScript","TypeScript","Bootstrap","MySQL","Eclipse"]
    ));
    this.projectItems.push(new ProjectItem(
      2
      , "My world"
      , "React test"
      , "This page was a practice exercise for the use of react."
      , undefined
      , ""
      , "https://gitlab.com/itcproyect/pg-taskmanagement"
      , "project-2.png"
      , ["MyWorld-1.png","MyWorld-2.png","MyWorld-3.png","MyWorld-4.png","MyWorld-5.png","MyWorld-6.png"]
      , 0
      , ["React","HTML","CSS3","JavaScript","TypeScript","Bootstrap","Visual Studio Code"]
    ));
    this.projectItems.push(new ProjectItem(
      3
      , "Daily stress"
      , "Strategy and health videogame"
      , "Degree project presented for the Escuela Tecnológica Instituto Técnico Central, strategy and health videogame."
      , undefined
      , ""
      , "https://github.com/ztevenx100/PG-DailyStress-Git"
      , "project-4.png"
      , ["DailyStress-1.png","DailyStress-2.png","DailyStress-3.png","DailyStress-4.png","DailyStress-5.png"]
      , 0
      , ["JavaScript","C#","Unity"]
    ));
    this.projectItems.push(new ProjectItem(
      2
      , "Star Collector"
      , "Platform videogame"
      , "This project presented for the Escuela Tecnológica Instituto Técnico Central, Platform videogame."
      , undefined
      , ""
      , ""
      , "project-5.png"
      , ["StarCollector-1.png","StarCollector-2.png","StarCollector-3.png","StarCollector-4.png","StarCollector-5.png","StarCollector-6.png"]
      , 0
      , ["JavaScript","C#","Unity"]
    ));
  
    // console.log(this.projectItems);
  }

  dataModal(id:number){
    this.projecyModal = new ProjectItem();
    this.projecyModal = this.projectItems[id];
    console.log(this.projecyModal);
  }

}
