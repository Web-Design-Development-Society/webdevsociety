export function renderHeader() {
  const header = document.querySelector('header');
  header.innerHTML = `<nav><img
              src="images/whitelogo.svg"
              alt="Logo for the WDD Society"
              width="100px"
              id="nav-logo"
          />
          <button type="button" id="menu-button">Menu</button>
          <a href="./index.html" >Home</a>
          <a href="./members.html">Members</a>
          <a href="./projects.html">Projects</a>
          <a href="./contact.html">Contact</a>
          <a href="./gallery.html">Gallery</a>
          <a href="./about.html">About</a>
        </nav>`;

  const currentUrl = window.location.pathname.split('/').pop();
  const activeLink = document.querySelector(`a[href="${currentUrl}"]`);
  activeLink.classList.add('active');
  const menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
  });
}