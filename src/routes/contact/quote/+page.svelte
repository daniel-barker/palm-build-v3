<script>
  import { onMount } from 'svelte';
  import { submitToGoogleSheets, validateContactForm } from '$lib/utils/googleSheetsIntegration.js';

  // Form data
  let formData = {
    name: '',
    email: '',
    phone: '',
    subject: 'Quote Request',
    message: '',
    website: '' // This is our honeypot field
  };

  // Form validation
  /** @type {{ name?: string, email?: string, phone?: string, subject?: string, message?: string }} */
  let errors = {};
  let formSubmitted = false;
  let formSuccess = false;
  let formError = false;

  // Validate form
  function validateForm() {
    // Check honeypot field - if it's filled, it's likely a bot
    if (formData.website) {
      console.log('Honeypot triggered - likely a bot submission');
      // Pretend the form was successful to the bot, but don't actually process it
      return false;
    }

    errors = validateContactForm(formData);
    return Object.keys(errors).length === 0;
  }

  // Handle form submission
  async function handleSubmit() {
    formSubmitted = true;

    if (!validateForm()) {
      return;
    }

    try {
      // Submit with quote form type
      const success = await submitToGoogleSheets(formData, 'quote');

      if (success) {
        // Reset form on success
        formData = {
          name: '',
          email: '',
          phone: '',
          subject: 'Quote Request',
          message: '',
          website: ''
        };
        formSubmitted = false;
        formSuccess = true;
        setTimeout(() => {
          formSuccess = false;
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      formError = true;
      setTimeout(() => {
        formError = false;
      }, 5000);
    }
  }

  onMount(() => {
    // Any initialization code here if needed
  });
</script>

<svelte:head>
  <title>Request a Quote | Palm Build Restoration</title>
  <meta name="description" content="Request a quote from Palm Build Restoration for your restoration, remediation, or construction projects." />
</svelte:head>

<div class="contact-page quote-contact">
  <!-- Page Header -->
  <div class="page-header blue-bg">
    <div class="container">
      <h1>Request a Quote</h1>
      <p>Get a detailed estimate for your restoration or construction project</p>
    </div>
  </div>

  <!-- Contact form options -->
  <section class="contact-options-section">
    <div class="container">
      <h2 class="text-center">How Can We Help You?</h2>
      <div class="contact-options">
        <div class="contact-option emergency-option">
          <div class="option-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <h3>Emergency Services</h3>
          <p>Need immediate assistance for water damage, fire damage, or other emergencies? Our team is available 24/7.</p>
          <a href="/contact/emergency" class="btn btn-danger">Emergency Contact</a>
        </div>

        <div class="contact-option general-option">
          <div class="option-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <h3>General Inquiries</h3>
          <p>Have questions about our services or want to learn more about Palm Build Restoration? We're here to help.</p>
          <a href="/contact" class="btn btn-primary">General Contact</a>
        </div>

        <div class="contact-option quote-option current-option">
          <div class="option-icon">
            <i class="fas fa-file-invoice-dollar"></i>
          </div>
          <h3>Request a Quote</h3>
          <p>Looking for a detailed estimate for your restoration or construction project? Get a comprehensive quote.</p>
          <span class="btn btn-info disabled">You're Here</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="contact-grid">
        <!-- Contact Information -->
        <div class="contact-info-container">
          <h2>Get Your Free Quote</h2>
          <p>Fill out the form to request a detailed quote for your project. Our team will analyze your needs and provide a comprehensive estimate.</p>

          <div class="quote-box">
            <div class="info-icon quote-icon">
              <i class="fas fa-file-invoice-dollar"></i>
            </div>
            <div class="info-content">
              <h3>What to Expect</h3>
              <ul class="quote-list">
                <li>Detailed cost breakdown</li>
                <li>Project timeline estimate</li>
                <li>Custom solutions for your specific needs</li>
                <li>Transparent pricing with no hidden fees</li>
              </ul>
            </div>
          </div>

          <div class="info-box">
            <div class="info-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="info-content">
              <h3>Speak to an Estimator</h3>
              <p>Call: <a href="tel:+19546412018">+1 (954) 641-2018</a></p>
            </div>
          </div>

          <div class="info-box">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-content">
              <h3>Email Us</h3>
              <p>Quotes: <a href="mailto:quotes@palmbld.com">quotes@palmbld.com</a></p>
            </div>
          </div>

          <div class="service-areas-box">
            <h3>Service Areas</h3>
            <p>Serving Florida, North Carolina, South Carolina, Georgia, Texas, Tennessee, and New Jersey.</p>
          </div>
        </div>

        <!-- Quote Form -->
        <div class="contact-form-container quote-form">
          <h2>Request Your Quote</h2>
          <p>Please provide details about your project for an accurate quote.</p>

          {#if formSuccess}
            <div class="alert success">
              <i class="fas fa-check-circle"></i> Thank you for your quote request! We'll prepare your estimate and contact you shortly.
            </div>
          {/if}

          {#if formError}
            <div class="alert error">
              <i class="fas fa-exclamation-circle"></i> There was an error submitting your form. Please try again or call us directly.
            </div>
          {/if}

          <form on:submit|preventDefault={handleSubmit}>
            <div class="honeypot-field">
              <label for="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                autocomplete="off"
                bind:value={formData.website}
                tabindex="-1"
              />
            </div>

            <div class="form-group">
              <label for="name">Full Name*</label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                class:error={formSubmitted && errors.name}
                placeholder="Your full name"
              />
              {#if formSubmitted && errors.name}
                <span class="error-message">{errors.name}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="email">Email Address*</label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                class:error={formSubmitted && errors.email}
                placeholder="Your email address"
              />
              {#if formSubmitted && errors.email}
                <span class="error-message">{errors.email}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="phone">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                bind:value={formData.phone}
                class:error={formSubmitted && errors.phone}
                placeholder="Your phone number"
              />
              {#if formSubmitted && errors.phone}
                <span class="error-message">{errors.phone}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="subject">Project Type*</label>
              <input
                type="text"
                id="subject"
                bind:value={formData.subject}
                class:error={formSubmitted && errors.subject}
                placeholder="Type of project (e.g., Water Damage Restoration)"
              />
              {#if formSubmitted && errors.subject}
                <span class="error-message">{errors.subject}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="message">Project Details*</label>
              <textarea
                id="message"
                bind:value={formData.message}
                class:error={formSubmitted && errors.message}
                placeholder="Please describe your project in detail including size, scope, timeline, and any special requirements"
                rows="5"
              ></textarea>
              {#if formSubmitted && errors.message}
                <span class="error-message">{errors.message}</span>
              {/if}
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary quote-btn">Request Quote</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .blue-bg {
    background-color: #2196F3;
    color: white;
  }

  .quote-contact .page-header {
    border-bottom: 5px solid #1976D2;
  }

  /* Contact Options Section */
  .contact-options-section {
    padding: 3rem 0;
    background-color: var(--neutral-lightest);
  }

  .contact-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
  }

  .contact-option {
    background-color: var(--neutral-white);
    border-radius: 8px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .contact-option:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .option-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
  }

  .emergency-option .option-icon {
    background-color: rgba(217, 83, 79, 0.1);
    color: #d9534f;
  }

  .general-option .option-icon {
    background-color: rgba(var(--primary-rgb), 0.1);
    color: var(--primary);
  }

  .quote-option .option-icon {
    background-color: rgba(33, 150, 243, 0.1);
    color: #2196F3;
  }

  .contact-option h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .contact-option p {
    margin-bottom: 1.5rem;
    color: var(--neutral-medium);
  }

  .btn-danger {
    background-color: #d9534f;
    border-color: #c9302c;
    color: white;
  }

  .btn-danger:hover {
    background-color: #c9302c;
  }

  .btn-primary {
    background-color: var(--primary);
    border-color: var(--primary-dark);
    color: white;
  }

  .btn-primary:hover {
    background-color: var(--primary-dark);
  }

  .disabled {
    opacity: 0.7;
    cursor: default;
    pointer-events: none;
  }

  /* Responsive Styles for Contact Options */
  @media (max-width: 992px) {
    .contact-options {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .quote-box {
    background-color: rgba(33, 150, 243, 0.1);
    border-left: 4px solid #2196F3;
    padding: 15px;
    margin-bottom: 25px;
    border-radius: 4px;
  }

  .quote-icon i {
    color: #2196F3;
  }

  .quote-list {
    padding-left: 20px;
    margin-top: 10px;
  }

  .quote-list li {
    margin-bottom: 8px;
  }

  .quote-form button.quote-btn {
    background-color: #2196F3;
    border-color: #1976D2;
  }

  .quote-form button.quote-btn:hover {
    background-color: #1976D2;
  }
</style>
