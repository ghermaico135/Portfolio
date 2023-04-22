// Collect all see project btns in array or nodelist
// Loop inside nodelist using for or foreach
// Inside the loop you will give click event listener to each one
// Inside each event listener you will loop inside project array
// then fetch data from object to popup

const desktopProjectBtn = document.querySelectorAll('.desktop-card-popup-btn');
const desktopModalCloseBtn = document.querySelectorAll('.desktop-modal-close-btn');
const modalPopupContainer = document.querySelector('.popup-container');
const mobileProjectBtn = document.querySelectorAll('.mobile-card-popup-btn')
const mobileProjectCloseBtn = document.querySelectorAll('.mobile-modal-close-btn')

const MobileProject = [
  {
    mobileImg: '../images/Img/Snapshoot Portfolio.png',
    mobileOwner: 'Tonic',
    mobileInfO: 'CANOPY',
    profession: 'Back End Dev',
    year: 2015,
    aboutProjectMob:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    mobTechnology: ['html', 'css', 'Javascript'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
  },
  {
    mobileImg: '../images/Img/Snapshoot PortfolioOne.png',
    mobileOwner: 'Multi-Post Stories',
    mobileInfO: 'CANOPY',
    profession: 'FullStack Dev',
    year: 2015,
    aboutProjectMob:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    mobTechnology: ['html', 'css', 'Javascript'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
  },
  {
    mobileImg:  '../images/Img/Snapshoot Portfolio.png',
    mobileOwner: 'Tonic',
    mobileInfO: 'CANOPY',
    profession: 'FullStack Dev',
    year: 2015,
    aboutProjectMob:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    mobTechnology: ['html', 'css', 'Javascript'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
  },
  {
    mobileImg: '../images/Img/Snapshoot PortfolioOne.png',
    mobileOwner: ' Multi-Post Stories',
    mobileInfO: 'CANOPY',
    profession: 'BackEnd Dev',
    year: 2015,
    aboutProjectMob:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
      mobTechnology: ['html', 'css', 'Javascript'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
  },
];
// desktop project
const desktopProject = [
  {
    desktopImg: '../images/Img/Snapshoot Portfolio-Desk-Card (copy).svg',
    desktopOwner: 'Tonic',
    DeskInfO: 'CANOPY',
    desktopProfession: 'Back End Dev',
    desktopYear: 2015,
    aboutProjectDesktop:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    desktopTechnology: ['html', 'rubyOnRails','css', 'Javascript','Bootstrap'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
  },
  {
    desktopImg: '../images/Img/Snapshoot Portfolio46.png',
    desktopOwner: 'Multi-Post Stories',
    DeskInfO: 'FaceBook',
    desktopProfession: 'FullStack Dev',
    desktopYear:  2015,
    aboutProjectDesktop:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    desktopTechnology: ['html', 'rubyOnRails','css', 'Javascript','Bootstrap'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
  },
  {
    desktopImg: '../images/Img/Snapshoot Portfolio4.png',
    ownerDesk: 'Facebook360',
    DeskInfO: 'FaceBook 360',
    desktopProfession: 'FullStack Dev',
    desktopYear:  2015,
    aboutProjectDesktop:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    desktopTechnology: ['html', 'rubyOnRails','css', 'Javascript','Bootstrap'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
  },
  {
    desktopImg: '../images/Img/Snapshoot Portfolio46.png',
    ownerDesk: 'Uber Navigator',
    DeskInfO: 'Uber',
    desktopProfession: 'Uber loader',
    desktopYear: 2018,
    aboutProjectDesktop:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
      desktopTechnology: ['html', 'rubyOnRails','css', 'Javascript','Bootstrap'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
  },
];
// console.log(seeProjectBtns)

desktopProjectBtn.forEach((cardBtn, indexBtn) => {
  cardBtn.addEventListener('click', () => {
    desktopProject.forEach((card, indexCard) => {
      if (indexBtn === indexCard) {
        // console.log("hi")
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="popup-container">
        <div class="modal-container">
          <!-- modal header -->
          <div class="modal-header">
              <!-- project name -->
                    <div>
                    <h2 class="modal-owner-name">${card.desktopOwner}</h2>
                   </div>
                   <!-- close btn -->
                   <div class="desktop-modal-close-btn" >X</div>
              </div>
              <ul class="modal-popup-client-info-container">
              <li class="modal-info-head">${card.DeskInfO}</li>
              <li><img src="./images/Icon/Counter.png" alt="counter" /></li>
              <li>${card.desktopProfession}</li>
              <li><img src="./images/Icon/Counter.png" alt="counter" /></li>
              <li>${card.desktopYear} </li>
            </ul>
              <!-- Sanpshoot -->
              <div class="modal-image-container">
              <img
                class="mobile-modal-portfolio"
                src="${card.desktopImg}" 
                alt="mobile-modal-portfolio" />
            </div>
              
              <!-- modal bottom -->
              <div class="modal-bottom-container">
                    <!-- left side -->
                    <div class="modal-bottom-left-side">
                    <p class="details">
                      ${card.aboutProjectDesktop}
                      </p>
                    </div>
                    <!-- right side -->
                    <div class="side-container">
                    <!-- tags -->
                        <ul class="modal-listOf-course flex-wrap">
                              <li>${card.desktopTechnology[0]}</li>
                              <li>${card.desktopTechnology[1]}</li>
                              <li >${card.desktopTechnology[2]}</li>
                              <li >${card.desktopTechnology[3]}</li>
                              <li >${card.desktopTechnology[4]}</li>
                            </ul>
                    <!-- btns -->
                        <ul class="modal-project-detail-btn-container">
                          <li>
                            <a href="${card.source}" class="modal-btn"
                              >See Live
                              <img src="./images/Icon/Icon -live.png" alt="github"
                            /></a>
                          </li>
                          <li>
                            <a href="${card.source}" class="modal-btn"
                              >see Source
                              <img src="./images/Icon/Github.png" alt="github"
                            /></a>
                        </li>
                    </ul>
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


mobileProjectBtn.forEach((cardBtn, indexBtn) => {
  cardBtn.addEventListener('click', () => {
    MobileProject.forEach((card, indexCard) => {
      if (indexBtn === indexCard) {
        // console.log("hi")
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="popup-container">
        <div class="modal-container">
          <!-- modal header -->
          <div class="modal-header">
              <!-- project name -->
                    <div>
                    <h2 class="modal-owner-name">${card.mobileOwner}</h2>
                   </div>`
                
                   <div class="desktop-modal-close-btn" >X</div>
              `</div>
              <ul class="modal-popup-client-info-container">
              <li class="modal-info-head">${card.mobileInfO}</li>
              <li><img src="./images/Icon/Counter.png" alt="counter" /></li>
              <li>${card.profession}</li>
              <li><img src="./images/Icon/Counter.png" alt="counter" /></li>
              <li>${card.year} </li>
            </ul>
              <!-- Sanpshoot -->
              <div class="modal-image-container">
              <img
                class="mobile-modal-portfolio"
                src="${card.mobileImg}" 
                alt="mobile-modal-portfolio" />
            </div>
              
              <!-- modal bottom -->
              <div class="modal-bottom-container">
                    <!-- left side -->
                    <div class="modal-bottom-left-side">
                    <p class="details">
                      ${card.aboutProjectMob}
                      </p>
                    </div>
                    <!-- right side -->
                    <div class="side-container">
                    <!-- tags -->
                        <ul class="modal-listOf-course flex-wrap">
                              <li>${card.mobTechnology[0]}</li>
                              <li>${card.mobTechnology[1]}</li>
                              <li >${card.mobTechnology[2]}</li>
                            </ul>
                    <!-- btns -->
                        <ul class="modal-project-detail-btn-container">
                          <li>
                            <a href="${card.source}" class="modal-btn"
                              >See Live
                              <img src="./images/Icon/Icon -live.png" alt="github"
                            /></a>
                          </li>
                          <li>
                            <a href="${card.source}" class="modal-btn"
                              >see Source
                              <img src="./images/Icon/Github.png" alt="github"
                            /></a>
                        </li>
                    </ul>
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

// console.log(modalCloseBtn)
desktopModalCloseBtn.addEventListener('click', () => {
  console.log('hey');
  modalPopupContainer .style.display = 'none';
});


// desktopModalCloseBtn.forEach((cardBtn,cardIndex)=>{
//   cardBtn.addEventListener('click', () =>{
//     desktopProject.forEach((index) =>{
//       if(cardIndex === index){
//         modalPopupContainer .style.display = 'none';
//       }
//   })
    
//     })
// })

