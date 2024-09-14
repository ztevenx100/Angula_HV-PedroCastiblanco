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
    , public owner:string|null = "PORTFOLIO.Project.OwnProject"
    , public urlProject:string = ""
    , public urlRepository:string = ""
    , public nameMainImage:string = "project-0.webp"
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
  get getTranslateSubTitle(): string {
    return "PORTFOLIO.Project.Subtitle" + this.id;
  }
  get getDescription(): string {
    return this.description;  
  }
  get getTranslateDescription(): string {
    return "PORTFOLIO.Project.Description" + this.getId;
  }
  get getOwner(): string{
    return this.owner ?? "PORTFOLIO.Project.OwnProject"
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
  get getTranslateYearsExpirience(): string {
    return "PORTFOLIO.Project.TextYears";
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
      10
      , "Colección de proyectos en JavaScript"
      , "Collection of JavaScript projects"
      , "Collection of JavaScript projects"
      , null
      , "https://pscp-js-projects-collection.vercel.app/"
      , "https://github.com/ztevenx100/js_projects-collection"
      , "project-11.webp"
      , ["js_projects-collection-1.webp", "js_projects-collection-2.webp", "js_projects-collection-3.webp"]
      , 0
      , ["HTML","CSS3","JavaScript","Astro"]
    ));
    this.projectItems.push(new ProjectItem(
      9
      , "App de tetris"
      , "Tetris App."
      , "Tetris App."
      , null
      , "https://ztevenx100.github.io/js-tetris/"
      , "https://github.com/ztevenx100/js-tetris"
      , "project-10.webp"
      , ["tetris-app-1.webp"]
      , 0
      , ["HTML","CSS3","JavaScript"]
    ));
    this.projectItems.push(new ProjectItem(
      8
      , "App del clima"
      , "Weather App."
      , "Weather App."
      , null
      , "https://ztevenx100.github.io/js_weather-app-1/"
      , "https://github.com/ztevenx100/js_weather-app-1"
      , "project-9.webp"
      , ["weather-app-1.webp","weather-app-2.webp"]
      , 0
      , ["HTML","CSS3","JavaScript"]
    ));
    this.projectItems.push(new ProjectItem(
      7
      , "Dashboard con nextJs"
      , "Dashboard with nextJs"
      , "nextJS introduction sample exercise. "
      , null
      , "https://nextjs-first-project-orcin.vercel.app"
      , "https://github.com/ztevenx100/nextjs_first-project"
      , "project-8.webp"
      , ["nextjs-dashboard-1.webp","nextjs-dashboard-2.webp","nextjs-dashboard-3.webp"]
      , 0
      , ["React","Next JS","HTML","CSS3","JavaScript","Tailwind","PostgreSql"]
    ));
    this.projectItems.push(new ProjectItem(
      6
      , "Test empresa de logistica"
      , "Technical test of 'Ingeneo'."
      , "'Test of logistics company with customers products, transportation and warehousing with tests. "
      , null
      , "https://ingeneo-pruebatecnica.onrender.com/index"
      , "https://github.com/ztevenx100/Ingeneo-PruebaTecnica"
      , "project-7.webp"
      , ["testEmpresaGestion-1.webp","testEmpresaGestion-2.webp","testEmpresaGestion-3.webp","testEmpresaGestion-4.webp","testEmpresaGestion-5.webp","testEmpresaGestion-6.webp","testEmpresaGestion-7.webp"]
      , 0
      , ["Java","Spring Boot","HTML","CSS3","JavaScript","Tailwind","thymeleaf","Supabase","PostgreSql","Playwright"]
    ));
    this.projectItems.push(new ProjectItem(
      5
      , "DnD-newSystem"
      , "Immerse yourself in a new adventure with 'Azar de las dos manos', an innovative role-playing system that allows you to create unique and unforgettable stories."
      , "'Azar de las dos manos' is a role-playing system designed to offer a fluid, dynamic and creative gaming experience. With intuitive rules and innovative dice mechanics, this system allows you to bring your characters to life and explore exciting worlds. At DnD-newSystem, you will find everything you need to start playing with 'Azar de las dos manos'"
      , null
      , "https://dnd-newsystem.vercel.app"
      , "https://github.com/ztevenx100/DnD-newSystem"
      , "project-6.webp"
      , ["DnD-newSystem-1.webp","DnD-newSystem-2.webp","DnD-newSystem-3.webp","DnD-newSystem-4.webp"]
      , 0
      , ["React","Vite","HTML","CSS3","JavaScript","Tailwind","UNO-CSS","Supabase","PostgreSql"]
    ));
    this.projectItems.push(new ProjectItem(
      0
      , "Neon"
      , "Application of megasoft contractual processes"
      , "Participant in the development of application of megasoft contractual processes."
      , "Megasoft S.A.S."
      , "https://www.megasoft.com.co"
      , ""
      , "project-3.webp"
      , []
      , 5
      , ["Java","HTML","CSS3","JavaScript"]
    ));
    this.projectItems.push(new ProjectItem(
      1
      , "Orario"
      , "Web tasks managment"
      , "Degree project presented for the Escuela Tecnológica Instituto Técnico Central, website of a task manager for companies."
      , null
      , ""
      , "https://gitlab.com/itcproyect/pg-taskmanagement"
      , "project-1.webp"
      , ["Orario-1.webp","Orario-2.webp","Orario-3.webp"]
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
      , "project-2.webp"
      , ["MyWorld-1.webp","MyWorld-2.webp","MyWorld-3.webp","MyWorld-4.webp","MyWorld-5.webp","MyWorld-6.webp","MyWorld-7.webp","MyWorld-8.webp"]
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
      , "project-4.webp"
      , ["DailyStress-1.webp","DailyStress-2.webp","DailyStress-3.webp","DailyStress-4.webp","DailyStress-5.webp"]
      , 0
      , ["JavaScript","C#","Unity"]
    ));
    this.projectItems.push(new ProjectItem(
      4
      , "Star Collector"
      , "Platform videogame"
      , "This project presented for the Escuela Tecnológica Instituto Técnico Central, Platform videogame."
      , undefined
      , ""
      , ""
      , "project-5.webp"
      , ["StarCollector-1.webp","StarCollector-2.webp","StarCollector-3.webp","StarCollector-4.webp","StarCollector-5.webp","StarCollector-6.webp"]
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
