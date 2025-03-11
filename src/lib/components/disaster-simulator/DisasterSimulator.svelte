<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import EmergencyTypeSelector from './EmergencyTypeSelector.svelte';
    import SeverityAssessment from './SeverityAssessment.svelte';
    import ResponsePlan from './ResponsePlan.svelte';
    import DeploymentMap from './DeploymentMap.svelte';
    import LeadCapture from './LeadCapture.svelte';

    // User information interface
    interface UserInfo {
        name: string;
        email: string;
        phone: string;
        address: string;
        propertyType?: string;
        notes?: string;
    }

    // Simulator data interface
    interface SimulatorData {
        emergencyType: string | null;
        severity: string | null;
        location: string | null;
        userInfo: UserInfo;
    }

    // Current step in the simulator process
    let currentStep = 0;

    // Simulator data state
    let simulatorData: SimulatorData = {
        emergencyType: null,
        severity: null,
        location: null,
        userInfo: {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    };

    // Store whether animation is complete
    let animationComplete = false;

    // Response time estimation (would be calculated based on actual location data)
    let estimatedResponseTime: number | null = null;

    // Handle emergency type selection
    function handleEmergencySelected(event: CustomEvent<{type: string}>): void {
        simulatorData.emergencyType = event.detail.type;
        currentStep = 1;
    }

    // Handle severity assessment completion
    function handleSeverityAssessed(event: CustomEvent<{severity: string}>): void {
        simulatorData.severity = event.detail.severity;
        currentStep = 2;
    }

    // Handle location selection
    function handleLocationSelected(event: CustomEvent<{location: string}>): void {
        simulatorData.location = event.detail.location;

        // Calculate estimated response time based on location
        // This would use actual data in a production environment
        estimatedResponseTime = Math.floor(Math.random() * 20) + 10; // Random time between 10-30 minutes

        currentStep = 3;
    }

    // Handle lead form submission
    function handleLeadSubmitted(event: CustomEvent<{userInfo: UserInfo}>): void {
        simulatorData.userInfo = event.detail.userInfo;
        // Here you would integrate with your Google Sheets or CRM
        currentStep = 4;
    }

    // Reset the simulator
    function resetSimulator(): void {
        simulatorData = {
            emergencyType: null,
            severity: null,
            location: null,
            userInfo: {
                name: '',
                email: '',
                phone: '',
                address: ''
            }
        };
        currentStep = 0;
        animationComplete = false;
    }

    // Mark animation as complete (called from deployment map)
    function handleAnimationComplete(): void {
        animationComplete = true;
    }

    // Step titles for progress indicator
    const stepTitles = [
        "Emergency Type",
        "Severity Assessment",
        "Response Timeline",
        "Get Your Plan",
        "Summary"
    ];
</script>

<div class="disaster-simulator">
    <div class="simulator-header">
        <h2>Interactive Disaster Response Simulator</h2>
        <p>See how Palm Build Restoration would respond to your specific emergency</p>
    </div>

    <!-- Progress indicators -->
    <div class="progress-steps">
        {#each stepTitles as title, index}
            <div class="step {currentStep >= index ? 'active' : ''} {currentStep > index ? 'completed' : ''}">
                <div class="step-number">{index + 1}</div>
                <div class="step-title">{title}</div>
            </div>
            {#if index < stepTitles.length - 1}
                <div class="step-connector {currentStep > index ? 'completed' : ''}"></div>
            {/if}
        {/each}
    </div>

    <div class="simulator-content">
        <!-- Step 0: Emergency Type Selection -->
        {#if currentStep === 0}
            <div in:fade>
                <EmergencyTypeSelector on:selected={handleEmergencySelected} />
            </div>

        <!-- Step 1: Severity Assessment -->
        {:else if currentStep === 1 && simulatorData.emergencyType}
            <div in:fade>
                <SeverityAssessment
                    emergencyType={simulatorData.emergencyType}
                    on:assessed={handleSeverityAssessed}
                    on:back={() => currentStep = 0}
                />
            </div>

        <!-- Step 2: Response Plan and Deployment Visualization -->
        {:else if currentStep === 2 && simulatorData.emergencyType && simulatorData.severity}
            <div class="response-container" in:fade>
                <ResponsePlan
                    emergencyType={simulatorData.emergencyType}
                    severity={simulatorData.severity}
                    on:locationSelected={handleLocationSelected}
                    on:back={() => currentStep = 1}
                />
            </div>

        <!-- Step 3: Lead Capture -->
        {:else if currentStep === 3 && simulatorData.location && estimatedResponseTime !== null}
            <div class="split-container" in:fade>
                <div class="deployment-visualization">
                    <DeploymentMap
                        location={simulatorData.location}
                        responseTime={estimatedResponseTime}
                        on:animationComplete={handleAnimationComplete}
                    />

                    {#if animationComplete}
                        <div class="response-time" in:fly={{ y: 20, duration: 800 }}>
                            <h3>Estimated Response Time: <span class="highlight">{estimatedResponseTime} minutes</span></h3>
                            <p>Palm Build teams are ready to respond to your emergency 24/7.</p>
                        </div>
                    {/if}
                </div>

                <div class="lead-form">
                    <LeadCapture
                        emergencyType={simulatorData.emergencyType}
                        severity={simulatorData.severity}
                        location={simulatorData.location}
                        on:submitted={handleLeadSubmitted}
                        on:back={() => currentStep = 2}
                    />
                </div>
            </div>

        <!-- Step 4: Summary -->
        {:else if currentStep === 4}
            <div class="summary-container" in:fade>
                <h3>Thank you, {simulatorData.userInfo.name}!</h3>
                <p>Your emergency response plan has been sent to <strong>{simulatorData.userInfo.email}</strong>.</p>
                <p>A Palm Build representative will contact you shortly at <strong>{simulatorData.userInfo.phone}</strong> to discuss next steps.</p>

                <div class="summary-details">
                    <h4>Emergency Details:</h4>
                    <ul>
                        <li><strong>Type:</strong> {simulatorData.emergencyType}</li>
                        <li><strong>Severity:</strong> {simulatorData.severity}</li>
                        <li><strong>Location:</strong> {simulatorData.location}</li>
                        <li><strong>Estimated Response Time:</strong> {estimatedResponseTime} minutes</li>
                    </ul>
                </div>

                <div class="emergency-reminder">
                    <p>
                        <strong>For immediate emergency assistance, please call:</strong><br>
                        <a href="tel:+18882455155" class="emergency-phone">(888) 245-5155</a>
                    </p>
                </div>

                <button class="primary-button" on:click={resetSimulator}>
                    Start Over
                </button>
            </div>
        {/if}
    </div>
</div>

<style>
    .disaster-simulator {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        margin: 2rem 0;
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }

    .simulator-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .simulator-header h2 {
        color: var(--primary);
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .simulator-header p {
        color: var(--text-secondary);
        font-size: 1.1rem;
    }

    .progress-steps {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        padding: 0 1rem;
    }

    .step {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 2;
    }

    .step-number {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: #e0e0e0;
        color: #757575;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-bottom: 0.5rem;
        transition: all 0.3s ease;
    }

    .step.active .step-number {
        background-color: var(--accent);
        color: white;
    }

    .step.completed .step-number {
        background-color: var(--primary);
        color: white;
    }

    .step-title {
        font-size: 0.85rem;
        color: #757575;
        text-align: center;
        transition: all 0.3s ease;
    }

    .step.active .step-title,
    .step.completed .step-title {
        color: var(--primary);
        font-weight: 600;
    }

    .step-connector {
        flex-grow: 1;
        height: 3px;
        background-color: #e0e0e0;
        margin: 0 8px;
        position: relative;
        top: -18px;
        z-index: 1;
        transition: all 0.3s ease;
    }

    .step-connector.completed {
        background-color: var(--primary);
    }

    .simulator-content {
        min-height: 450px;
        padding: 1rem 0;
    }

    .response-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .split-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    .deployment-visualization {
        position: relative;
    }

    .response-time {
        background: linear-gradient(135deg, var(--primary-dark), var(--primary));
        color: white;
        padding: 1.5rem;
        border-radius: 8px;
        margin-top: 1.5rem;
    }

    .response-time h3 {
        margin-top: 0;
        font-size: 1.4rem;
    }

    .highlight {
        color: var(--accent-alt);
        font-weight: bold;
    }

    .lead-form {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 1.5rem;
    }

    .summary-container {
        text-align: center;
        max-width: 700px;
        margin: 0 auto;
        padding: 2rem;
    }

    .summary-details {
        background-color: #f8f9fa;
        border-radius: 8px;
        padding: 1.5rem;
        margin: 2rem 0;
        text-align: left;
    }

    .summary-details h4 {
        margin-top: 0;
        color: var(--primary);
    }

    .summary-details ul {
        list-style: none;
        padding: 0;
    }

    .summary-details li {
        margin-bottom: 0.75rem;
    }

    .emergency-reminder {
        background-color: #fff3cd;
        border-left: 4px solid #ffc107;
        padding: 1rem;
        margin: 2rem 0;
        text-align: left;
    }

    .emergency-phone {
        color: var(--primary);
        font-size: 1.3rem;
        font-weight: bold;
        text-decoration: none;
        display: inline-block;
        margin-top: 0.5rem;
    }

    .primary-button {
        background-color: var(--primary);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .primary-button:hover {
        background-color: var(--primary-dark);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        .split-container {
            grid-template-columns: 1fr;
        }

        .progress-steps {
            overflow-x: auto;
            padding-bottom: 1rem;
        }

        .step-title {
            font-size: 0.75rem;
        }
    }
</style>
