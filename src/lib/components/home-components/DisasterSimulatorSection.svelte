<script>
    import DisasterSimulator from '../disaster-simulator/DisasterSimulator.svelte';
</script>

<section class="simulator-section">
    <div class="container">
        <div class="section-header">
            <h2>Interactive Disaster Response Simulator</h2>
            <p class="subtitle">See exactly how Palm Build responds to your specific emergency</p>
        </div>

        <div class="simulator-container">
            <DisasterSimulator />
        </div>

        <div class="benefits">
            <div class="benefit">
                <div class="benefit-icon">
                    <i class="fas fa-tachometer-alt"></i>
                </div>
                <h3>Quick Response Times</h3>
                <p>Our strategically positioned teams ensure we can reach your property quickly when disaster strikes.</p>
            </div>

            <div class="benefit">
                <div class="benefit-icon">
                    <i class="fas fa-certificate"></i>
                </div>
                <h3>Certified Expertise</h3>
                <p>Palm Build technicians are fully certified and equipped with the latest restoration technology.</p>
            </div>

            <div class="benefit">
                <div class="benefit-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <h3>24/7 Availability</h3>
                <p>Emergencies don't wait for business hours, and neither do we. We're ready to respond anytime.</p>
            </div>
        </div>
    </div>
</section>

<style>
    .simulator-section {
        padding: 5rem 0;
        background-color: var(--neutral-lightest);
        position: relative;
        overflow: hidden;
    }

    .simulator-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
    }

    .section-header {
        text-align: center;
        margin-bottom: 3rem;
    }

    .section-header h2 {
        color: var(--primary-dark);
        font-size: 2.5rem;
        margin-bottom: 0.75rem;
    }

    .subtitle {
        font-size: 1.25rem;
        color: var(--text-secondary);
        max-width: 700px;
        margin: 0 auto;
    }

    .simulator-container {
        margin-bottom: 4rem;
    }

    .benefits {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        margin-top: 2rem;
    }

    .benefit {
        text-align: center;
        padding: 2rem;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
    }

    .benefit:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    .benefit-icon {
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, var(--primary), var(--primary-light));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        color: white;
        font-size: 1.8rem;
    }

    .benefit h3 {
        color: var(--primary-dark);
        margin-bottom: 0.75rem;
    }

    .benefit p {
        color: var(--text-secondary);
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.6;
    }

    @media (max-width: 768px) {
        .benefits {
            grid-template-columns: 1fr;
        }

        .section-header h2 {
            font-size: 1.8rem;
        }

        .subtitle {
            font-size: 1rem;
        }
    }
</style>
