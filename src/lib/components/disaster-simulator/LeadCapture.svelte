<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    // Props
    export let emergencyType: string;
    export let severity: string;
    export let location: string;

    // Create a dispatcher to send events back to the parent
    const dispatch = createEventDispatcher<{
        submitted: { userInfo: UserInfo };
        back: void;
    }>();

    // User information type
    interface UserInfo {
        name: string;
        email: string;
        phone: string;
        address: string;
        propertyType: string;
        notes: string;
    }

    // Form state
    let userInfo: UserInfo = {
        name: '',
        email: '',
        phone: '',
        address: '',
        propertyType: 'residential',
        notes: ''
    };

    // Validation state
    let errors: Partial<Record<keyof UserInfo, string>> = {};
    let isSubmitting = false;

    // Emergency type labels for display
    const typeLabels: Record<string, string> = {
        fire: 'Fire & Smoke Damage',
        water: 'Water Damage',
        mold: 'Mold Contamination',
        storm: 'Storm Damage',
        asbestos: 'Asbestos Concern'
    };

    // Property types
    const propertyTypes = [
        { id: 'residential', label: 'Residential Home' },
        { id: 'condo', label: 'Condo/Apartment' },
        { id: 'commercial', label: 'Commercial Building' },
        { id: 'industrial', label: 'Industrial Property' },
        { id: 'other', label: 'Other' }
    ];

    // Validate the form
    function validateForm(): boolean {
        errors = {};

        if (!userInfo.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!userInfo.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(userInfo.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!userInfo.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(userInfo.phone)) {
            errors.phone = 'Please enter a valid phone number';
        }

        if (!userInfo.address.trim()) {
            errors.address = 'Address is required';
        }

        return Object.keys(errors).length === 0;
    }

    // Submit the form
    function submitForm() {
        if (!validateForm()) return;

        isSubmitting = true;

        // Simulate submission delay
        setTimeout(() => {
            dispatch('submitted', { userInfo });
            isSubmitting = false;
        }, 1500);
    }

    // Go back
    function goBack() {
        dispatch('back');
    }
</script>

<div class="lead-capture">
    <h3>Get Your Personal Response Plan</h3>
    <p class="form-description">
        We'll create a customized {severity} {typeLabels[emergencyType]} response plan for your
        property in {location}.
    </p>

    <form on:submit|preventDefault={submitForm}>
        <div class="form-field">
            <label for="name">Full Name</label>
            <input
                type="text"
                id="name"
                bind:value={userInfo.name}
                placeholder="Enter your full name"
                class:error={errors.name}
            />
            {#if errors.name}
                <div class="error-message">{errors.name}</div>
            {/if}
        </div>

        <div class="form-field">
            <label for="email">Email Address</label>
            <input
                type="email"
                id="email"
                bind:value={userInfo.email}
                placeholder="Enter your email"
                class:error={errors.email}
            />
            {#if errors.email}
                <div class="error-message">{errors.email}</div>
            {/if}
        </div>

        <div class="form-field">
            <label for="phone">Phone Number</label>
            <input
                type="tel"
                id="phone"
                bind:value={userInfo.phone}
                placeholder="(123) 456-7890"
                class:error={errors.phone}
            />
            {#if errors.phone}
                <div class="error-message">{errors.phone}</div>
            {/if}
        </div>

        <div class="form-field">
            <label for="address">Property Address</label>
            <input
                type="text"
                id="address"
                bind:value={userInfo.address}
                placeholder="Enter the affected property address"
                class:error={errors.address}
            />
            {#if errors.address}
                <div class="error-message">{errors.address}</div>
            {/if}
        </div>

        <div class="form-field">
            <label for="propertyType">Property Type</label>
            <select id="propertyType" bind:value={userInfo.propertyType}>
                {#each propertyTypes as type}
                    <option value={type.id}>{type.label}</option>
                {/each}
            </select>
        </div>

        <div class="form-field">
            <label for="notes">Additional Notes (Optional)</label>
            <textarea
                id="notes"
                bind:value={userInfo.notes}
                placeholder="Any additional details about your situation that might help us prepare"
                rows="3"
            ></textarea>
        </div>

        <div class="privacy-notice">
            <p>
                By submitting this form, you consent to receiving communications from Palm Build
                regarding your restoration needs. We respect your privacy and will never share your
                information with third parties.
            </p>
        </div>

        <div class="form-actions">
            <button type="button" class="back-button" on:click={goBack}>
                Back
            </button>

            <button type="submit" class="submit-button" disabled={isSubmitting}>
                {#if isSubmitting}
                    <i class="fas fa-spinner fa-spin"></i> Sending...
                {:else}
                    Get My Response Plan
                {/if}
            </button>
        </div>
    </form>
</div>

<style>
    .lead-capture {
        padding: 1rem;
    }

    h3 {
        color: var(--primary);
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    .form-description {
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
    }

    .form-field {
        margin-bottom: 1.25rem;
    }

    label {
        display: block;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--primary-dark);
        font-size: 0.95rem;
    }

    input, select, textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1rem;
        font-family: inherit;
    }

    input.error, select.error, textarea.error {
        border-color: #e53935;
    }

    .error-message {
        color: #e53935;
        font-size: 0.85rem;
        margin-top: 0.25rem;
    }

    .privacy-notice {
        background-color: #f5f5f5;
        padding: 0.75rem;
        border-radius: 4px;
        margin: 1.5rem 0;
    }

    .privacy-notice p {
        margin: 0;
        font-size: 0.8rem;
        color: var(--text-secondary);
    }

    .form-actions {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }

    .back-button {
        background-color: #f5f5f5;
        color: var(--text-dark);
        border: none;
        border-radius: 4px;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .back-button:hover {
        background-color: #e0e0e0;
    }

    .submit-button {
        background-color: var(--primary);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        flex-grow: 1;
    }

    .submit-button:hover {
        background-color: var(--primary-dark);
        transform: translateY(-2px);
    }

    .submit-button:disabled {
        background-color: var(--neutral-grey);
        transform: none;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        .form-actions {
            flex-direction: column;
        }

        .back-button, .submit-button {
            width: 100%;
        }
    }
</style>
