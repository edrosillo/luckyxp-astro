<nav>
  <div class="navigation">    
    <a class="navbarLogo" href="#home"> <img src="/assets/LuckyXP_LOGO.png" alt="Lucky XP Logo"> </a>
    <div class="menu">
      <ul>
        <li><a href="/#about">About</a></li>
        <li><a href="/#contact">Contact Us</a></li>
        <li><a href="/#team">Our Team</a></li>
        <li><a href="/#new_staff">New Staff</a></li>
        <li id="quote"><a href="/#quote">Request a Quote</a></li>
      </ul>
    </div>
    <div id="hamburger-icon" onclick={toggleMobileMenu}>
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <ul class="mobile-menu">
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/team">Our Team</a></li>
        <li><a href="/new_staff">New Staff</a></li>
        <li id="quote"><a href="/quote">Request a Quote</a></li>
      </ul>
    </div>
  </div>
</nav>

<script>
    
    function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
</script>


<style>
* {
  padding: 0;
  margin: 0;
}

nav a {
  text-decoration: none;
}

nav {
  background-color: #ffffff;
  position: sticky;
  height: 6rem;
  top: 0;
  z-index: 50;
  box-shadow: 0px 6px 17px -9px rgba(0,0,0,0.3);
}

nav .navigation {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}

.navbarLogo img {
  width: 247px;
  height: 64px;
  margin-top: 1rem;
}

ul {
  list-style: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.35rem;
}

ul a {
  color: #662D91;
}

ul li {
  padding: 5px;
  margin-left: 1.35rem;
  font-size: 1.3rem;
  text-align: center;
}

ul li:hover {
  transform: scale(1.1);
  transition: 0.3s;
}

#login,
#signup
#quote {
  border-radius: 5px;
  padding: 5px 8px;
}

#quote {
  border: 1px solid #662D91;
}

#login {
  border: 1px solid #498afb;
}

#signup {
  border: 1px solid #ff3860;
}

#signup a {
  color: #ff3860;
}

#login a {
  color: #498afb;
}

#quote a {
  color: #662D91;
}

#hamburger-icon {
  margin: auto 0;
  display: none;
  cursor: pointer;
}

#hamburger-icon div {
  width: 35px;
  height: 3px;
  background-color: #662D91;;
  margin: 6px 0;
  transition: 0.4s;
}

.open .bar1 {
  -webkit-transform: rotate(-45deg) translate(-6px, 6px);
  transform: rotate(-45deg) translate(-6px, 6px);
}

.open .bar2 {
  opacity: 0;
}

.open .bar3 {
  -webkit-transform: rotate(45deg) translate(-6px, -8px);
  transform: rotate(45deg) translate(-6px, -8px);
}

.open .mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.mobile-menu {
  display: none;
  position: absolute;
  top: 50px;
  left: 0;
  height: calc(100vh - 50px);
  width: 100%;
}

.mobile-menu li {
  margin-bottom: 10px;
}

@media only screen and (max-width: 800px) {
  nav .menu {
    display: none;
  }

  #hamburger-icon {
    display: block;
  }
}
</style>