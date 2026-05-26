<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  let query = '';
  let results = [];
  let searched = false;
  let loading = false;

  onMount(async () => {
    query = $page.url.searchParams.get('q') ?? '';
    if (!query) return;

    loading = true;
    const res = await fetch('/feeds/feed.json');
    const feed = await res.json();
    const q = query.toLowerCase();

    results = feed.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q)
    );

    loading = false;
    searched = true;
  });

  function handleSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams({ q: query });
    window.location.search = params.toString();
  }
</script>

<svelte:head>
  <title>Search – AAPAE</title>
</svelte:head>

<section>
  <div class="wrapper">
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">Search</h1>
      </header>

      <form class="search-form" on:submit={handleSubmit}>
        <input
          type="search"
          bind:value={query}
          placeholder="Enter search term"
          aria-label="Search"
        />
        <button type="submit">Search</button>
      </form>

      <div class="search-results">
        {#if loading}
          <p>Searching…</p>
        {:else if searched}
          <p>{results.length} result{results.length !== 1 ? 's' : ''} found for &ldquo;{query}&rdquo;</p>
          <ul class="post-list">
            {#each results as item}
              <li class="post">
                <h2><a class="post-link" href={item.link}>{item.title}</a></h2>
                {#if item.excerpt}
                  <div class="excerpt"><p>{item.excerpt}</p></div>
                {/if}
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .search-form {
    display: flex;
    gap: 0.5rem;
    margin: 1.5rem 0;

    input[type="search"] {
      flex: 1;
      padding: 0.5em 0.75em;
      font-size: 1rem;
      font-family: inherit;
      border: 1px solid var(--color-dark);
      border-radius: 3px;
    }

    button {
      padding: 0.5em 1em;
      background: var(--color-dark);
      color: white;
      border: none;
      border-radius: 3px;
      font-family: inherit;
      font-size: 1rem;
      cursor: pointer;
      &:hover { background: var(--color-dark-lightened); }
    }
  }
</style>
