<script>
  let isChatOpen = false;
</script>

<style>
  /* Chat Button Styles */
  .chat-button {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    padding: 1rem;
    background-color: var(--accent);
    color: var(--neutral-white);
    border-radius: 9999px;
    box-shadow: 0 10px 15px -3px rgba(var(--primary-rgb), 0.2), 0 4px 6px -2px rgba(var(--primary-rgb), 0.1);
    transition: background-color 0.3s;
  }

  .chat-button:hover {
    background-color: var(--accent-dark);
  }

  .chat-button:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--neutral-white), 0 0 0 4px var(--accent);
  }

  /* Chat Window Styles */
  .chat-window {
    position: fixed;
    bottom: 6rem;
    right: 1.5rem;
    width: 24rem;
    height: 24rem;
    background-color: var(--neutral-white);
    border-radius: 0.5rem;
    box-shadow: 0 25px 50px -12px rgba(var(--primary-rgb), 0.25);
    border: 1px solid var(--neutral-gray);
  }

  /* Chat Header Styles */
  .chat-header {
    padding: 1rem;
    border-bottom: 1px solid var(--neutral-gray);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary);
    color: var(--neutral-white);
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }

  .chat-title {
    font-family: var(--font-heading);
    font-weight: 600;
  }

  .close-button {
    color: var(--neutral-light);
  }

  .close-button:hover {
    color: var(--neutral-white);
  }

  /* Chat Content Styles */
  .chat-content {
    padding: 1rem;
    font-family: var(--font-body);
  }

  .chat-message {
    color: var(--neutral-dark);
  }

  /* SVG Styles */
  .chat-icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .close-icon {
    height: 1.25rem;
    width: 1.25rem;
  }
</style>

<!-- Chat Button -->
<button
  on:click={() => (isChatOpen = !isChatOpen)}
  class="chat-button"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="chat-icon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
</button>

<!-- Chat Window -->
{#if isChatOpen}
  <div class="chat-window">
    <div class="chat-header">
      <h3 class="chat-title">Chat with Us</h3>
      <button
        on:click={() => (isChatOpen = false)}
        class="close-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="close-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div class="chat-content">
      <p class="chat-message">Chat functionality coming soon...</p>
    </div>
  </div>
{/if}
