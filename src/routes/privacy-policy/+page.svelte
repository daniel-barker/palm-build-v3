<script>
    import { onMount } from 'svelte';

    // Set page title and meta description
    onMount(() => {
        document.title = 'Privacy Policy | Palm Build Restoration';
    });
</script>

<div class="container py-12">
    <div class="max-w-4xl mx-auto">
        <h1 class="page-title">Privacy Policy</h1>
        <p class="text-sm text-neutral-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

        <div class="policy-content">
            <section class="mb-8">
                <h2>Introduction</h2>
                <p>Palm Build Restoration ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                <p>This privacy policy applies to information we collect when you use our website, or when you otherwise interact with us.</p>
            </section>

            <section class="mb-8">
                <h2>Information We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul>
                    <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                    <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                    <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
                </ul>
            </section>

            <section class="mb-8">
                <h2>How We Use Your Information</h2>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul>
                    <li>To provide and maintain our services.</li>
                    <li>To notify you about changes to our services.</li>
                    <li>To provide customer support.</li>
                    <li>To gather analysis or valuable information so that we can improve our services.</li>
                    <li>To monitor the usage of our services.</li>
                    <li>To detect, prevent and address technical issues.</li>
                    <li>To provide you with news, special offers and general information about other services and events which we offer.</li>
                </ul>
            </section>

            <section class="mb-8">
                <h2>Cookies</h2>
                <p>We use cookies and similar tracking technologies to track the activity on our website and we hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.</p>
                <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>
            </section>

            <section class="mb-8">
                <h2>Data Security</h2>
                <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
            </section>

            <section class="mb-8">
                <h2>Third-Party Services</h2>
                <p>Our service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.</p>
            </section>

            <section class="mb-8">
                <h2>Children's Privacy</h2>
                <p>Our service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
            </section>

            <section class="mb-8">
                <h2>Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
            </section>

            <section class="mb-8">
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                    <li>By email: admin@palmbld.com</li>
                    <li>By phone: +1 (954) 641-2018</li>
                    <li>By mail: 378 Crompton Street, Charlotte, NC 28273</li>
                </ul>
            </section>
        </div>
    </div>
</div>

<style>
    .policy-content {
        line-height: 1.7;
    }

    .policy-content h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--primary);
    }

    .policy-content p, .policy-content ul {
        margin-bottom: 1rem;
    }

    .policy-content ul {
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
