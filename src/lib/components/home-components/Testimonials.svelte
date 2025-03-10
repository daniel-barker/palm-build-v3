<script>
    // Testimonials data
    export let testimonials = [
        {
            text: "Palm Build came to our rescue after a devastating house fire. Their team was compassionate, professional, and skilled. They restored our home beautifully and helped us through every step of the process.",
            author: "Sarah Johnson",
            role: "Residential Client",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            rating: 5
        },
        {
            text: "When our office building suffered severe water damage, Palm Build had us back in business in record time. Their commercial team understood our need to minimize downtime and worked around the clock to restore our space.",
            author: "Michael Thomas",
            role: "Business Owner",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5
        },
        {
            text: "I discovered black mold in my bathroom and was terrified. Palm Build performed thorough testing, explained everything clearly, and completely eliminated the problem. Their follow-up and preventative advice were invaluable.",
            author: "Jennifer Martinez",
            role: "Homeowner",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
            rating: 4.5
        }
    ];
</script>

<section id="testimonials" class="section">
    <div class="container">
        <div class="section-header">
            <h2>Client <span class="accent-text">Testimonials</span></h2>
            <p>Read what our satisfied customers have to say about our restoration services.</p>
        </div>

        <div class="testimonials-container">
            {#each testimonials as testimonial}
                <div class="testimonial-card">
                    <div class="testimonial-quote">
                        <i class="fas fa-quote-left"></i>
                    </div>
                    <p class="testimonial-text">{testimonial.text}</p>
                    <div class="testimonial-author">
                        <div class="author-image" style="background-image: url('{testimonial.image}');"></div>
                        <div class="author-info">
                            <h4>{testimonial.author}</h4>
                            <p>{testimonial.role}</p>
                        </div>
                    </div>
                    <div class="testimonial-rating">
                        {#each Array(Math.floor(testimonial.rating)) as _, i}
                            <i class="fas fa-star"></i>
                        {/each}
                        {#if testimonial.rating % 1 !== 0}
                            <i class="fas fa-star-half-alt"></i>
                        {/if}
                    </div>
                </div>
            {/each}
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

    .testimonials-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .testimonial-card {
        background-color: var(--neutral-white);
        border-radius: 8px;
        padding: 2.5rem 2rem 2rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        position: relative;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .testimonial-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    .testimonial-quote {
        position: absolute;
        top: -20px;
        left: 20px;
        width: 50px;
        height: 50px;
        background-color: var(--accent);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--neutral-white);
        font-size: 1.3rem;
    }

    .testimonial-text {
        font-style: italic;
        margin-bottom: 1.5rem;
        opacity: 0.9;
    }

    .testimonial-author {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .author-image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        border: 3px solid var(--neutral-light);
    }

    .author-info h4 {
        margin-bottom: 0.25rem;
        font-size: 1.1rem;
    }

    .author-info p {
        font-size: 0.9rem;
        opacity: 0.8;
        margin: 0;
    }

    .testimonial-rating {
        color: #ffc107;
        margin-top: 0.5rem;
    }

    @media (max-width: 992px) {
        .testimonials-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .section-header h2 {
            font-size: 2rem;
        }

        .testimonials-container {
            grid-template-columns: 1fr;
        }
    }
</style>
