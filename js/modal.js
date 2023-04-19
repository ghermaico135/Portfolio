// Collect all see project btns in array or nodelist
// Loop inside nodelist using for or foreach
// Inside the loop you will give click event listener to each one
// Inside each event listener you will loop inside project array
// then fetch data from object to popup
const seeProjectBtns = document.querySelectorAll(".card-popup-btn");
const workSectionContainer =document.querySelector('.work-section');
const popupContainer = document.querySelector('.popup-container');


const project = [
  {
   imgMobile: '../images/Img/Snapshoot Portfolio.png',
   imgDesktop: '../images/Img/Snapshoot Portfolio-Desk-Card (copy).svg',
   ownerMobile: 'Tonic',
   ownerDesk: 'Tonic',
   mobileInfO: 'CANOPY',
   DeskInfO: 'CANOPY',
   profession: 'Back End Dev',
   year: 2015,
   aboutProjectMob: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
   aboutProjectDsk: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
   technology: ['html', 'css', 'Javascript'],
   details: 'See Project',
 },
 {
   imgMobile: '../images/Img/Snapshoot PortfolioOne.png',
   imgDesktop: '../images/Img/Snapshoot Portfolio46.png',
   ownerMobile: 'Multi-Post Stories',
   ownerDesk: 'Multi-Post Stories',
   mobileInfO: 'CANOPY',
   DeskInfO: 'FaceBook',
   profession: 'FullStack Dev',
   year: 2015,
   aboutProjectMob: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
   aboutProjectDsk: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
   technology: ['html', 'ruby on rails', 'css', 'Javascript'],
   details: 'See Project',
 },
 {
   imgMobile: '../images/Img/Snapshoot Portfolio.png',
   imgDesktop: '../images/Img/Snapshoot Portfolio4.png',
   ownerMobile: 'Tonic',
   ownerDesk: 'Facebook360',
   mobileInfO: 'CANOPY',
   DeskInfO: 'FaceBook 360',
   profession: 'FullStack Dev',
   year: 2015,
   aboutProjectMob: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
   aboutProjectDsk: "Exploring the future of media in Facebook's first Virtual Reality app;a place to discover and enjoy 360 photos and videos on Gear VR..",
   technology: ['html', 'ruby on rails', 'css', 'Javascript'],
   details: 'See Project',
 },
 {
   imgMobile: '../images/Img/Snapshoot PortfolioOne.png',
   imgDesktop: '../images/Img/Snapshoot Portfolio46.png',
   ownerMobile: ' Multi-Post Stories',
   ownerDesk: 'Uber Navigator',
   mobileInfO: 'CANOPY',
   DeskInfO: 'Uber',
   profession: 'BackEnd Dev',
   professionDesk: 'Uber loader',
   year: 2015,
   yearDesk: 2018,
   aboutProjectMob: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
   aboutProjectDsk: '   A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
   technology: ['html', 'ruby on rails', 'css', 'Javascript'],
   details: 'See Project',
 },

];
// console.log(seeProjectBtns)

seeProjectBtns.forEach((cardBtn,indexBtn)=>{
  cardBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(e.target)
    project.forEach((card,indexCard)=>{
      if(indexBtn === indexCard){
       popupContainer.style.display='block';

        const Div = document.createElement('div');
        
        
        Div.innerHTML = `
        <div class="popup-container" style="border:1px solid red"> 
        
        <div class="modal-container">
            <div class="modal-header">
                <div>
                  <h2 class="owner-name">
                  ${card.ownerDesk}

                </h2>
                <h2 class="owner-name2">
                ${card.ownerMobile}
                </h2>
                </div>
                <div class="modal-close-btn" >
                  <a href="#!">x</a>
                </div>
            </div>
        
              <div class="info">
                <h3 class="info-head">CANOPY</h3>
                <h3 class="info-head2">FaceBook</h3>
                <ul>
                  <li> FullStack Dev </li>
                  <li>2015</li>
                </ul>
              </div>
        
              <div class="modal-image-container">
                <img class="snapShoot-portfolio" src="./images/Img/Snapshoot PortfolioOne.png" alt="mobile-Snapshot-Portfolio-one"> 
                <img class="Portfolio-Desk-Card" src="./images/Img/Snapshoot Portfolio-Desk-Card (copy).svg" alt="desktop-snapShoot-portfolio">   
              </div>
        
              <div class="modal-bottom-container"> 
                <div >
                  <p class="paragraph"> 
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illo 
                    eum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsum 
                    repellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiis
                    exercitationem sequi at cupiditate blanditiis vero laudantium non neque!
                  </p>
                </div>
                  <div>
                      <ul class="list-of-course flex-wrap">
                            <li><a href="#">html</a></li>
                            <li class="menu-rails"><a href="#">Ruby on rails</a></li>
                            <li><a href="#">css</a></li>
                            <li><a href="#">Javascript</a></li>
                      </ul>
                  </div> 
        
                  <div class="project-detail-btn"> 
                    <a  class="btn" href=https://ghermaico135.github.io/Portfolio/">Live demo</a> 
                    <a  class="btn" href="https://github.com/ghermaico135/Portfolio.git">Source</a> 
                </div>
              </div>
             
        </div>   
            </div>
        
        `;
        document.workSectionContainer.appendChild(Div);
      }
    })
  })
})











// Main.appendChild(section1);


