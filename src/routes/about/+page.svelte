<script>
  export let data;
</script>

<svelte:head>
  <title>About Us – AAPAE</title>
</svelte:head>

<section class="about-page">
  <div class="wrapper">
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">{data.metadata.title}</h1>
      </header>
      <article class="post-content">
        {@html data.html}
      </article>

      <section class="people">
        <h2>Executive Committee</h2>
        <ul class="post-list">
          {#each data.people as person}
            <li class="post">
              <h2><span class="post-link">{person.name}</span></h2>
              <span class="post-meta">{person.role}</span>
              <div class="contact">
                {#if person.affiliation}<span class="detail">{person.affiliation}</span>{/if}
                {#if person.address}<span class="detail">{person.address}</span>{/if}
                {#if person.phone}<span class="detail">{person.phone}</span>{/if}
                {#if person.email}<span class="detail"><a href="mailto:{person.email}">{person.email}</a></span>{/if}
                {#if person.blog}<span class="detail"><a href="{person.blog}">{person.blog}</a></span>{/if}
              </div>
              {#if person.bio}
                <div class="bio">{@html person.bio}</div>
              {/if}
            </li>
          {/each}
        </ul>
      </section>
    </div>
  </div>
</section>
