<script>
    // Define the process steps
    export let steps = [
        {
            number: 1,
            title: "Emergency Contact",
            description: "Call our 24/7 emergency line to get immediate assistance and dispatch a response team."
        },
        {
            number: 2,
            title: "Inspection & Assessment",
            description: "We thoroughly assess the damage to create a comprehensive restoration plan."
        },
        {
            number: 3,
            title: "Mitigation & Containment",
            description: "Immediate steps to prevent further damage and secure your property."
        },
        {
            number: 4,
            title: "Cleanup & Restoration",
            description: "Professional cleaning, sanitizing, and restoration of affected areas and contents."
        },
        {
            number: 5,
            title: "Reconstruction",
            description: "Rebuilding and restoring your property to its pre-damage condition or better."
        },
        {
            number: 6,
            title: "Final Inspection",
            description: "Thorough quality check to ensure all work meets our high standards."
        }
    ];
</script>

<section id="process" class="section">
    <div class="container">
        <div class="section-header">
            <h2>Our Restoration <span class="accent-text">Process</span></h2>
            <p>A systematic approach to restoring your property quickly and effectively.</p>
        </div>

        <div class="process-container">
            {#each steps as step}
                <div class="process-step">
                    <div class="step-number">{step.number}</div>
                    <div class="step-content">
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
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

    .process-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }

    .process-step {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
        position: relative;
    }

    .step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 50px;
        height: 50px;
        background-color: var(--accent);
        color: var(--neutral-white);
        border-radius: 50%;
        font-weight: 700;
        font-size: 1.3rem;
        box-shadow: 0 4px 10px rgba(78, 125, 241, 0.3);
    }

    .step-content h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
    }

    .step-content p {
        opacity: 0.9;
    }

    @media (max-width: 992px) {
        .process-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .section-header h2 {
            font-size: 2rem;
        }

        .process-container {
            grid-template-columns: 1fr;
        }
    }
</style>
