// alert('chao ban');

const topMenu = document.getElementById('th-top-manu');
const toggleMenuIcon = document.getElementById('th-toggle-menu-icon');

document.addEventListener('mousedown', (e) => {
  console.log('e.target', e.target);
  if (toggleMenuIcon.contains(e.target)) {
    // click into toggle Menu Icon
    console.log('here111');
    topMenu.classList.toggle('th-menu-appear');
    topMenu.classList.toggle('hidden');
  } else {
    // click putside toggle menu icon
    console.log('here');
    if (topMenu.classList.contains('th-menu-appear')) {
      topMenu.classList.remove('th-menu-appear');
      topMenu.classList.add('hidden');
    }
  }
});
//khi kéo màn hình nhỏ hơn 'lg' và bật menu , rồi kéo màn hình lớn hơn lg sẽ ra bug dưới đây đây là fix lỗi
window.addEventListener('resize', (e) => {
  if (window.innerWidth > 1024) {
    if (topMenu.classList.contains('th-menu-appear')) {
      topMenu.classList.add('hidden');
      topMenu.classList.toggle('th-menu-appear');
    }
  }
});
