// Collect all see project btns in array or nodelist
// Loop inside nodelist using for or foreach
// Inside the loop you will give click event listener to each one
// Inside each event listener you will loop inside project array
// then fetch data from object to popup

const seeProjectBtns = document.querySelectorAll('.card-popup-btn');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');
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
    aboutProjectMob:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    technology: ['html', 'css', 'Javascript'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
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
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    technology: ['html', 'ruby on rails', 'css', 'Javascript'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
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
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    technology: ['html', 'ruby on rails', 'css', 'Javascript'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
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
    technology: ['html', 'ruby on rails', 'css', 'Javascript'],
    liveDemo: 'https://ghermaico135.github.io/Portfolio/',
    source: 'https://github.com/ghermaico135/Portfolio.git',
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
        <div class="popup-container">
        <div class="modal-container">
          <!-- modal header -->
            <div class="modal-header">
              <!-- project name -->
                  <div>
                    <!-- mobile -->
                    <h2 class="owner-name">
                      ${card.ownerMobile}
                    </h2>
                    <!-- desktop -->
                    <h2 class="owner-name2">
                      ${card.ownerDesk}
                    </h2>
                  </div>
              <!-- close btn -->
                  <div class="modal-close-btn" >X</div>
              </div>
                <ul class="modal-client-info-container">
                  <li>${card.mobileInfO}</li>
                  <li><img src="./images/Icon/Counter.png" alt="counter"></li>
                  <li>${card.profession}</li>
                  <li><img src="./images/Icon/Counter.png" alt="counter"></li>
                  <li>${card.year} </li>
                </ul>
              <!-- Sanpshoot -->
              <div class="modal-image-container">
                <img class="snapShoot-portfolio " src="${card.imgMobile}" alt="mobile-snapShoot-portfolio">
                <img class="Portfolio-Desk-Card" src="${card.imgDesktop}" alt="desktop-snapShoot-portfolio">
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
                        <ul class="list-of-course  flex-wrap">
                          <li>${card.technology[0]}</li>
                          <li class="menu-rails">${card.technology[1]}</li>
                          <li >${card.technology[2]}</li>
                          <li >${card.technology[3]}</li>
                        </ul>
                    <!-- btns -->
                    <ul class="project-detail-btn-container">
                      <li><a href="${card.liveDemo}" class="btn-desktop">Live <img src="./images/Icon/live icons.svg" alt="live preview"></a></li>
                      <li><a href="${card.source}" class="btn-desktop">Source <img src="./images/Icon/Github.png" alt="github"></a></li>
                      <li><a href="${card.liveDemo}"  class="btn project-detail-btn">Live preview <img src="./images/Icon/live icons.svg" alt="live preview"></a></li>
                      <li><a href="${card.source}" class="btn project-detail-btn">Source code <img src="./images/Icon/Github.png" alt="github"></a></li>
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

console.log(modalCloseBtn)
modalCloseBtn.addEventListener('click', () => {
  console.log('hey');
  popupContainer.style.display = 'none';
});

// Main.appendChild(section1);
