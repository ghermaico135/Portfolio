// Collect all see project btns in array or nodelist
// Loop inside nodelist using for or foreach
// Inside the loop you will give click event listener to each one
// Inside each event listener you will loop inside project array
// then fetch data from object to popup

const seeProjectBtns = document.querySelectorAll('.card-popup-btn');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const popupContainer = document.querySelector('.popup-container')

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
    aboutProjectMob:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    aboutProjectDsk:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technology: ['html', 'css', 'Javascript'],
    liveDemo: "https://ghermaico135.github.io/Portfolio/",
    source:"https://github.com/ghermaico135/Portfolio.git"
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
    aboutProjectMob:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    aboutProjectDsk:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technology: ['html', 'ruby on rails', 'css', 'Javascript'],
    liveDemo: "https://ghermaico135.github.io/Portfolio/",
    source:"https://github.com/ghermaico135/Portfolio.git"
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
    aboutProjectMob:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    aboutProjectDsk:
      "Exploring the future of media in Facebook's first Virtual Reality app;a place to discover and enjoy 360 photos and videos on Gear VR..",
    technology: ['html', 'ruby on rails', 'css', 'Javascript'],
    liveDemo: "https://ghermaico135.github.io/Portfolio/",
    source:"https://github.com/ghermaico135/Portfolio.git"
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
    aboutProjectMob:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    aboutProjectDsk:
      '   A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technology: ['html', 'ruby on rails', 'css', 'Javascript'],
    liveDemo: "https://ghermaico135.github.io/Portfolio/",
    source:"https://github.com/ghermaico135/Portfolio.git"
  },
];
// console.log(seeProjectBtns)

seeProjectBtns.forEach((cardBtn, indexBtn) => {
  cardBtn.addEventListener('click', () => {
    project.forEach((card, indexCard) => {
      if (indexBtn === indexCard) {
        // console.log("hi")
        const div = document.createElement('div');
        div.innerHTML = `
      <div class="popup-container" style="border:1px solid red">

        <div class="modal-container">
            <div class="modal-header">
                <div>
                  <h2 class="owner-name">
                  ${card.ownerMobile}
                </h2>
                <h2 class="owner-name2">
                ${card.ownerDesk}
                </h2>
                </div>
                <div class="modal-close-btn" >
                <img  src="../images/Icon/mobile_exit_Icon.png" alt="exit-icon"> 
                </div>
            </div>

              <div class="info">
                <h3 class="info-head">${card.mobileInfO}</h3>
                <h3 class="info-head2">${card.DeskInfO}</h3>
                <ul>
                  <li> ${card. profession} </li>
               
                  <li>${card.year}</li>
                </ul>
              </div>

              <div class="modal-image-container">
                <img class="snapShoot-portfolio" src=${card.imgMobile} alt="mobile-Snapshot-Portfolio-one">
                <img class="Portfolio-Desk-Card" src="${card.imgDesktop}" alt="desktop-snapShoot-portfolio">
              </div>

              <div class="modal-bottom-container">
                    <div>
                      <p class="paragraph">
                      
                      ${card.aboutProjectMob}
                      </p>
                    </div>

                      <div>
                        <div>
                          <ul class="list-of-course flex-wrap">
                          <li><a href="#"> ${card.technology[0]}</a></li>
                          <li class="menu-rails"><a href="#">${card.technology[1]}</a></li>
                          <li><a href="#">${card.technology[2]}</a></li>
                          <li><a href="#">${card.technology[3]}</a></li>
                          </ul>
                        </div>

                        <div class="project-detail-btn">
                          <a  class="btn" href="${card.liveDemo}">Live demo</a>
                          <a  class="btn" href="${card.source}">Source</a>
                        </div>
                      </div>
              </div>
        </div>
      </div>

        `;
        document.body.appendChild(div);
      }
    });
  });
});


modalCloseBtn.addEventListener('click' ,() =>{
  popupContainer.style.display ="none"
   console.log("hey")
})

// Main.appendChild(section1);
