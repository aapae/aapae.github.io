<script>
  import PostList from '$lib/components/PostList.svelte';
  export let data;
</script>

<svelte:head>
  <title>Events – AAPAE</title>
</svelte:head>

<section class="events-page">
  <div class="wrapper">
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">Events</h1>
      </header>
      <PostList posts={data.posts} basePath="/events" showDate={false} />
    </div>
  </div>
</section>
