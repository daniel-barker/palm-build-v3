<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    // Props
    export let emergencyType: string;

    // Create a dispatcher to send events back to the parent
    const dispatch = createEventDispatcher<{
        assessed: { severity: string };
        back: void;
    }>();

    // Define severity level interface
    interface SeverityLevel {
        id: string;
        title: string;
        description: string;
        examples: Record<string, string>;
    }

    // Severity levels
    const severityLevels: SeverityLevel[] = [
        {
            id: 'minor',
            title: 'Minor',
            description: 'Limited damage, contained to a small area.',
            examples: {
                fire: 'Small kitchen fire affecting one area.',
                water: 'Small water leak affecting limited area.',
                mold: 'Small patch of visible mold.',
                storm: 'Few broken windows or minor roof damage.',
                asbestos: 'Suspected asbestos in a small, undisturbed area.'
            }
        },
        {
            id: 'moderate',
            title: 'Moderate',
            description: 'Damage affecting multiple areas but contained to part of the property.',
            examples: {
                fire: 'Fire damage in multiple rooms with smoke throughout.',
                water: 'Water intrusion affecting several rooms.',
                mold: 'Visible mold growth in multiple areas or hidden mold suspected.',
                storm: 'Partial roof damage or multiple broken windows.',
                asbestos: 'Disturbed asbestos or larger area of concern.'
            }
        },
        {
            id: 'severe',
            title: 'Severe',
            description: 'Extensive damage affecting most or all of the property.',
            examples: {
                fire: 'Major fire affecting multiple rooms or entire structure.',
                water: 'Flooding throughout property, potentially from natural disaster.',
                mold: 'Widespread mold infestation throughout property.',
                storm: 'Major structural damage from severe weather.',
                asbestos: 'Major disturbance of asbestos or widespread contamination concern.'
            }
        }
    ];

    // Emergency type titles for display
    const typeLabels: Record<string, string> = {
        fire: 'Fire & Smoke Damage',
        water: 'Water Damage',
        mold: 'Mold Contamination',
        storm: 'Storm Damage',
        asbestos: 'Asbestos Concern'
    };

    // Send severity assessment back to parent
    function selectSeverity(level: SeverityLevel): void {
        dispatch('assessed', { severity: level.id });
    }

    // Go back to emergency type selection
    function goBack(): void {
        dispatch('back');
    }

    // Helper function to get example safely
    function getExample(type: string): string {
        const defaultType = 'fire';
        const safeType = typeLabels[type] ? type : defaultType;
        return severityLevels[0].examples[safeType];
    }
</script>

<div class="severity-assessment">
    <button class="back-button" on:click={goBack}>
        <i class="fas fa-arrow-left"></i> Back
    </button>

    <h3>How severe is the {typeLabels[emergencyType] || 'Fire & Smoke Damage'} emergency?</h3>
    <p class="assessment-description">Select the severity level that best describes your situation</p>

    <div class="severity-levels">
        {#each severityLevels as level}
            <button
                class="severity-card"
                on:click={() => selectSeverity(level)}
            >
                <div class="severity-header">
                    <h4>{level.title}</h4>
                    <span class="severity-indicator" class:minor={level.id === 'minor'} class:moderate={level.id === 'moderate'} class:severe={level.id === 'severe'}></span>
                </div>
                <p class="general-description">{level.description}</p>
                <div class="example">
                    <strong>Example:</strong> {level.examples[emergencyType] || level.examples['fire']}
                </div>
            </button>
        {/each}
    </div>

    <div class="severity-note">
        <p><i class="fas fa-info-circle"></i> If you're unsure about the severity, select the option that seems closest. Our team will help assess your specific situation.</p>
    </div>
</div>

<style>
    .severity-assessment {
        padding: 1rem;
    }

    .back-button {
        background: none;
        border: none;
        color: var(--primary);
        font-size: 1rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        margin-bottom: 1rem;
        transition: transform 0.2s ease;
    }

    .back-button:hover {
        transform: translateX(-3px);
    }

    h3 {
        color: var(--primary);
        text-align: center;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
    }

    .assessment-description {
        text-align: center;
        color: var(--text-secondary);
        margin-bottom: 2rem;
    }

    .severity-levels {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .severity-card {
        background-color: white;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        transition: all 0.3s ease;
        cursor: pointer;
        text-align: left;
    }

    .severity-card:hover {
        border-color: var(--primary);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    }

    .severity-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 0.75rem;
    }

    .severity-indicator {
        width: 60px;
        height: 12px;
        border-radius: 6px;
    }

    .severity-indicator.minor {
        background: linear-gradient(to right, #ffeb3b, #ffc107);
    }

    .severity-indicator.moderate {
        background: linear-gradient(to right, #ff9800, #f57c00);
    }

    .severity-indicator.severe {
        background: linear-gradient(to right, #f44336, #d32f2f);
    }

    .severity-card h4 {
        color: var(--primary-dark);
        margin: 0;
        font-size: 1.3rem;
    }

    .general-description {
        color: var(--text-secondary);
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    .example {
        background-color: var(--neutral-lightgray);
        padding: 1rem;
        border-radius: 6px;
        font-size: 0.9rem;
        width: 100%;
    }

    .severity-note {
        background-color: #e3f2fd;
        border-left: 4px solid #2196f3;
        padding: 1rem;
        border-radius: 0 4px 4px 0;
    }

    .severity-note p {
        margin: 0;
        color: var(--primary-dark);
        font-size: 0.95rem;
    }

    @media (max-width: 768px) {
        .severity-card {
            padding: 1.25rem;
        }
    }
</style>
