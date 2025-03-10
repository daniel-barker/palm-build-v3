<script>
    // Accept props for phone number and text
    export let phoneNumber = "+18882455155";
    export let buttonText = "Emergency Response";
    export let className = ""; // Additional classes
    export let icon = true; // Show icon or not
</script>

<a href="tel:{phoneNumber}" class="emergency-btn {className}">
    {#if icon}
    <i class="fas fa-phone-alt"></i>
    {/if}
    {buttonText}
</a>

<style>
    .emergency-btn {
        background-color: var(--accent-alt);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 600;
        font-family: var(--font-heading);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: background-color 0.3s ease;
        text-align: center;
    }

    .emergency-btn:hover {
        background-color: #d32f2f;
    }
</style>
