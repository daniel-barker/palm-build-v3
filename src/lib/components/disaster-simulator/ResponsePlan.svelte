<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    // Props
    export let emergencyType: string;
    export let severity: string;

    // Create a dispatcher to send events back to the parent
    const dispatch = createEventDispatcher<{
        locationSelected: { location: string };
        back: void;
    }>();

    // States for address lookup
    let zipCode = '';
    let isValidZip = false;
    let isSearching = false;

    // Timeline step interface
    interface TimelineStep {
        step: number;
        title: string;
        time: string;
        description: string;
    }

    // Timeline data structure
    interface EmergencyTimelines {
        [key: string]: {
            [key: string]: TimelineStep[];
        };
    }

    // Timeline data specific to each emergency type
    const responseTimelines: EmergencyTimelines = {
        fire: {
            minor: [
                { step: 1, title: 'Initial Contact', time: '0 hours', description: 'First call received and emergency assessment initiated.' },
                { step: 2, title: 'On-Site Assessment', time: '1-2 hours', description: 'Palm Build team arrives to assess fire and smoke damage extent.' },
                { step: 3, title: 'Mitigation Plan', time: '2-3 hours', description: 'Detailed plan created for smoke removal and structural assessment.' },
                { step: 4, title: 'Cleanup Begins', time: '3-4 hours', description: 'Initial cleanup of soot and smoke damage starts.' },
                { step: 5, title: 'Deodorization', time: '24-48 hours', description: 'Specialized treatments to remove smoke odor.' },
                { step: 6, title: 'Restoration Complete', time: '7-10 days', description: 'Final repairs and restoration work completed.' }
            ],
            moderate: [
                { step: 1, title: 'Initial Contact', time: '0 hours', description: 'Emergency response team dispatched immediately.' },
                { step: 2, title: 'On-Site Assessment', time: '1-2 hours', description: 'Comprehensive damage assessment of affected areas.' },
                { step: 3, title: 'Security & Stabilization', time: '2-3 hours', description: 'Securing property and stabilizing structural elements.' },
                { step: 4, title: 'Water Removal', time: '3-6 hours', description: 'Removing water from firefighting efforts.' },
                { step: 5, title: 'Content Recovery', time: '24-48 hours', description: 'Salvaging and cleaning undamaged belongings.' },
                { step: 6, title: 'Structural Drying', time: '2-4 days', description: 'Complete drying of affected structure.' },
                { step: 7, title: 'Deodorization', time: '3-5 days', description: 'Advanced odor elimination procedures.' },
                { step: 8, title: 'Reconstruction', time: '2-4 weeks', description: 'Rebuilding damaged portions of the property.' }
            ],
            severe: [
                { step: 1, title: 'Emergency Response', time: '0 hours', description: 'Full emergency team dispatched with specialized equipment.' },
                { step: 2, title: 'Damage Assessment', time: '1-2 hours', description: 'Comprehensive structural and safety evaluation.' },
                { step: 3, title: 'Emergency Board-Up', time: '2-4 hours', description: 'Securing the property from further damage.' },
                { step: 4, title: 'Water Extraction', time: '4-8 hours', description: 'Removing all water from firefighting.' },
                { step: 5, title: 'Structural Evaluation', time: '24-48 hours', description: 'Engineering assessment of structural integrity.' },
                { step: 6, title: 'Content Inventory', time: '2-3 days', description: 'Documenting and removing salvageable items.' },
                { step: 7, title: 'Demolition', time: '3-7 days', description: 'Removing damaged materials and preparing for rebuild.' },
                { step: 8, title: 'Reconstruction Planning', time: '7-10 days', description: 'Detailed rebuilding plan development.' },
                { step: 9, title: 'Full Restoration', time: '1-3 months', description: 'Complete reconstruction of damaged areas.' }
            ]
        },
        water: {
            minor: [
                { step: 1, title: 'Initial Contact', time: '0 hours', description: 'First call received and response team dispatched.' },
                { step: 2, title: 'On-Site Assessment', time: '1-2 hours', description: 'Evaluation of water damage extent and source.' },
                { step: 3, title: 'Water Extraction', time: '2-4 hours', description: 'Removal of standing water from affected areas.' },
                { step: 4, title: 'Equipment Setup', time: '4-6 hours', description: 'Installation of drying equipment.' },
                { step: 5, title: 'Monitoring', time: '24-72 hours', description: 'Daily moisture readings and equipment adjustments.' },
                { step: 6, title: 'Final Restoration', time: '5-7 days', description: 'Repairs and restoration of affected areas.' }
            ],
            moderate: [
                { step: 1, title: 'Emergency Response', time: '0 hours', description: 'Full water damage team dispatched immediately.' },
                { step: 2, title: 'Damage Assessment', time: '1-2 hours', description: 'Comprehensive moisture mapping and damage evaluation.' },
                { step: 3, title: 'Content Protection', time: '2-3 hours', description: 'Moving and protecting unaffected belongings.' },
                { step: 4, title: 'Water Extraction', time: '3-6 hours', description: 'Industrial extraction of all standing water.' },
                { step: 5, title: 'Affected Material Removal', time: '6-12 hours', description: 'Removal of unsalvageable materials (carpet, drywall).' },
                { step: 6, title: 'Structural Drying', time: '3-5 days', description: 'Complete drying using industrial dehumidifiers and air movers.' },
                { step: 7, title: 'Antimicrobial Treatment', time: '5-6 days', description: 'Prevention of mold growth in affected areas.' },
                { step: 8, title: 'Reconstruction', time: '7-14 days', description: 'Rebuilding and restoring damaged areas.' }
            ],
            severe: [
                { step: 1, title: 'Emergency Mobilization', time: '0 hours', description: 'Multiple response teams dispatched with specialized equipment.' },
                { step: 2, title: 'Safety Inspection', time: '1-2 hours', description: 'Electrical and structural safety assessment.' },
                { step: 3, title: 'Emergency Pumping', time: '2-6 hours', description: 'Submersible pumps used for bulk water removal.' },
                { step: 4, title: 'Content Evacuation', time: '6-12 hours', description: 'Removal and cataloging of salvageable belongings.' },
                { step: 5, title: 'Demolition', time: '24-48 hours', description: 'Removal of damaged walls, flooring, and materials.' },
                { step: 6, title: 'Structural Drying', time: '5-10 days', description: 'Intensive drying of structural elements.' },
                { step: 7, title: 'Sanitization', time: '10-12 days', description: 'Thorough cleaning and disinfection of all areas.' },
                { step: 8, title: 'Reconstruction Planning', time: '12-14 days', description: 'Comprehensive rebuilding plan development.' },
                { step: 9, title: 'Full Restoration', time: '1-2 months', description: 'Complete reconstruction of affected property.' }
            ]
        },
        // Additional emergency types would be added here
        mold: {
            minor: [
                { step: 1, title: 'Initial Consultation', time: '0 hours', description: 'Assessment call and scheduling of inspection.' },
                { step: 2, title: 'On-Site Assessment', time: 'Day 1', description: 'Visual inspection and moisture readings.' },
                { step: 3, title: 'Testing', time: 'Day 1-2', description: 'Air quality and surface sampling if needed.' },
                { step: 4, title: 'Containment Setup', time: 'Day 3', description: 'Isolation of affected area to prevent spread.' },
                { step: 5, title: 'Remediation', time: 'Day 3-5', description: 'Safe removal of affected materials and cleanup.' },
                { step: 6, title: 'Clearance Testing', time: 'Day 6', description: 'Verification that mold has been successfully removed.' }
            ],
            moderate: [
                { step: 1, title: 'Initial Assessment', time: '0 hours', description: 'Comprehensive inspection of affected and adjacent areas.' },
                { step: 2, title: 'Testing Protocol', time: 'Day 1', description: 'Extensive air and surface sampling to determine extent.' },
                { step: 3, title: 'Remediation Plan', time: 'Day 2', description: 'Development of detailed removal strategy.' },
                { step: 4, title: 'Containment Setup', time: 'Day 3', description: 'Advanced containment with negative air pressure.' },
                { step: 5, title: 'Source Correction', time: 'Day 3-4', description: 'Addressing moisture source causing mold growth.' },
                { step: 6, title: 'Material Removal', time: 'Day 4-7', description: 'Removal of affected building materials.' },
                { step: 7, title: 'HEPA Cleaning', time: 'Day 7-9', description: 'Thorough cleaning of all surfaces and air scrubbing.' },
                { step: 8, title: 'Verification', time: 'Day 10', description: 'Clearance testing and final inspection.' },
                { step: 9, title: 'Restoration', time: 'Day 11-21', description: 'Rebuilding of removed materials and structures.' }
            ],
            severe: [
                { step: 1, title: 'Emergency Assessment', time: '0 hours', description: 'Immediate comprehensive evaluation of contamination.' },
                { step: 2, title: 'Building Evaluation', time: 'Day 1', description: 'Structural assessment and occupant safety determination.' },
                { step: 3, title: 'Testing Protocol', time: 'Day 1-2', description: 'Extensive microbial testing throughout property.' },
                { step: 4, title: 'Containment Engineering', time: 'Day 2-3', description: 'Advanced multi-chamber containment systems.' },
                { step: 5, title: 'HVAC Inspection', time: 'Day 3', description: 'Evaluation of HVAC contamination.' },
                { step: 6, title: 'Large-Scale Removal', time: 'Day 4-10', description: 'Extensive removal of affected materials.' },
                { step: 7, title: 'Structural Remediation', time: 'Day 10-15', description: 'Treatment of framework and structural elements.' },
                { step: 8, title: 'HVAC Cleaning', time: 'Day 15-17', description: 'Complete cleaning or replacement of ventilation systems.' },
                { step: 9, title: 'Clearance Testing', time: 'Day 18-20', description: 'Multiple verification tests to ensure complete removal.' },
                { step: 10, title: 'Reconstruction', time: '3-8 weeks', description: 'Complete rebuilding of removed structures and materials.' }
            ]
        },
        storm: {
            minor: [
                { step: 1, title: 'Initial Contact', time: '0 hours', description: 'Emergency assessment and response scheduling.' },
                { step: 2, title: 'Damage Inspection', time: '1-4 hours', description: 'Assessment of storm damage to structure.' },
                { step: 3, title: 'Emergency Repairs', time: '4-8 hours', description: 'Temporary repairs to prevent further damage.' },
                { step: 4, title: 'Debris Removal', time: 'Day 1-2', description: 'Clearing of storm debris from property.' },
                { step: 5, title: 'Minor Repairs', time: 'Day 2-5', description: 'Completion of permanent repairs to affected areas.' }
            ],
            moderate: [
                { step: 1, title: 'Emergency Response', time: '0 hours', description: 'Immediate team dispatch for damage control.' },
                { step: 2, title: 'Property Securing', time: '1-3 hours', description: 'Tarping, board-up, and initial water extraction.' },
                { step: 3, title: 'Damage Documentation', time: '3-6 hours', description: 'Comprehensive documentation for insurance.' },
                { step: 4, title: 'Water Mitigation', time: '6-24 hours', description: 'Addressing water intrusion from storm.' },
                { step: 5, title: 'Structural Assessment', time: 'Day 1-2', description: 'Evaluation of structural damage from storm.' },
                { step: 6, title: 'Debris Clearing', time: 'Day 2-3', description: 'Removal of storm debris and damaged materials.' },
                { step: 7, title: 'Drying Process', time: 'Day 3-7', description: 'Complete drying of water-affected areas.' },
                { step: 8, title: 'Repairs', time: 'Week 2-3', description: 'Restoration of damaged portions of structure.' }
            ],
            severe: [
                { step: 1, title: 'Emergency Mobilization', time: '0 hours', description: 'Full disaster response team activated.' },
                { step: 2, title: 'Safety Evaluation', time: '1-3 hours', description: 'Comprehensive safety and structural assessment.' },
                { step: 3, title: 'Emergency Stabilization', time: '3-8 hours', description: 'Structural bracing and extensive water extraction.' },
                { step: 4, title: 'Utility Coordination', time: '8-24 hours', description: 'Working with utility companies for safe restoration.' },
                { step: 5, title: 'Comprehensive Documentation', time: 'Day 1-2', description: 'Detailed cataloging of all damage for claims.' },
                { step: 6, title: 'Tree/Debris Removal', time: 'Day 2-5', description: 'Removal of fallen trees and major debris.' },
                { step: 7, title: 'Structure Drying', time: 'Day 5-12', description: 'Industrial drying of entire structure.' },
                { step: 8, title: 'Demolition', time: 'Week 2', description: 'Removal of compromised structural elements.' },
                { step: 9, title: 'Reconstruction Planning', time: 'Week 3', description: 'Engineering and architectural planning.' },
                { step: 10, title: 'Rebuilding', time: '1-4 months', description: 'Complete reconstruction of severely damaged areas.' }
            ]
        },
        asbestos: {
            minor: [
                { step: 1, title: 'Initial Consultation', time: 'Day 1', description: 'Expert evaluation of potential asbestos concern.' },
                { step: 2, title: 'Testing', time: 'Day 1-3', description: 'Sample collection and laboratory analysis.' },
                { step: 3, title: 'Results & Planning', time: 'Day 4-5', description: 'Test result review and containment planning.' },
                { step: 4, title: 'Containment Setup', time: 'Day 6', description: 'Preparation of work area with appropriate containment.' },
                { step: 5, title: 'Safe Removal', time: 'Day 7-8', description: 'Specialized removal of asbestos-containing materials.' },
                { step: 6, title: 'Clearance Testing', time: 'Day 9', description: 'Air testing to verify successful abatement.' }
            ],
            moderate: [
                { step: 1, title: 'Comprehensive Assessment', time: 'Day 1', description: 'Thorough inspection of all potential locations.' },
                { step: 2, title: 'Extensive Testing', time: 'Day 1-3', description: 'Multiple samples from various materials.' },
                { step: 3, title: 'Abatement Design', time: 'Day 4-5', description: 'Development of detailed containment and removal plan.' },
                { step: 4, title: 'Regulatory Filing', time: 'Day 5-8', description: 'Submission of required notices to authorities.' },
                { step: 5, title: 'Advanced Containment', time: 'Day 9', description: 'Setup of negative pressure containment systems.' },
                { step: 6, title: 'Material Removal', time: 'Day 10-14', description: 'Careful removal of all affected materials.' },
                { step: 7, title: 'Disposal', time: 'Day 14-15', description: 'Proper bagging and transport to approved facilities.' },
                { step: 8, title: 'Clearance Testing', time: 'Day 16', description: 'Comprehensive air testing to verify removal.' },
                { step: 9, title: 'Restoration', time: 'Week 3-4', description: 'Replacement of removed materials.' }
            ],
            severe: [
                { step: 1, title: 'Emergency Assessment', time: 'Day 1', description: 'Immediate evaluation of hazard level and extent.' },
                { step: 2, title: 'Building Evacuation Plan', time: 'Day 1', description: 'Coordination of safe occupant relocation if needed.' },
                { step: 3, title: 'Comprehensive Sampling', time: 'Day 1-3', description: 'Extensive material and air testing throughout property.' },
                { step: 4, title: 'Project Design', time: 'Day 4-6', description: 'Engineering of extensive containment and abatement plan.' },
                { step: 5, title: 'Regulatory Compliance', time: 'Day 6-10', description: 'Securing all necessary permits and approvals.' },
                { step: 6, title: 'Site Preparation', time: 'Day 11-12', description: 'Installation of extensive containment and decontamination units.' },
                { step: 7, title: 'Large-Scale Removal', time: 'Week 2-3', description: 'Systematic removal of all contaminated materials.' },
                { step: 8, title: 'Specialized Cleaning', time: 'Week 3-4', description: 'Detailed cleaning of all surfaces and remaining materials.' },
                { step: 9, title: 'Final Inspection', time: 'Week 4', description: 'Independent third-party verification of complete removal.' },
                { step: 10, title: 'Rebuilding', time: '1-3 months', description: 'Replacement of removed materials and systems.' }
            ]
        }
    };

    // Service area interface
    interface ServiceArea {
        name: string;
        zip: string;
    }

    // Service areas (simplified for demo)
    const serviceAreas: ServiceArea[] = [
        { name: 'Charlotte, NC', zip: '28273' },
        { name: 'Raleigh, NC', zip: '27601' },
        { name: 'Columbia, SC', zip: '29201' },
        { name: 'Jacksonville, FL', zip: '32202' },
        { name: 'Miami, FL', zip: '33101' },
        { name: 'Tampa, FL', zip: '33602' },
        { name: 'Atlanta, GA', zip: '30301' },
        { name: 'Houston, TX', zip: '77001' },
        { name: 'Memphis, TN', zip: '38101' },
        { name: 'Nashville, TN', zip: '37201' },
        { name: 'Jersey City, NJ', zip: '07302' }
    ];

    // Get the appropriate timeline based on the emergency type and severity
    const getTimeline = (): TimelineStep[] => {
        // Check if the emergency type exists in our data
        if (responseTimelines[emergencyType] && responseTimelines[emergencyType][severity]) {
            return responseTimelines[emergencyType][severity];
        }
        // Default to first available timeline if the specific combination isn't found
        return responseTimelines['fire']['minor'];
    };

    // Handle zip code validation
    function validateZip(): void {
        const zipRegex = /^\d{5}$/;
        isValidZip = zipRegex.test(zipCode);
    }

    // Submit zip code
    function submitLocation(): void {
        isSearching = true;

        // Simulate search delay
        setTimeout(() => {
            // Find matching service area or default to first
            const location = serviceAreas.find(area => area.zip === zipCode)?.name || 'Your location';
            dispatch('locationSelected', { location });
            isSearching = false;
        }, 1500);
    }

    // Go back
    function goBack(): void {
        dispatch('back');
    }

    // Determine if we need a safety warning based on severity
    $: safetyWarning = severity === 'severe' || (severity === 'moderate' &&
                       (emergencyType === 'fire' || emergencyType === 'asbestos'));
