<script>
  import { onMount } from "svelte";

  // Show mobile icon and display menu
  let showMobileMenu = false;

  // List of navigation items
  const navItems = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact_us" },
    { label: "Our Team", href: "/team" },
    { label: "New Staff", href: "/newstaff" },
    { label: "Request a Quote", href: "/quote" }
  ];

  // Mobile menu click event handler
  const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);

  // Media match query handler
  const mediaQueryHandler = e => {
    // Reset mobile state
    if (!e.matches) {
      showMobileMenu = false;
    }
  };

  // Attach media query listener on mount hook
  onMount(() => {
    const mediaListener = window.matchMedia("(max-width: 800px)");
    mediaListener.addListener(mediaQueryHandler);
  });
</script>

<nav>
  <div class="inner">
    <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
      <div class="middle-line"></div>
    </div>
    <a class="navbarLogo" href="/#"> <img src="/assets/LuckyXP_LOGO.png" alt="Lucky XP Logo"> </a>
    <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
      {#each navItems as item}
        <li><a href={item.href}>{item.label}</a></li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  nav {
    background-color: rgb(255, 255, 255);
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    height: 5rem;
    box-shadow: 0px 6px 17px -9px rgba(0,0,0,0.3);
  }

  ul {
    padding: 0;
  }

  .inner {
    max-width: 75rem;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .mobile-icon {
    width: 25px;
    height: 14px;
    position: absolute;
    right: 2rem;
    cursor: pointer;
  }

  .navbarLogo img {
  width: auto;
  height: 3.5rem;
  margin-left: 0.3rem;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #662D91;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    width: 100%;
    margin: 0;
  }

  .navbar-list.mobile {
    background-color: rgba(102, 45, 145, 0.85);
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100% - 5rem);
    bottom: 0;
    left: 0;
    z-index: 20;
    padding: -40px;
  }


  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list li:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0px;
    background-color: #49007d;
  }

  .navbar-list a {
    color: #ffffff;
    text-decoration: none;
    display: flex;
    height: 4rem;
    align-items: center;
    align-content: center;
    font-size: 2rem;
    font-weight: 500;
  }

  @media only screen and (min-width: 850px) {

    nav {
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .mobile-icon {
      display: none;
    }

    .navbar-list {
      justify-content: space-between;
      display: flex;
      padding: 0;
      margin-left: 7rem;
      margin-right: 0.5rem;
    }

    .navbar-list li {
    text-align: center;
    }

    .navbar-list a {
      display: inline-flex;
      font-size: 1.3rem;
      color: #662d91;
      padding: 0 10px;
    }
  }

@media only screen and (max-width: 850px){
  .navbarLogo img {
    margin-left: 1rem;
  }

}

@media only screen and (max-width: 1200px) {
  .navbarLogo img {
  padding-left: 0.6rem;
}

 }

</style>