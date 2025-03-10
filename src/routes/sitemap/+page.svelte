<script>
    import { onMount } from 'svelte';

    // Set page title and meta description
    onMount(() => {
        document.title = 'Sitemap | Palm Build Restoration';
    });
</script>

<div class="container py-12">
    <div class="max-w-4xl mx-auto">
        <h1 class="page-title">Sitemap</h1>
        <p class="mb-8">A complete list of all pages on our website.</p>

        <div class="sitemap-content">
            <section class="mb-10">
                <h2>Main Pages</h2>
                <ul class="sitemap-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </section>

            <section class="mb-10">
                <h2>Service Pages</h2>
                <ul class="sitemap-list">
                    <li><a href="/services/fire-damage">Fire & Smoke Restoration</a></li>
                    <li><a href="/services/water-damage">Water Restoration</a></li>
                    <li><a href="/services/mold-remediation">Mold Remediation</a></li>
                    <li><a href="/services/asbestos-abatement">Asbestos Abatement</a></li>
                    <li><a href="/services/reconstruction">Complete Reconstruction</a></li>
                </ul>
            </section>

            <section class="mb-10">
                <h2>Contact Options</h2>
                <ul class="sitemap-list">
                    <li><a href="/contact">General Contact</a></li>
                    <li><a href="/contact/emergency">Emergency Contact</a></li>
                    <li><a href="/contact/quote">Request a Quote</a></li>
                </ul>
            </section>

            <section class="mb-10">
                <h2>Resources</h2>
                <ul class="sitemap-list">
                    <li><a href="/testimonials">Testimonials</a></li>
                    <li><a href="/portfolio">Recent Projects</a></li>
                    <li><a href="/faq">Frequently Asked Questions</a></li>
                    <li><a href="/blog">Blog</a></li>
                </ul>
            </section>

            <section class="mb-10">
                <h2>Legal Information</h2>
                <ul class="sitemap-list">
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                </ul>
            </section>
        </div>
    </div>
</div>

<style>
    .sitemap-content {
        line-height: 1.7;
    }

    .sitemap-content h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--primary);
        padding-bottom: 0.5rem;
        border-bottom: 2px solid var(--primary-light);
    }

    .sitemap-list {
        list-style-type: none;
        margin-left: 1rem;
    }

    .sitemap-list li {
        margin-bottom: 0.75rem;
    }

    .sitemap-list a {
        color: var(--primary-dark);
        text-decoration: none;
        transition: all 0.2s ease;
        display: inline-block;
    }

    .sitemap-list a:hover {
        color: var(--accent);
        transform: translateX(5px);
    }

    .page-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--primary-dark);
        margin-bottom: 1rem;
    }
</style>
