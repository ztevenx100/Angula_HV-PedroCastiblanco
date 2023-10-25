import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
  ,styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  titulo = "Mi pagina";
  constructor(){
    
  }

  ngOnInit() {

    // function show section
    const showSection = (element: any) =>{
      for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
        
      }

      const target = element.getAttribute("href").split("/")[1];
      // console.log(target);
      document.querySelector("#"+target)?.classList.add("active");
    };
    
    const nav = document.querySelector(".nav-page-links");
    const navList: NodeListOf<HTMLLIElement> = nav?.querySelectorAll("li") as NodeListOf<HTMLLIElement>;
    //console.log(navList)
    
    const totalNavList = navList.length;
    
    const allSection = document.querySelectorAll(".section");
    const totalSection = allSection.length;
    // console.log(allSection);

    // Set CssClass when push clicking on navbar buttons
    for (let i = 0; i < totalNavList; i++) {
      const a = navList[i].querySelector("a");
      a?.addEventListener("click", function(){
        for (let j = 0; j < totalNavList; j++) {

          if (navList[j].querySelector("a")?.classList.contains("active")) {
            // allSection[j].classList.add("back-section");
            // console.log("back-section" + navList[j].querySelector("a"));
          }

          navList[j].querySelector("a")?.classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
          navSectionTogglerBtn();
        }
      })
    }

    const navTogglerBtn = document.querySelector(".nav-toggler");
    const navbar = document.querySelector(".navbar");

    const navSectionTogglerBtn = () => {
      navbar?.classList.toggle("open");
      navTogglerBtn?.classList.toggle("open");
    }

    navTogglerBtn?.addEventListener("click", () => {
      navSectionTogglerBtn();
    });

  }
}
