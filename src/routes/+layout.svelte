<script>
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.scss';
</script>

<svelte:head>
  <title>Australian Association for Professional and Applied Ethics</title>
  <meta name="description" content="The AAPAE encourages awareness of applied ethics as a significant area of concern and fosters discussion of issues in applied ethics." />
  <meta name="keywords" content="professional applied ethics australia" />
</svelte:head>

<Nav />
<slot />
<Footer />
