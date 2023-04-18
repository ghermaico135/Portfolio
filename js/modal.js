const project = {
  card1: {
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
  card2: {
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
  card3: {
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
  card4: {
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

};

const Main = document.createElement('main');
Main.id = 'portfolio-section';

// let section1 = document.createElement('section')
// let section2 = document.createElement('section')
// let section3 = document.createElement('section')
// let section4 = document.createElement('section')

Main.innerHTML = `

<section class="work-section" id="card-1">
        <div class="image-container">

        <img class="snapShoot-portfolio" src="${project.card1.imgMobile}" alt="mobile-snapShoot-portfolio">
          
          <img class="Portfolio-Desk-Card" src="${project.card1.imgDesktop}" alt="desktop-snapShoot-portfolio">
        </div>
      <div class="info-container">
              <div>
                <h2 class="owner-name">
                  ${project.card1.ownerMobile}
                </h2>
                <h2 class="owner-name2">
                ${project.card1.ownerDesk}
                </h2>
              </div>

              <div class="info">
                  <h3 class="info-head"> ${project.card1.mobileInfO}</h3>
                  <h3 class="info-head2">${project.card1.DeskInfO}</h3>
                  <ul>
                    <li> ${project.card1.profession}</li>
                    <li>${project.card1.year}</li>
                  </ul>
              </div>

              <div>
                  <p class="daily-selection">
                  ${project.card1.aboutProjectMob}
                  </p>
                  <p class="daily-selection2">
                  ${project.card1.aboutProjectDsk}
                  </p>
              </div>

            <div>
                <ul class="list-of-course">
                      <li><a href="#"> ${project.card1.technology[0]}</a></li>
                      <li><a href="#">${project.card1.technology[1]}</a></li>
                      <li><a href="#">${project.card1.technology[2]}</a></li>
                </ul>
            </div>

            <div >
              <a  class="btn" id="popup-details" href="#card-container">${project.card1.details}</a>
              <a  class="btn-desktop" id="popup-details" href="#card-container">${project.card1.details}</a>
            </div>
        </div>
     
    </section>
  
 

    <section class="work-section">
    <div class="image-container flex-order">

        <img class="snapShoot-portfolio" src="${project.card2.imgMobile}" alt="mobile-Snapshot-Portfolio-one">
          
        <img class="Portfolio-Desk-Card" src="${project.card2.imgDesktop}" alt="desktop-snapShoot-portfolio">
    </div>

    <div class="info-container">
          <div>
            <h2 class="owner-name">
            ${project.card2.ownerMobile}
            </h2>
            <h2 class="owner-name2">
            ${project.card2.ownerDesk}
            </h2>
          </div>

          <div class="info">
            <h3 class="info-head">${project.card2.mobileInfO}</h3>
            <h3 class="info-head2">${project.card2.DeskInfO}</h3>
            <ul>
            <li> ${project.card2.profession}</li>
            <li>${project.card2.year}</li>
            </ul>
          </div>

          <div>
          <p class="daily-selection">
          ${project.card2.aboutProjectMob}
          </p>
          <p class="daily-selection2">
          ${project.card2.aboutProjectDsk}
          </p>
          </div>

        <div>
          <ul class="list-of-course">
              <li><a href="#"> ${project.card2.technology[0]}</a></li>
              <li class="menu-rails"><a href="#">${project.card2.technology[1]}</a></li>
              <li><a href="#">${project.card2.technology[2]}</a></li>
              <li><a href="#">${project.card2.technology[3]}</a></li>
          </ul>
        </div>

        <div>
        <a  class="btn" id="popup-details" href="#card-container">${project.card2.details}</a>
        <a  class="btn-desktop" id="popup-details" href="#card-container">${project.card2.details}</a>
        </div>
    </div>
</section>   




<section class="work-section">
<div class="image-container">

      <img class="snapShoot-portfolio" src="${project.card3.imgMobile}" alt="mobile-snapShoot-portfolio">
      
      <img class="Portfolio-Desk-Card" src="${project.card3.imgDesktop}" alt="desktop-snapShoot-portfolio">
</div>
<div class="info-container">
      <div>
        <h2 class="owner-name">
        ${project.card3.ownerMobile}
        </h2>
        <h2 class="owner-name2">
        ${project.card3.ownerDesk}
        </h2>
      </div>

      <div class="info">
      <h3 class="info-head">${project.card3.mobileInfO}</h3>
      <h3 class="info-head2">${project.card3.DeskInfO}</h3>
          <ul>
          <li> ${project.card3.profession}</li>
          <li>${project.card3.year}</li>
          </ul>
      </div>

      <div>
      <p class="daily-selection">
      ${project.card3.aboutProjectMob}
      </p>
      <p class="daily-selection2">
      ${project.card3.aboutProjectDsk}
      </p>
      </div>

    <div>
      <ul class="list-of-course">
      <li><a href="#"> ${project.card3.technology[0]}</a></li>
      <li class="menu-rails"><a href="#">${project.card3.technology[1]}</a></li>
      <li><a href="#">${project.card3.technology[2]}</a></li>
      <li><a href="#">${project.card3.technology[3]}</a></li>
      </ul>
    </div>

    <div>
    <a  class="btn" id="popup-details" href="#card-container">${project.card3.details}</a>
    <a  class="btn-desktop" id="popup-details" href="#card-container">${project.card3.details}</a>
    </div>
</div>
</section>  



<section class="work-section">
<div class="image-container flex-order">

    <img class="snapShoot-portfolio" src="${project.card4.imgMobile}" alt="mobile-snapshot-Portfolio-one">
      
      <img class="Portfolio-Desk-Card" src="${project.card4.imgDesktop}" alt="desktop-snapShoot-portfolio">
</div>

<div class="info-container">
      <div>
        <h2 class="owner-name">
        ${project.card4.ownerMobile}
        </h2>
        <h2 class="owner-name2">
        ${project.card4.ownerDesk}
        </h2>
      </div>

      <div class="info">
        <h3 class="info-head">${project.card4.mobileInfO}</h3>
        <h3 class="info-head2">${project.card4.DeskInfO}</h3>
        <ul>
          <li class="mobile"> ${project.card4.profession}</li>
          <li class="desktop">${project.card4.year}</li>
          <li class="mobile"> ${project.card4.professionDesk}</li>
          <li class="desktop">${project.card4.yearDesk}</li>
        </ul>
      </div>

      <div>
      <p class="daily-selection">
      ${project.card4.aboutProjectMob}
      </p>
      <p class="daily-selection2">
      ${project.card4.aboutProjectDsk}
      </p>
      </div>

    <div>
      <ul class="list-of-course">
      <li><a href="#"> ${project.card4.technology[0]}</a></li>
      <li class="menu-rails"><a href="#">${project.card4.technology[1]}</a></li>
      <li><a href="#">${project.card4.technology[2]}</a></li>
      <li><a href="#">${project.card4.technology[3]}</a></li>
      </ul>
    </div>

    <div >
    <a  class="btn" id="popup-details" href="#card-container">${project.card4.details}</a>
    <a  class="btn-desktop" id="popup-details" href="#card-container">${project.card4.details}</a>
    </div>
</div>
</section> 

`;

// Main.appendChild(section1);

document.body.appendChild(Main);