</script>

<div class="response-plan">
    <button class="back-button" on:click={goBack}>
        <i class="fas fa-arrow-left"></i> Back
    </button>

    <div class="plan-container">
        <div class="plan-header">
            <h3>Palm Build Response Timeline</h3>
            <p>Here's how our team would respond to your {severity} {emergencyType} emergency</p>

            {#if safetyWarning}
                <div class="safety-alert">
                    <i class="fas fa-exclamation-triangle"></i>
                    <div>
                        <strong>Safety Alert:</strong>
                        <p>This type of emergency requires immediate professional attention. Please call us at <a href="tel:+18882455155">(888) 245-5155</a> for immediate assistance.</p>
                    </div>
                </div>
            {/if}
        </div>

        <div class="timeline">
            {#each getTimeline() as step}
                <div class="timeline-item">
                    <div class="timeline-marker">{step.step}</div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <h4>{step.title}</h4>
                            <span class="timeline-time">{step.time}</span>
                        </div>
                        <p>{step.description}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="location-finder">
            <h4>How quickly can Palm Build respond to your location?</h4>
            <p>Enter your zip code to get an estimated response time</p>

            <div class="zip-input">
                <input
                    type="text"
                    placeholder="Enter your zip code"
                    bind:value={zipCode}
                    on:input={validateZip}
                    maxlength="5"
                />
                <button
                    class="search-button"
                    disabled={!isValidZip || isSearching}
                    on:click={submitLocation}
                >
                    {#if isSearching}
                        <i class="fas fa-spinner fa-spin"></i>
                    {:else}
                        <i class="fas fa-search"></i>
                    {/if}
                </button>
            </div>

            <div class="service-areas">
                <p class="caption">We serve Florida, North Carolina, South Carolina, Georgia, Texas, Tennessee, and New Jersey</p>
            </div>
        </div>
    </div>
</div>

<style>
    .response-plan {
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

    .plan-container {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        overflow: hidden;
    }

    .plan-header {
        background: linear-gradient(135deg, var(--primary-dark), var(--primary));
        color: white;
        padding: 1.5rem;
        text-align: center;
    }

    .plan-header h3 {
        margin: 0 0 0.5rem;
        font-size: 1.5rem;
    }

    .plan-header p {
        margin: 0;
        opacity: 0.9;
    }

    .safety-alert {
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 6px;
        padding: 1rem;
        margin-top: 1rem;
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        text-align: left;
    }

    .safety-alert i {
        color: #ffc107;
        font-size: 1.5rem;
        margin-top: 0.25rem;
    }

    .safety-alert strong {
        display: block;
        margin-bottom: 0.25rem;
        color: #ffc107;
    }

    .safety-alert p {
        margin: 0;
    }

    .safety-alert a {
        color: white;
        font-weight: bold;
        text-decoration: underline;
    }

    .timeline {
        padding: 2rem;
    }

    .timeline-item {
        display: flex;
        position: relative;
        margin-bottom: 2rem;
    }

    .timeline-item:last-child {
        margin-bottom: 0;
    }

    .timeline-item::before {
        content: '';
        position: absolute;
        left: 1.5rem;
        top: 2.5rem;
        bottom: -2rem;
        width: 2px;
        background-color: var(--primary-light);
        z-index: 1;
    }

    .timeline-item:last-child::before {
        display: none;
    }

    .timeline-marker {
        width: 3rem;
        height: 3rem;
        background-color: var(--primary);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2rem;
        position: relative;
        z-index: 2;
        flex-shrink: 0;
    }

    .timeline-content {
        flex-grow: 1;
        padding-left: 1.5rem;
    }

    .timeline-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0.5rem;
    }

    .timeline-header h4 {
        margin: 0;
        color: var(--primary-dark);
        font-size: 1.2rem;
    }

    .timeline-time {
        color: var(--accent);
        font-weight: 600;
        background-color: rgba(var(--accent-rgb), 0.1);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.9rem;
    }

    .timeline-content p {
        margin: 0;
        color: var(--text-secondary);
    }

    .location-finder {
        background-color: var(--neutral-lightgray);
        padding: 2rem;
        text-align: center;
    }

    .location-finder h4 {
        color: var(--primary);
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    .location-finder > p {
        margin-bottom: 1.5rem;
        color: var(--text-secondary);
    }

    .zip-input {
        display: flex;
        max-width: 300px;
        margin: 0 auto;
    }

    .zip-input input {
        flex-grow: 1;
        padding: 0.75rem 1rem;
        border: 2px solid var(--neutral-grey);
        border-radius: 4px 0 0 4px;
        font-size: 1rem;
    }

    .search-button {
        background-color: var(--primary);
        color: white;
        border: none;
        border-radius: 0 4px 4px 0;
        padding: 0 1rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    .search-button:hover {
        background-color: var(--primary-dark);
    }

    .search-button:disabled {
        background-color: var(--neutral-grey);
        cursor: not-allowed;
    }

    .service-areas {
        margin-top: 1rem;
    }

    .caption {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin: 0;
    }

    @media (max-width: 768px) {
        .timeline {
            padding: 1.5rem;
        }

        .timeline-header {
            flex-direction: column;
        }

        .timeline-time {
            margin-top: 0.25rem;
        }
    }
</style>
