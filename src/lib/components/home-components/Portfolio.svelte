<script lang="ts">
    export let portfolioItems = [
        {
            title: "Fire Damage Restoration",
            description: "Kitchen fire restoration with complete rebuild and modernization.",
            beforeImage: "img/portfolio/fire-before.webp",
            afterImage: "img/portfolio/fire-after.webp"
        },
        {
            title: "Water Damage Restoration",
            description: "Basement flooding recovery with complete mold remediation.",
            beforeImage: "img/portfolio/water-before.webp",
            afterImage: "img/portfolio/water-after.webp"
        },
        {
            title: "Mold Clean Up",
            description: "Complete mold remediation and sanitization of affected areas.",
            beforeImage: "img/portfolio/mold-before.webp",
            afterImage: "img/portfolio/mold-after.webp"
        }
    ];

    // Function to handle the slider movement for both mouse and touch events
    function handleSliderInteraction(event: MouseEvent | TouchEvent, element: HTMLElement): void {
        // Prevent default to avoid scrolling on touch devices
        event.preventDefault();

        // Get the bounding rectangle for correct position calculation
        const rect = element.getBoundingClientRect();

        // Determine if it's a touch or mouse event and get the position
        let clientX: number;
        if ('touches' in event) {
            // Touch event
            clientX = event.touches[0].clientX;
        } else {
            // Mouse event
            clientX = event.clientX;
        }

        // Calculate position
        const mouseX = clientX - rect.left;
        const containerWidth = rect.width;
        const percentPosition = Math.max(0, Math.min(100, (mouseX / containerWidth) * 100));

        // Update the clip path based on interaction position
        const beforeImage = element.querySelector('.image-before') as HTMLElement;
        beforeImage.style.clipPath = `polygon(0 0, ${percentPosition}% 0, ${percentPosition}% 100%, 0 100%)`;

        // Update slider position
        const slider = element.querySelector('.slider-handle') as HTMLElement;
        slider.style.left = `${percentPosition}%`;
    }

    // Reset to default 50/50 view when mouse leaves or touch ends
    function resetSlider(element: HTMLElement): void {
        const beforeImage = element.querySelector('.image-before') as HTMLElement;
        beforeImage.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0 100%)';

        const slider = element.querySelector('.slider-handle') as HTMLElement;
        slider.style.left = '50%';
    }
</script>

<section id="portfolio" class="section gray-bg">
    <div class="container">
        <div class="section-header">
            <h2>Before & <span class="accent-text">After</span></h2>
            <p>See the transformative results of our restoration work.</p>
        </div>

        <div class="portfolio-grid">
            {#each portfolioItems as item}
                <div class="portfolio-item">
                    <div
                        class="portfolio-images"
                        on:mousemove={(e) => handleSliderInteraction(e, e.currentTarget)}
                        on:mouseleave={(e) => resetSlider(e.currentTarget)}
                        on:touchstart={(e) => e.preventDefault()}
                        on:touchmove={(e) => handleSliderInteraction(e, e.currentTarget)}
                        on:touchend={(e) => resetSlider(e.currentTarget)}
                    >
                        <div class="image-before" style="background-image: url('{item.beforeImage}');">
                            <span class="image-label">Before</span>
                        </div>
                        <div class="image-after" style="background-image: url('{item.afterImage}');">
                            <span class="image-label">After</span>
                        </div>
                        <div class="slider-handle">
                            <div class="slider-line"></div>
                            <div class="slider-button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 4L4 8L8 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 4L20 8L16 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-info">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="mt-5 text-center">
            <a href="#" class="btn btn-primary">View More Projects</a>
        </div>
    </div>
</section>

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

    .accent-text {
        color: var(--accent);
    }

    .gray-bg {
        background-color: var(--neutral-light);
    }

    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2rem;
    }

    .portfolio-item {
        background-color: var(--neutral-white);
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .portfolio-item:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .portfolio-images {
        position: relative;
        height: 250px;
        overflow: hidden;
        cursor: col-resize;
    }

    .image-before,
    .image-after {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .image-before {
        left: 0;
        z-index: 1;
        clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
        /* Remove transition to eliminate lag */
    }

    .image-after {
        right: 0;
        z-index: 0;
    }

    /* Remove previous hover effects that completely hide before image */
    .portfolio-images:hover .image-before {
        /* Remove the clip-path that was hiding the image */
    }

    .portfolio-images:hover .image-after {
        /* Remove the scale effect */
    }

    .image-label {
        position: absolute;
        bottom: 10px;
        padding: 5px 15px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 20px;
        color: var(--neutral-white);
        font-size: 0.8rem;
        z-index: 2;
    }

    .image-before .image-label {
        left: 10px;
    }

    .image-after .image-label {
        right: 10px;
    }

    /* Slider styles */
    .slider-handle {
        position: absolute;
        top: 0;
        left: 50%;
        width: 2px;
        height: 100%;
        z-index: 2;
        transform: translateX(-50%);
        pointer-events: none;
    }

    .slider-line {
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 100%;
        background-color: white;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    .slider-button {
        position: absolute;
        top: 50%;
        left: 0;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.6);
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    .portfolio-info {
        padding: 1.5rem;
    }

    .portfolio-info h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }

    .portfolio-info p {
        opacity: 0.9;
    }

    .mt-5 {
        margin-top: 3rem;
    }

    .text-center {
        text-align: center;
    }

    @media (max-width: 768px) {
        .section-header h2 {
            font-size: 2rem;
        }

        .portfolio-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
