<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';

    // Props
    export let location: string;
    export let responseTime: number;

    // Create a dispatcher to send events back to the parent
    const dispatch = createEventDispatcher<{
        animationComplete: void;
    }>();

    // Animation state
    let mapLoaded = false;
    let vehiclePosition = 0;
    let animationInterval: number;

    // Coordinate interface
    interface Coordinate {
        lat: number;
        lng: number;
    }

    // Service center coordinates (for demo purposes)
    const serviceCenter: Coordinate = { lat: 35.2271, lng: -80.8431 }; // Charlotte

    // Customer coordinates (randomized for demo)
    const customerLocation: Coordinate = {
        lat: serviceCenter.lat + (Math.random() * 0.05 - 0.025),
        lng: serviceCenter.lng + (Math.random() * 0.05 - 0.025)
    };

    // Calculate path points between service center and customer
    const pathPoints: Coordinate[] = [];
    const totalPoints = 100;

    for (let i = 0; i <= totalPoints; i++) {
        const point: Coordinate = {
            lat: serviceCenter.lat + (customerLocation.lat - serviceCenter.lat) * (i / totalPoints),
            lng: serviceCenter.lng + (customerLocation.lng - serviceCenter.lng) * (i / totalPoints)
        };
        pathPoints.push(point);
    }

    // Once component is mounted, start animation
    onMount(() => {
        // Simulate map loading delay
        setTimeout(() => {
            mapLoaded = true;

            // Start vehicle animation after map loads
            setTimeout(() => {
                startAnimation();
            }, 500);
        }, 1000);

        // Cleanup on component destroy
        return () => {
            if (animationInterval) clearInterval(animationInterval);
        };
    });

    // Start the vehicle animation
    function startAnimation(): void {
        let step = 0;
        const totalSteps = 100;
        const stepTime = (responseTime * 60 * 1000) / totalSteps; // Convert minutes to milliseconds

        // For demo, we'll speed up the animation significantly
        const animationSpeed = stepTime / 50; // 50x faster than real time

        animationInterval = window.setInterval(() => {
            if (step >= totalSteps) {
                clearInterval(animationInterval);
                dispatch('animationComplete');
                return;
            }

            vehiclePosition = step;
            step++;
        }, animationSpeed);
    }
</script>

<div class="deployment-map">
    {#if !mapLoaded}
        <div class="loading-map">
            <div class="spinner"></div>
            <p>Loading response map...</p>
        </div>
    {:else}
        <div class="map-container">
            <!-- Simplified map visualization for demo purposes -->
            <div class="map-background">
                <!-- Service center marker -->
                <div class="marker service-center" style="left: {serviceCenter.lng * 10}%; top: {serviceCenter.lat * 10}%;">
                    <i class="fas fa-building"></i>
                    <span class="marker-label">Palm Build HQ</span>
                </div>

                <!-- Customer location marker -->
                <div class="marker customer-location" style="left: {customerLocation.lng * 10}%; top: {customerLocation.lat * 10}%;">
                    <i class="fas fa-home"></i>
                    <span class="marker-label">{location}</span>
                </div>

                <!-- Path visualization -->
                <svg class="path-svg" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path
                        d={`M ${serviceCenter.lng * 100} ${serviceCenter.lat * 100} L ${customerLocation.lng * 100} ${customerLocation.lat * 100}`}
                        class="path-line"
                    />
                    <path
                        d={`M ${serviceCenter.lng * 100} ${serviceCenter.lat * 100} L ${customerLocation.lng * 100} ${customerLocation.lat * 100}`}
                        class="path-progress"
                        style="stroke-dashoffset: {100 - vehiclePosition}%;"
                    />
                </svg>

                <!-- Vehicle on path -->
                {#if vehiclePosition > 0 && vehiclePosition < pathPoints.length}
                    <div
                        class="vehicle"
                        style="left: {pathPoints[vehiclePosition].lng * 10}%; top: {pathPoints[vehiclePosition].lat * 10}%;"
                    >
                        <i class="fas fa-truck"></i>
                    </div>
                {/if}

                <!-- Distance indicator -->
                <div class="distance-indicator">
                    <div class="progress-bar">
                        <div class="progress" style="width: {vehiclePosition}%;"></div>
                    </div>
                    <p>Response Progress: {vehiclePosition}%</p>
                    <p class="eta">ETA: <strong>{Math.ceil((responseTime * (100 - vehiclePosition)) / 100)} minutes</strong></p>
                </div>
            </div>
        </div>
    {/if}
</div>

<style>
    .deployment-map {
        position: relative;
        height: 400px;
        border-radius: 8px;
        overflow: hidden;
        background-color: #f0f0f0;
    }

    .loading-map {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: var(--text-secondary);
    }

    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: var(--primary);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .map-container {
        height: 100%;
        position: relative;
    }

    .map-background {
        background-color: #e9eef2;
        background-image:
            linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
        background-size: 20px 20px;
        height: 100%;
        width: 100%;
        position: relative;
    }

    .marker {
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: 2;
    }

    .marker i {
        font-size: 1.5rem;
        padding: 0.75rem;
        border-radius: 50%;
        background-color: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        color: var(--primary);
    }

    .marker-label {
        position: absolute;
        background-color: white;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 600;
        white-space: nowrap;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 0.25rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    .service-center i {
        color: var(--primary);
    }

    .customer-location i {
        color: var(--accent);
    }

    .path-svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    .path-line {
        stroke: rgba(0, 0, 0, 0.1);
        stroke-width: 3;
        fill: none;
    }

    .path-progress {
        stroke: var(--primary);
        stroke-width: 3;
        fill: none;
        stroke-dasharray: 100%;
        transition: stroke-dashoffset 0.5s ease;
    }

    .vehicle {
        position: absolute;
        transform: translate(-50%, -50%);
        z-index: 3;
        transition: all 0.5s linear;
    }

    .vehicle i {
        font-size: 1.2rem;
        padding: 0.5rem;
        border-radius: 50%;
        background-color: var(--primary);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        color: white;
        animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    .distance-indicator {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        right: 1rem;
        background-color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .progress-bar {
        width: 100%;
        height: 8px;
        background-color: #e0e0e0;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 0.5rem;
    }

    .progress {
        height: 100%;
        background-color: var(--primary);
        border-radius: 4px;
        transition: width 0.5s ease;
    }

    .distance-indicator p {
        margin: 0.25rem 0;
        font-size: 0.9rem;
        color: var(--text-secondary);
    }

    .eta {
        color: var(--primary-dark) !important;
        font-size: 1rem !important;
    }
</style>
