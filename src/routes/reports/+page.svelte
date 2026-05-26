<script>
  import PostList from '$lib/components/PostList.svelte';
  export let data;
</script>

<svelte:head>
  <title>Reports – AAPAE</title>
</svelte:head>

<section>
  <div class="wrapper">
    <div class="post">
      <header class="post-header">
        <h1 class="post-title">Reports</h1>
      </header>
      <PostList posts={data.posts} basePath="/reports" />
    </div>
  </div>
</section>
