<script>
  import { onMount } from 'svelte';
  import { submitToGoogleSheets, validateContactForm } from '$lib/utils/googleSheetsIntegration.js';

  // Form data
  let formData = {
    name: '',
    email: '',
    phone: '',
    subject: 'Emergency Assistance Needed',
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
      // Submit with emergency form type
      const success = await submitToGoogleSheets(formData, 'emergency');

      if (success) {
        // Reset form on success
        formData = {
          name: '',
          email: '',
          phone: '',
          subject: 'Emergency Assistance Needed',
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
  <title>Emergency Contact | Palm Build Restoration</title>
  <meta name="description" content="Contact Palm Build Restoration for 24/7 emergency restoration services. We're standing by to help in your time of need." />
</svelte:head>

<div class="contact-page emergency-contact">
  <!-- Page Header -->
  <div class="page-header red-bg">
    <div class="container">
      <h1>Emergency Contact</h1>
      <p>We're available 24/7 for your emergency restoration needs</p>
    </div>
  </div>

  <!-- Contact form options -->
  <section class="contact-options-section">
    <div class="container">
      <h2 class="text-center">How Can We Help You?</h2>
      <div class="contact-options">
        <div class="contact-option emergency-option current-option">
          <div class="option-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <h3>Emergency Services</h3>
          <p>Need immediate assistance for water damage, fire damage, or other emergencies? Our team is available 24/7.</p>
          <span class="btn btn-danger disabled">You're Here</span>
        </div>

        <div class="contact-option general-option">
          <div class="option-icon">
            <i class="fas fa-envelope"></i>
          </div>
          <h3>General Inquiries</h3>
          <p>Have questions about our services or want to learn more about Palm Build Restoration? We're here to help.</p>
          <a href="/contact" class="btn btn-primary">General Contact</a>
        </div>

        <div class="contact-option quote-option">
          <div class="option-icon">
            <i class="fas fa-file-invoice-dollar"></i>
          </div>
          <h3>Request a Quote</h3>
          <p>Looking for a detailed estimate for your restoration or construction project? Get a comprehensive quote.</p>
          <a href="/contact/quote" class="btn btn-info">Request Quote</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="contact-grid">
        <!-- Contact Information -->
        <div class="contact-info-container">
          <h2>Emergency Response</h2>
          <p>Our emergency response team is available 24/7 to address urgent restoration needs. Please provide details about your emergency, and we'll respond as quickly as possible.</p>

          <div class="emergency-box">
            <div class="info-icon emergency-icon">
              <i class="fas fa-exclamation-triangle"></i>
            </div>
            <div class="info-content">
              <h3>Call Now For Immediate Help</h3>
              <p class="emergency-phone"><a href="tel:+19546412018">+1 (954) 641-2018</a></p>
              <p>Our team is ready to assist you right away.</p>
            </div>
          </div>

          <div class="info-box">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info-content">
              <h3>Our Location</h3>
              <p>378 Crompton Street<br />Charlotte, NC 28273</p>
            </div>
          </div>

          <div class="info-box">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-content">
              <h3>Email Us</h3>
              <p>Emergencies: <a href="mailto:emergency@palmbld.com">emergency@palmbld.com</a></p>
            </div>
          </div>

          <div class="service-areas-box">
            <h3>Service Areas</h3>
            <p>Serving Florida, North Carolina, South Carolina, Georgia, Texas, Tennessee, and New Jersey.</p>
          </div>
        </div>

        <!-- Emergency Contact Form -->
        <div class="contact-form-container emergency-form">
          <h2>Emergency Assistance Form</h2>
          <p>Fill out this form with details about your emergency. We will respond immediately.</p>

          {#if formSuccess}
            <div class="alert success">
              <i class="fas fa-check-circle"></i> Your emergency request has been submitted. We'll contact you immediately.
            </div>
          {/if}

          {#if formError}
            <div class="alert error">
              <i class="fas fa-exclamation-circle"></i> There was an error submitting your form. Please call us directly for immediate assistance.
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
              <label for="subject">Emergency Type*</label>
              <input
                type="text"
                id="subject"
                bind:value={formData.subject}
                class:error={formSubmitted && errors.subject}
                placeholder="Type of emergency"
              />
              {#if formSubmitted && errors.subject}
                <span class="error-message">{errors.subject}</span>
              {/if}
            </div>

            <div class="form-group">
              <label for="message">Emergency Details*</label>
              <textarea
                id="message"
                bind:value={formData.message}
                class:error={formSubmitted && errors.message}
                placeholder="Please provide details about your emergency situation"
                rows="5"
              ></textarea>
              {#if formSubmitted && errors.message}
                <span class="error-message">{errors.message}</span>
              {/if}
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary emergency-btn">Submit Emergency Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .red-bg {
    background-color: #d9534f;
    color: white;

  }

  .emergency-contact .page-header {
    border-bottom: 5px solid #c9302c;
  }

  /* Page Header Styling */
  .page-header {
    text-align: center;
    padding: 3rem 0;
  }

  .page-header h1 {
    font-size: 2.5rem;
    color: var(--neutral-white);
    margin-bottom: 0.5rem;
  }

  .page-header p {
    font-size: 1.2rem;
    color: var(--neutral-light);
    opacity: 0.9;
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

  .btn-info {
    background-color: #2196F3;
    border-color: #1976D2;
    color: white;
  }

  .btn-info:hover {
    background-color: #1976D2;
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

  .emergency-box {
    background-color: rgba(217, 83, 79, 0.1);
    border-left: 4px solid #d9534f;
    padding: 15px;
    margin-bottom: 25px;
    border-radius: 4px;
  }

  .emergency-icon i {
    color: #d9534f;
  }

  .emergency-phone a {
    font-size: 24px;
    font-weight: bold;
    color: #d9534f;
    text-decoration: none;
  }

  .emergency-phone a:hover {
    text-decoration: underline;
  }

  .emergency-form button.emergency-btn {
    background-color: #d9534f;
    border-color: #c9302c;
  }

  .emergency-form button.emergency-btn:hover {
    background-color: #c9302c;
  }

  /* Contact Grid Styles */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  .contact-info-container,
  .contact-form-container {
    background-color: var(--neutral-white);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    padding: 2rem;
  }

  .emergency-box {
    background-color: rgba(217, 83, 79, 0.1);
    border-left: 4px solid #d9534f;
    padding: 15px;
    margin-bottom: 25px;
    border-radius: 4px;
  }

  .emergency-icon i {
    color: #d9534f;
  }

  .emergency-phone a {
    font-size: 24px;
    font-weight: bold;
    color: #d9534f;
    text-decoration: none;
  }

  .emergency-phone a:hover {
    text-decoration: underline;
  }

  .emergency-form button.emergency-btn:hover {
    background-color: #c9302c;
  }

  /* Responsive Styles for Contact Grid */
  @media (max-width: 992px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  /* Form Styles */
  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--primary-dark);
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--neutral-gray);
    border-radius: 4px;
    font-family: var(--font-body);
    transition: border-color 0.3s;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--accent);
  }

  input.error,
  textarea.error {
    border-color: var(--accent-alt);
  }

  .error-message {
    color: var(--accent-alt);
    font-size: 0.85rem;
    margin-top: 0.25rem;
    display: block;
  }

  .form-actions {
    margin-top: 1.5rem;
  }

  .btn-block {
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    letter-spacing: 1px;
  }

  .alert {
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .alert.success {
    background-color: rgba(76, 175, 80, 0.1);
    color: #2e7d32;
    border: 1px solid rgba(76, 175, 80, 0.3);
  }

  .alert.error {
    background-color: rgba(244, 67, 54, 0.1);
    color: #c62828;
    border: 1px solid rgba(244, 67, 54, 0.3);
  }

  /* Honeypot field styling - hide it from human users */
  .honeypot-field {
    position: absolute;
    left: -9999px;
    visibility: hidden;
    opacity: 0;
    height: 0;
    width: 0;
    z-index: -1;
    overflow: hidden;
  }
</style>
