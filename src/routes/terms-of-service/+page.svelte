<script>
    import { onMount } from 'svelte';

    // Set page title and meta description
    onMount(() => {
        document.title = 'Terms of Service | Palm Build Restoration';
    });
</script>

<div class="container py-12">
    <div class="max-w-4xl mx-auto">
        <h1 class="page-title">Terms of Service</h1>
        <p class="text-sm text-neutral-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div class="terms-content">
            <section class="mb-8">
                <h2>1. Introduction</h2>
                <p>Welcome to Palm Build Restoration. These Terms of Service ("Terms") govern your use of our website located at palmbuild.com (the "Service") operated by Palm Build Restoration ("we", "us", or "our").</p>
                <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
            </section>

            <section class="mb-8">
                <h2>2. Communications</h2>
                <p>By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing admin@palmbld.com.</p>
            </section>

            <section class="mb-8">
                <h2>3. Content</h2>
                <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post on or through the Service, including its legality, reliability, and appropriateness.</p>
                <p>By posting content on or through the Service, you represent and warrant that the content is yours and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms.</p>
            </section>

            <section class="mb-8">
                <h2>4. Prohibited Uses</h2>
                <p>You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:</p>
                <ul>
                    <li>In any way that violates any applicable national or international law or regulation.</li>
                    <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
                    <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                    <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
                </ul>
            </section>

            <section class="mb-8">
                <h2>5. Intellectual Property</h2>
                <p>The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Palm Build Restoration and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Palm Build Restoration.</p>
            </section>

            <section class="mb-8">
                <h2>6. Termination</h2>
                <p>We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
            </section>

            <section class="mb-8">
                <h2>7. Limitation of Liability</h2>
                <p>In no event shall Palm Build Restoration, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            </section>

            <section class="mb-8">
                <h2>8. Disclaimer</h2>
                <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
            </section>

            <section class="mb-8">
                <h2>9. Governing Law</h2>
                <p>These Terms shall be governed and construed in accordance with the laws of North Carolina, United States, without regard to its conflict of law provisions.</p>
                <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
            </section>

            <section class="mb-8">
                <h2>10. Changes to These Terms</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
            </section>

            <section class="mb-8">
                <h2>11. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us:</p>
                <ul>
                    <li>By email: admin@palmbld.com</li>
                    <li>By phone: (888) 245-5155</li>
                    <li>By mail: 378 Crompton Street, Charlotte, NC 28273</li>
                </ul>
            </section>
        </div>
    </div>
</div>

<style>
    .terms-content {
        line-height: 1.7;
    }

    .terms-content h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--primary);
    }

    .terms-content p, .terms-content ul {
        margin-bottom: 1rem;
    }

    .terms-content ul {
        list-style-type: disc;
        margin-left: 2rem;
    }

    .page-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--primary-dark);
        margin-bottom: 1rem;
    }
</style>
