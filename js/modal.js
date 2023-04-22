// Collect all see project btns in array or nodelist
// Loop inside nodelist using for or foreach
// Inside the loop you will give click event listener to each one
// Inside each event listener you will loop inside project array
// then fetch data from object to popup

const modalPopupContainer = document.querySelector('.popup-container');
// desktop
const desktopProjectBtn = document.querySelectorAll('.desktop-card-popup-btn');
const desktopModalCloseBtn = document.querySelector('.desktop-modal-close-btn');

const desktopClientOwner = document.querySelector('.desktopOwner');
const dektopClientInfo = document.querySelector('.DeskInfo');
const desktopClientRole = document.querySelector('.role');
const desktopClintYear = document.querySelector('.year');
const desktopImg = document.querySelector('.desktop-img');
const desktopProjectDescr = document.querySelector('.desktop-project-description');

// mobile
const mobileProjectBtn = document.querySelectorAll('.mobile-card-popup-btn');
const mobileProjectCloseBtn = document.querySelectorAll('.mobile-modal-close-btn');
const mobileClientOwner = document.querySelector('.mobileOwner');
const mobileClientInfo = document.querySelector('.mobileInfo');
const mobileClientRole = document.querySelector('.role');
const mobileClintYear = document.querySelector('.year');
const mobileImg = document.querySelector('.mobile-img');
const mobileProjectDescr = document.querySelector('.mobile-project-description');

const MobileProject = [
  {
    id: 1,
    ImgUrl: '../images/Img/Snapshoot Portfolio-Desk-Card (copy).svg',
    mobileClient: 'Tonic',
    mobileClientInfO: 'CANOPY',
    role: 'BackEnd Dev',
    year: 2015,
    aboutProjectMobile:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    mobileTechnology: ['html', 'css', 'Javascript'],
    liveDemo: '',
    source: '',
  },
  {
    id: 2,
    ImgUrl: '../images/Img/Snapshoot Portfolio46.png',
    mobileClient: 'Multi-Post Stories',
    mobileClientInfO: 'FaceBook',
    role: 'FullStack Dev',
    year: 2018,
    aboutProjectMobile:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    mobileTechnology: ['html', 'rubyOnRails', 'css', 'Javascript', 'Bootstrap'],
    liveDemo: '',
    source: '',
  },
  {
    id: 3,
    ImgUrl: '../images/Img/Snapshoot Portfolio4.png',
    mobileClient: 'Facebook360',
    mobileClientInfO: 'FaceBook 360',
    role: 'FullStack Dev',
    year: 2015,
    aboutProjectMobile:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    mobileTechnology: ['html', 'rubyOnRails', 'css', 'Javascript', 'Bootstrap'],
    liveDemo: '',
    source: '',
  },
  {
    id: 4,
    ImgUrl: '../images/Img/Snapshoot Portfolio46.png',
    mobileClient: 'Uber Navigator',
    mobileClientInfO: 'Uber',
    role: 'Uber loader',
    year: 2018,
    aboutProjectMobile:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    mobileTechnology: ['html', 'css', 'Javascript'],
    liveDemo: '',
    source: '',
  },
];
// desktop project
const desktopProject = [
  {
    id: 1,
    ImgUrl: '../images/Img/Snapshoot Portfolio-Desk-Card (copy).svg',
    DesktopClient: 'Tonic',
    deskClientInfO: 'CANOPY',
    role: 'BackEnd Dev',
    year: 2015,
    aboutProjectDesktop:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    desktopTechnology: ['html', 'rubyOnRails', 'css', 'Javascript', 'Bootstrap'],
    liveDemo: '',
    source: '',
  },
  {
    id: 2,
    ImgUrl: '../images/Img/Snapshoot Portfolio46.png',
    DesktopClient: 'Multi-Post Stories',
    deskClientInfO: 'FaceBook',
    role: 'FullStack Dev',
    year: 2018,
    aboutProjectDesktop:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    desktopTechnology: ['html', 'rubyOnRails', 'css', 'Javascript', 'Bootstrap'],
    liveDemo: '',
    source: '',
  },
  {
    id: 3,
    ImgUrl: '../images/Img/Snapshoot Portfolio4.png',
    DesktopClient: 'Facebook360',
    deskClientInfO: 'FaceBook 360',
    role: 'FullStack Dev',
    year: 2015,
    aboutProjectDesktop:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    desktopTechnology: ['html', 'rubyOnRails', 'css', 'Javascript', 'Bootstrap'],
    liveDemo: '',
    source: '',
  },
  {
    id: 4,
    ImgUrl: '../images/Img/Snapshoot Portfolio46.png',
    DesktopClient: 'Uber Navigator',
    deskClientInfO: 'Uber',
    role: 'Uber loader',
    year: 2018,
    aboutProjectDesktop:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ullam error aperiam! Illoeum porro molestiae iste nobis! Esse quos placeat deleniti cum, ad molestias nulla tempora ipsumrepellendus! Assumenda eveniet obcaecati, hic, velit molestiae vitae provident rerum error eligendi officiisexercitationem sequi at cupiditate blanditiis vero laudantium non neque!',
    desktopTechnology: ['html', 'rubyOnRails', 'css', 'Javascript', 'Bootstrap'],
    liveDemo: '',
    source: '',
  },
];

desktopProjectBtn.forEach((desktopBtn, index) => {
  desktopBtn.addEventListener('click', () => {
    modalPopupContainer.style.visibility = 'visible';
    desktopProject.forEach((card) => {
      if (index === card.id) {
        desktopClientOwner.innerHTML = card.DesktopClient;
        dektopClientInfo.innerHTML = card.deskClientInfO;
        desktopClientRole.innerHTML = card.role;
        desktopClintYear.innerHTML = card.year;
        desktopImg.src = card.ImgUrl;
        desktopProjectDescr.innerHTML = card.aboutProjectDesktop;
      }
    });
  });
});

desktopModalCloseBtn.addEventListener('click', () => {
  modalPopupContainer.style.visibility = 'hidden';
});

mobileProjectBtn.forEach((mobileBtn, indexBtn) => {
  mobileBtn.addEventListener('click', () => {
    modalPopupContainer.style.visibility = 'visible';
    MobileProject.forEach((card) => {
      if (indexBtn === card.id) {
        mobileClientOwner.innerHTML = card.mobileClient;
        mobileClientInfo.innerHTML = card.mobileClientInfO;
        mobileClientRole.innerHTML = card.role;
        mobileClintYear.innerHTML = card.year;
        mobileImg.src = card.ImgUrl;
        mobileProjectDescr.innerHTML = card.aboutProjectMobile;
      }
    });
  });
});

mobileProjectCloseBtn.addEventListener('click', () => {
  modalPopupContainer.style.visibility = 'hidden';
});
