<nav id="nav" class="navbar">
    <div class="inner container-fluid">
        <a class="navbarLogo" href="#home"> 
            <img src="/assets/LuckyXP_LOGO.png" alt="Lucky XP Logo" width=247px height=64px> 
        </a>
        <div class="navbarMenu">
          <ul>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/contact">Contact Us</a>
            </li>
            <li>
            <a href="/team">Our Team</a>
            </li>
            <li>
            <a href="/new_staff">New Staff</a>
            </li>
          </ul>
        </div>
    </div>
</nav>

<style>

nav {
overflow: hidden;
background-color: rgb(255, 255, 255);
height: 4rem;
padding: 1rem;
position: sticky;
top: 0;
z-index: 10;
}

.container-fluid {
    display: flex;
    align-items: center;
}

.navbarLogo {
    display: inline-block;
}

.navbarMenu{
  margin-left: 3rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  float: right;
}

.navbarMenu li {
  display: inline-block;
}


/* Style the links inside the navigation bar */
.navbarMenu a {
  color: #662D91;
  padding: 0 1rem;
  text-decoration: none;
  font-size: 1.3rem;
  text-transform: uppercase;
  float: right;
  text-align: left;
}

/* Change the color of links on hover */
.navbarMenu a:hover {
  color: #7F68CA;
}

</style>




<!--
<script>
  import { onMount } from "svelte";

  // Show mobile icon and display menu
  let showMobileMenu = false;

  // List of navigation items
  const navItems = [
    { label: "HOME", href: "#" },
    { label: "ABOUT US", href: "#" },
    { label: "CONTACT US", href: "#" },
    { label: "OUR TEAM", href: "#" }
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
    const mediaListener = window.matchMedia("(max-width: 767px)");

    mediaListener.addListener(mediaQueryHandler);
  });
</script>

<nav>
  <div class="inner">
    <img src="/assets/LuckXP_LOGO.png" alt="Lucky XP Logo" width="100" height="55">
    <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
      <div class="middle-line"></div>
    </div>
    <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
      {#each navItems as item}
        <li>
          <a href={item.href}>{item.label}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  nav {
    background-color: rgb(255, 255, 255);
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    height: 60px;
  }

  .inner {
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .mobile-icon {
    width: 25px;
    height: 14px;
    position: relative;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
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
    justify-content: space-between;
    margin: 0;
    padding: 0 40px;
  }

  .navbar-list.mobile {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: block;
    height: calc(100% - 45px);
    bottom: 0;
    left: 0;
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
    height: 1px;
    background-color: #ffffff;
  }

  .navbar-list a {
    color: #662d91;
    text-decoration: none;
    font-weight: 400;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 10px;
    font-size: 18px;
  }

  @media only screen and (min-width: 767px) {
    .mobile-icon {
      display: none;
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
    }
  }
</style>
-->