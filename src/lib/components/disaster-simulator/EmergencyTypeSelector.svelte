<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    // Create a dispatcher to send events back to the parent
    const dispatch = createEventDispatcher<{
        selected: { type: string }
    }>();

    // Emergency type interface
    interface EmergencyType {
        id: string;
        title: string;
        icon: string;
        description: string;
        color: string;
        gradientColor: string;
    }

    // Define emergency types with details
    const emergencyTypes: EmergencyType[] = [
        {
            id: 'fire',
            title: 'Fire & Smoke Damage',
            icon: 'fa-fire',
            description: 'Property damage from flames, smoke, or firefighting efforts.',
            color: '#e53935',
            gradientColor: '#ff6b66'
        },
        {
            id: 'water',
            title: 'Water Damage',
            icon: 'fa-water',
            description: 'Damage from flooding, plumbing failures, or weather events.',
            color: '#1976d2',
            gradientColor: '#42a5f5'
        },
        {
            id: 'mold',
            title: 'Mold Contamination',
            icon: 'fa-seedling',
            description: 'Mold growth from moisture or water damage.',
            color: '#388e3c',
            gradientColor: '#66bb6a'
        },
        {
            id: 'storm',
            title: 'Storm Damage',
            icon: 'fa-cloud-showers-heavy',
            description: 'Damage from hurricanes, tornadoes, or severe storms.',
            color: '#5e35b1',
            gradientColor: '#9575cd'
        },
        {
            id: 'asbestos',
            title: 'Asbestos',
            icon: 'fa-biohazard',
            description: 'Discovery or disturbance of asbestos-containing materials.',
            color: '#455a64',
            gradientColor: '#78909c'
        }
    ];

    // Handle type selection
    function selectEmergencyType(type: EmergencyType): void {
        dispatch('selected', { type: type.id });
    }

    // Track which card is being hovered
    let hoveredCard: string | null = null;
</script>

<div class="emergency-selector">
    <h3>What type of emergency are you experiencing?</h3>
    <p class="selector-description">Select the type of damage to see how Palm Build would respond to your specific situation</p>

    <div class="emergency-types">
        {#each emergencyTypes as type}
            <button
                class="type-card"
                on:click={() => selectEmergencyType(type)}
                on:mouseenter={() => hoveredCard = type.id}
                on:mouseleave={() => hoveredCard = null}
                style="--card-accent: {type.color}; --card-gradient: {type.gradientColor};"
                class:hovered={hoveredCard === type.id}
            >
                <div class="card-content">
                    <div class="icon-container">
                        <div class="icon-wrapper">
                            <i class="fas {type.icon}"></i>
                        </div>
                        <div class="icon-shadow"></div>
                    </div>

                    <h4>{type.title}</h4>
                    <p>{type.description}</p>

                    <div class="select-indicator">
                        <i class="fas fa-long-arrow-alt-right"></i>
                        <span>Select</span>
                    </div>
                </div>
            </button>
        {/each}
    </div>
</div>

<style>
    .emergency-selector {
        padding: 1rem;
    }

    h3 {
        color: var(--primary);
        text-align: center;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        font-weight: 700;
    }

    .selector-description {
        text-align: center;
        color: var(--text-secondary);
        margin-bottom: 2rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }

    .emergency-types {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1.5rem;
        margin-top: 1.5rem;
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
    }

    .type-card {
        background-color: white;
        border: none;
        border-radius: 12px;
        overflow: hidden;
        padding: 0;
        height: 100%;
        position: relative;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        transform: translateY(0);
    }

    .type-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 8px;
        background: linear-gradient(to right, var(--card-accent), var(--card-gradient));
        opacity: 1;
        transition: height 0.3s ease;
    }

    .type-card.hovered::before {
        height: 100%;
        opacity: 0.05;
    }

    .type-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }

    .card-content {
        padding: 2rem 1.8rem;
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
        z-index: 1;
    }

    .icon-container {
        position: relative;
        margin-bottom: 1.2rem;
        align-self: flex-start;
    }

    .icon-wrapper {
        position: relative;
        z-index: 2;
        width: 66px;
        height: 66px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--card-accent), var(--card-gradient));
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .icon-shadow {
        position: absolute;
        top: 8px;
        left: 8px;
        width: 66px;
        height: 66px;
        border-radius: 50%;
        background-color: var(--card-accent);
        opacity: 0.2;
        z-index: 1;
    }

    .icon-wrapper i {
        color: white;
        font-size: 1.8rem;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .type-card h4 {
        color: var(--primary-dark);
        margin: 0 0 0.8rem 0;
        font-size: 1.3rem;
        font-weight: 600;
        transition: color 0.3s ease;
    }

    .type-card:hover h4 {
        color: var(--card-accent);
    }

    .type-card p {
        color: var(--text-secondary);
        font-size: 0.95rem;
        margin: 0;
        flex-grow: 1;
        line-height: 1.5;
    }

    .select-indicator {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--card-accent);
        font-weight: 600;
        font-size: 0.9rem;
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.3s ease;
    }

    .type-card:hover .select-indicator {
        opacity: 1;
        transform: translateX(0);
    }

    @media (max-width: 1200px) {
        .emergency-types {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 992px) {
        .emergency-types {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
        .emergency-types {
            grid-template-columns: 1fr;
        }

        .type-card {
            max-width: 380px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>
