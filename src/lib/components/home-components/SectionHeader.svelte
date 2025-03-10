<script>
    export let title = "";
    export let subtitle = "";
    export let light = false;
    export let accentWord = "";

    // If accentWord is provided, highlight that word in the title
    let formattedTitle = accentWord ?
        title.replace(accentWord, `<span class="accent-text">${accentWord}</span>`) :
        title;
</script>

<div class="section-header {light ? 'light' : ''}">
    <h2>{@html formattedTitle}</h2>
    <p>{subtitle}</p>
</div>

<style>
    .section-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .section-header h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    .section-header p {
        font-size: 1.1rem;
        max-width: 700px;
        margin: 0 auto;
    }

    .light {
        color: var(--neutral-white);
    }

    :global(.accent-text) {
        color: var(--accent);
    }

    @media (max-width: 768px) {
        .section-header h2 {
            font-size: 2rem;
        }
    }
</style>
