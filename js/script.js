const menu = document.querySelector('.header-nav_burger');
const closeBtn = document.querySelector('.close-btn');
const navMobile = document.querySelector('.nav-menu_mobile');
const header = document.querySelector('#header');
const headerNav = document.querySelector('.header-nav');

menu.addEventListener('click', function () {
	let html = `
    <div class="nav-menu_mobile">
      <figure class="logo">
        <img src="/images/logo.svg" alt="Loopstudios Logo" />
      </figure>
      <figure class="close-btn">
        <img src="/images/icon-close.svg" alt="Close Button" />
      </figure>
      <nav class="nav-mobile">
          <ul>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Careers</li></a>
            <a href="#"><li>Events</li></a>
            <a href="#"><li>Products</li></a>
            <a href="#"><li>Support</li></a>
          </ul>
        </nav>
    </div>
  `;

	header.insertAdjacentHTML('beforebegin', html);

	document.querySelector('.close-btn').addEventListener('click', function () {
		document.querySelector('.nav-menu_mobile').remove();
	});
});
