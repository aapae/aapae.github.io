<script>
  export let displayBanner = false;
</script>

<div class="topbar">
  {#if displayBanner}
    <p class="notice">
      <a href="/events/cfp-ethics-of-ai">
        Call for papers: The Ethics of Artificial Intelligence and the
        Professions<br />
        Special edition of Research in Ethical Issues in Organizations, the official
        journal of the AAPAE.
      </a>
    </p>
  {/if}

  <div class="site navigation">
    <nav>
      <input type="checkbox" id="nav-toggle" hidden />
      <label for="nav-toggle" class="trigger">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-list menu"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
        AAPAE
      </label>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/membership">Join Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/newsletters">Newsletters, etc</a></li>
        <li>
          <a href="https://ethicsolympiad.org/?page_id=6616">Ethics Olympiad</a>
        </li>
        <li class="search-nav"><a href="/search">Search</a></li>
      </ul>
    </nav>

    <form class="search-bar" action="/search" method="get">
      <div class="search-and-submit">
        <input type="search" placeholder="Enter Search" name="q" id="q" />
        <button type="submit">
          <img
            src="https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png"
            alt="Search"
          />
        </button>
      </div>
    </form>
  </div>
</div>
