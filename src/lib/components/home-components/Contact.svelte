<script>
    export let contactInfo = {
        offices: [
            "378 Crompton Street, Charlotte, NC 28273",
            "6451 N Federal Highway, Fort Lauderdale, FL 33308"
        ],
        phones: [
            { label: "Main", number: "+18882455155", display: "(888) 245-5155" }
        ],
        email: "admin@palmbld.com",
        hours: ["Monday-Friday: 8am - 6pm", "24/7 Emergency Response"],
        serviceAreas: ["Charlotte", "Fort Lauderdale", "Columbia", "Miami", "And surrounding areas"]
    };
</script>

<section id="contact" class="section dark-navy-bg">
    <div class="container">
        <div class="section-header light">
            <h2>Contact <span class="accent-text">Us</span></h2>
            <p>Get in touch with our team for emergency service or to schedule a free consultation.</p>
        </div>

        <div class="contact-container">
            <div class="contact-info">
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <h3>Our Offices</h3>
                        {#each contactInfo.offices as office}
                            <p>{@html office.replace(', ', '<br />')}</p>
                        {/each}
                    </div>
                </div>

                <div class="info-item">
                    <i class="fas fa-phone-alt emergency-text"></i>
                    <div>
                        <h3>Phone</h3>
                        {#each contactInfo.phones as phone}
                            <p>{phone.label}: <a href="tel:{phone.number}" class="emergency-link">{phone.display}</a></p>
                        {/each}
                    </div>
                </div>

                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <h3>Email</h3>
                        <p><a href="mailto:{contactInfo.email}">{contactInfo.email}</a></p>
                    </div>
                </div>

                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <div>
                        <h3>Hours</h3>
                        {#each contactInfo.hours as hour}
                            <p>{hour}</p>
                        {/each}
                    </div>
                </div>

                <div class="service-areas">
                    <h3>Service Areas</h3>
                    <p>We proudly serve the following areas:</p>
                    <div class="area-tags">
                        {#each contactInfo.serviceAreas as area}
                            <span>{area}</span>
                        {/each}
                    </div>
                </div>
            </div>

            <div class="contact-form">
                <h3>Request a Free Estimate</h3>
                <p class="form-info">
                    Fill out the form below or visit our
                    <a href="/contact/quote" class="accent-link">quote request page</a>
                    for more detailed estimates. For emergencies, please use our
                    <a href="/contact/emergency" class="emergency-link">emergency contact form</a>
                    or call directly.
                </p>
                <form>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">First name</label>
                            <input type="text" id="name" name="name" required placeholder="Your first name" />
                        </div>
                        <div class="form-group">
                            <label for="lastname">Last name</label>
                            <input type="text" id="lastname" name="lastname" required placeholder="Your last name" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" name="email" required placeholder="Your email" />
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" required placeholder="Your phone" />
                    </div>

                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Please describe your situation"
                        ></textarea>
                    </div>

                    <div class="form-actions">
                        <button type="submit" class="btn btn-accent">Send message</button>
                        <div class="alternative-actions">
                            <a href="/contact/quote" class="btn-text">Need a detailed quote?</a>
                            <a href="/contact/emergency" class="btn-text emergency-text">Have an emergency?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<style>
    .dark-navy-bg {
        background-color: var(--primary);
        color: var(--neutral-white);
    }

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

    .accent-text {
        color: var(--accent);
    }

    .contact-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }

    .info-item {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .info-item i {
        font-size: 1.5rem;
        color: var(--accent);
        margin-top: 0.5rem;
    }

    .info-item h3 {
        margin-bottom: 0.5rem;
    }

    .info-item p {
        margin-bottom: 0.5rem;
    }

    .emergency-text {
        color: var(--accent-alt);
    }

    .emergency-link {
        color: var(--accent-alt);
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .emergency-link:hover {
        color: var(--neutral-white);
        text-decoration: underline;
    }

    .service-areas {
        margin-top: 2rem;
    }

    .area-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }

    .area-tags span {
        padding: 0.5rem 1rem;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        font-size: 0.9rem;
    }

    .contact-form {
        background-color: rgba(255, 255, 255, 0.03);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 2rem;
    }

    .contact-form h3 {
        margin-bottom: 1.5rem;
        text-align: center;
        font-size: 1.5rem;
    }

    .form-row {
        display: flex;
        gap: 1rem;
    }

    .form-row .form-group {
        flex: 1;
    }

    .form-group {
        margin-bottom: 1.5rem;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        background-color: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        font-family: var(--font-body);
        color: var(--neutral-white);
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--accent);
        background-color: rgba(255, 255, 255, 0.08);
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }

    .checkbox-container {
        position: relative;
        padding-left: 35px;
        cursor: pointer;
        display: block;
        font-weight: normal;
    }

    .checkbox-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
    }

    .checkbox-container:hover input ~ .checkmark {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .checkbox-container input:checked ~ .checkmark {
        background-color: var(--accent);
    }

    .checkmark:after {
        content: '';
        position: absolute;
        display: none;
    }

    .checkbox-container input:checked ~ .checkmark:after {
        display: block;
    }

    .checkbox-container .checkmark:after {
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    .btn-accent {
        background-color: var(--accent);
        color: var(--neutral-white);
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        font-family: var(--font-heading);
        display: inline-block;
        width: 100%;
    }

    .btn-accent:hover {
        background-color: var(--accent-dark);
    }

    @media (max-width: 992px) {
        .contact-container {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 768px) {
        .section-header h2 {
            font-size: 2rem;
        }

        .form-row {
            flex-direction: column;
            gap: 0;
        }
    }

    .form-info {
        text-align: center;
        margin-bottom: 1.5rem;
        font-size: 0.95rem;
        line-height: 1.5;
    }

    .accent-link {
        color: var(--accent);
        text-decoration: underline;
        transition: color 0.3s ease;
    }

    .accent-link:hover {
        color: var(--accent-light);
    }

    .form-actions {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .alternative-actions {
        display: flex;
        justify-content: space-between;
        margin-top: 0.5rem;
    }

    .btn-text {
        color: var(--accent);
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s ease;
    }

    .btn-text:hover {
        text-decoration: underline;
    }
</style>
