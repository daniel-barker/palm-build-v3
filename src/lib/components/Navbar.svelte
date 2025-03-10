<script lang="ts">
	// Props and imports can be added here
	import { services } from '$lib/data/services.js';

	let isMenuOpen = false;
	let isServicesDropdownOpen = false;
	let isMobileServicesDropdownOpen = false;
	let isClosingMobileServicesDropdown = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		// Close services dropdown when main menu is toggled
		if (isMobileServicesDropdownOpen) {
			closeMobileServicesDropdown();
		}
	}

	function toggleServicesDropdown() {
		isServicesDropdownOpen = !isServicesDropdownOpen;
	}

	function toggleMobileServicesDropdown(event: MouseEvent) {
		event.preventDefault();
		event.stopPropagation();

		if (isMobileServicesDropdownOpen) {
			closeMobileServicesDropdown();
		} else {
			isMobileServicesDropdownOpen = true;
			isClosingMobileServicesDropdown = false;
		}
	}

	function closeMobileServicesDropdown() {
		isClosingMobileServicesDropdown = true;

		// After animation completes, actually close the dropdown
		setTimeout(() => {
			isMobileServicesDropdownOpen = false;
			isClosingMobileServicesDropdown = false;
		}, 280); // Slightly less than animation duration
	}

	function closeServicesDropdown() {
		isServicesDropdownOpen = false;
	}
</script>

<nav class="navbar">
	<div class="navbar-container container">
		<div class="logo">
			<a href="/">
				<img src="/logo/palm_build.png" alt="Palm Build Logo" class="logo-img" />
			</a>
		</div>

		<div class="mobile-controls">
			<div class="emergency-contact emergency-mobile">
				<div class="mobile-emergency-dropdown">
					<a href="tel:+19546412018" class="emergency-btn mobile-emergency-btn">
						<i class="fas fa-phone-alt"></i> <span class="emergency-text">Emergency</span>
					</a>
					<a href="/contact/emergency" class="emergency-form-btn">
						<i class="fas fa-exclamation-triangle"></i>
					</a>
				</div>
			</div>

			<button on:click={toggleMenu} class="hamburger" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
				<span class:active={isMenuOpen}></span>
				<span class:active={isMenuOpen}></span>
				<span class:active={isMenuOpen}></span>
			</button>
		</div>

		<ul class="nav-menu" class:open={isMenuOpen}>
			<li><a href="/" on:click={toggleMenu}>Home</a></li>
			<li class="has-dropdown">
				<!-- Desktop dropdown trigger -->
				<a
					href="#services"
					on:click|preventDefault={toggleServicesDropdown}
					on:mouseenter={() => isServicesDropdownOpen = true}
					class:active={isServicesDropdownOpen}
					class="desktop-dropdown-trigger"
				>
					Services <i class="fas fa-chevron-down dropdown-icon"></i>
				</a>

				<!-- Mobile dropdown trigger -->
				<a
					href="#services"
					on:click={toggleMobileServicesDropdown}
					class:active={isMobileServicesDropdownOpen}
					class="mobile-dropdown-trigger"
				>
					Services <i class="fas fa-chevron-down dropdown-icon" class:rotate={isMobileServicesDropdownOpen}></i>
				</a>

				<!-- Mobile dropdown content -->
				{#if isMobileServicesDropdownOpen}
					<div class="mobile-services-dropdown" class:closing={isClosingMobileServicesDropdown}>
						{#each services as service}
							<a href={service.link} class="mobile-service-item" on:click={toggleMenu}>
								<div class="service-icon">
									{@html service.icon}
								</div>
								<div class="service-content">
									<h3>{service.title}</h3>
									<p class="service-description">{service.description}</p>
								</div>
							</a>
						{/each}
					</div>
				{/if}
			</li>
			<li><a href="/about" on:click={toggleMenu}>About Us</a></li>
			<li><a href="/contact" class="contact-item" on:click={toggleMenu}>Contact</a></li>
		</ul>

		<div class="emergency-contact emergency-desktop">
			<div class="emergency-dropdown">
				<a href="tel:+19546412018" class="emergency-btn">
					<i class="fas fa-phone-alt"></i> Emergency Response
				</a>
				<div class="emergency-dropdown-content">
					<a href="tel:+19546412018" class="emergency-action">
						<i class="fas fa-phone-alt"></i> Call Now
					</a>
					<a href="/contact/emergency" class="emergency-action">
						<i class="fas fa-exclamation-triangle"></i> Emergency Form
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Services Dropdown -->
	{#if isServicesDropdownOpen}
		<div
			class="services-dropdown"
			on:mouseleave={closeServicesDropdown}
		>
			<div class="container">
				<div class="services-grid">
					{#each services as service, index}
						<a href={service.link} class="service-item" on:click={closeServicesDropdown}>
							<div class="service-icon">
								{@html service.icon}
							</div>
							<div class="service-content">
								<h3>{service.title}</h3>
								<p>{service.description}</p>
							</div>
						</a>
					{/each}
				</div>
			</div>
		</div>
	{/if}

	<style>
		/* Header & Navigation */
		.navbar {
			background-color: var(--neutral-white);
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
			z-index: 1000;
		}

		.navbar-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 1rem;
			position: relative;
		}

		.logo {
			display: flex;
			align-items: center;
			z-index: 1001;
		}

		.logo a {
			text-decoration: none;
		}

		.logo-img {
			height: auto;
			width: 150px;
			display: block;
		}

		.nav-menu {
			display: flex;
			list-style: none;
			margin: 0;
			padding: 0;
		}

		.nav-menu li {
			margin: 0 1rem;
		}

		.nav-menu a {
			color: var(--neutral-dark);
			text-decoration: none;
			font-weight: 500;
			font-family: var(--font-heading);
			position: relative;
			padding: 0.5rem 0;
			transition: color 0.3s ease;
			display: flex;
			align-items: center;
			gap: 0.25rem;
		}

		.nav-menu a:hover, .nav-menu a.active {
			color: var(--primary);
		}

		.nav-menu a::after {
			content: '';
			position: absolute;
			width: 0;
			height: 2px;
			bottom: 0;
			left: 0;
			background-color: var(--accent);
			transition: width 0.3s ease;
		}

		.nav-menu a:hover::after, .nav-menu a.active::after {
			width: 100%;
		}

		.dropdown-icon {
			font-size: 0.75rem;
			transition: transform 0.3s ease;
		}

		a.active .dropdown-icon {
			transform: rotate(180deg);
		}

		.has-dropdown {
			position: relative;
		}

		/* Add styles for the dropdown container */
		.dropdown-container {
			position: relative;
		}

		/* Services Dropdown */
		.services-dropdown {
			position: absolute;
			left: 0;
			right: 0;
			top: 100%;
			background-color: var(--neutral-white);
			box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
			border-top: 3px solid var(--accent);
			padding: 2rem 0;
			z-index: 999;
			animation: fadeIn 0.3s ease;
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: translateY(-10px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}

		.services-grid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(2, auto);
			gap: 2rem;
		}

		.service-item {
			display: flex;
			align-items: flex-start;
			padding: 1rem;
			border-radius: 8px;
			text-decoration: none;
			color: var(--neutral-dark);
			transition: background-color 0.3s ease, transform 0.3s ease;
		}

		.service-item:hover {
			background-color: rgba(0, 0, 0, 0.02);
			transform: translateY(-2px);
		}

		.service-icon {
			flex-shrink: 0;
			width: 48px;
			height: 48px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 1rem;
			color: var(--primary);
		}

		.service-content h3 {
			margin: 0 0 0.5rem;
			font-size: 1.1rem;
			font-weight: 600;
			color: var(--primary);
		}

		.service-content p {
			margin: 0;
			font-size: 0.9rem;
			color: var(--neutral-mid);
			line-height: 1.4;
		}

		.mobile-controls {
			display: none;
		}

		.emergency-mobile {
			display: none;
		}

		.hamburger {
			display: none;
		}

		.desktop-dropdown-trigger {
			display: flex;
		}

		.dropdown-icon.rotate {
			transform: rotate(180deg);
		}

		.mobile-dropdown-trigger {
			display: none !important;
		}

		.mobile-services-dropdown {
			display: none !important;
		}

		/* Mobile dropdown animations */
		@keyframes mobileDropdownSlide {
			from {
				max-height: 0;
				opacity: 0;
			}
			to {
				max-height: 1000px;
				opacity: 1;
			}
		}

		@keyframes mobileDropdownSlideUp {
			from {
				max-height: 1000px;
				opacity: 1;
			}
			to {
				max-height: 0;
				opacity: 0;
			}
		}

		/* Responsive Styles */
		@media (max-width: 992px) {
			.navbar-container {
				padding: 0.5rem 1rem;
			}

			.desktop-dropdown-trigger {
				display: none;
			}

			.mobile-dropdown-trigger {
				display: flex !important;
			}

			.mobile-controls {
				display: flex;
				align-items: center;
				gap: 1rem;
				z-index: 1001;
			}

			.nav-menu {
				position: fixed;
				top: 0;
				left: -100%;
				height: 100vh;
				width: 100%;
				flex-direction: column;
				background-color: var(--neutral-white);
				padding: 5rem 2rem 2rem;
				z-index: 1000;
				transition: left 0.3s ease;
				overflow-y: auto;
				box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
			}

			.nav-menu.open {
				left: 0;
			}

			.nav-menu li {
				margin: 0.75rem 0;
			}

			.nav-menu a {
				padding: 0.75rem 0;
				width: 100%;
				justify-content: space-between;
			}

			.nav-menu a::after {
				display: none;
			}

			/* Mobile Services dropdown */
			.mobile-services-dropdown {
				display: flex;
				flex-direction: column;
				background-color: var(--neutral-lightest);
				padding: 1rem;
				border-radius: 8px;
				margin-top: 0.5rem;
				animation: slideDown 0.3s ease;
				transform-origin: top center;
			}

			.mobile-services-dropdown.closing {
				animation: slideUp 0.3s ease;
			}

			.mobile-service-item {
				display: flex;
				align-items: flex-start;
				padding: 0.75rem;
				text-decoration: none;
				color: var(--neutral-dark);
				margin-bottom: 0.5rem;
				border-radius: 6px;
				transition: background-color 0.2s ease;
			}

			.mobile-service-item:last-child {
				margin-bottom: 0;
			}

			.mobile-service-item:hover {
				background-color: rgba(var(--primary-rgb), 0.05);
			}

			.service-icon {
				margin-right: 0.75rem;
				font-size: 1.25rem;
				color: var(--primary);
				flex-shrink: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				width: 32px;
			}

			.service-content h3 {
				margin: 0 0 0.25rem;
				font-size: 0.95rem;
			}

			.service-description {
				font-size: 0.8rem;
				color: var(--neutral-medium);
				margin: 0;
			}

			.services-dropdown {
				display: none !important;
			}

			.dropdown-icon {
				transition: transform 0.3s ease;
			}

			.dropdown-icon.rotate {
				transform: rotate(180deg);
			}

			.hamburger {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				height: 20px;
				width: 28px;
				background: none;
				border: none;
				cursor: pointer;
				padding: 0;
				z-index: 1001;
			}

			.hamburger span {
				display: block;
				height: 3px;
				width: 100%;
				background-color: var(--neutral-dark);
				border-radius: 3px;
				transition: all 0.3s ease;
			}

			.hamburger span:nth-child(1).active {
				transform: translateY(8.5px) rotate(45deg);
			}

			.hamburger span:nth-child(2).active {
				opacity: 0;
			}

			.hamburger span:nth-child(3).active {
				transform: translateY(-8.5px) rotate(-45deg);
			}

			.emergency-desktop {
				display: none;
			}

			.emergency-mobile {
				display: block !important;
			}

			.emergency-text {
				display: none;
			}

			.emergency-btn {
				padding: 0.5rem 0.75rem;
				font-size: 0.9rem;
			}
		}

		@keyframes slideDown {
			from {
				opacity: 0;
				transform: scaleY(0);
			}
			to {
				opacity: 1;
				transform: scaleY(1);
			}
		}

		@keyframes slideUp {
			from {
				opacity: 1;
				transform: scaleY(1);
			}
			to {
				opacity: 0;
				transform: scaleY(0);
			}
		}

		@media (max-width: 768px) {
			.navbar-container {
				padding: 0.75rem 1rem;
			}

			.logo-img {
				width: 140px;
			}

			.nav-menu li {
				margin: 0.25rem 0;
			}

			.nav-menu a {
				font-size: 1.1rem;
				padding: 0.6rem;
			}
		}

		.emergency-btn {
			background-color: var(--accent-alt);
			color: white;
			padding: 0.5rem 1rem;
			border-radius: 4px;
			text-decoration: none;
			font-weight: 600;
			font-family: var(--font-heading);
			display: flex;
			align-items: center;
			gap: 0.5rem;
			transition: background-color 0.3s ease;
		}

		.emergency-btn:hover {
			background-color: #d32f2f;
		}

		.emergency-dropdown {
			position: relative;
		}

		.emergency-dropdown-content {
			position: absolute;
			top: 100%;
			right: 0;
			width: 200px;
			background-color: white;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			border-radius: 4px;
			padding: 0.5rem;
			display: none;
			z-index: 1000;
			margin-top: 0.5rem;
		}

		.emergency-dropdown:hover .emergency-dropdown-content {
			display: block;
		}

		/* Adding a buffer zone to prevent dropdown from closing */
		.emergency-dropdown::after {
			content: '';
			position: absolute;
			height: 15px;
			width: 100%;
			bottom: -15px;
			left: 0;
		}

		.emergency-action {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 0.75rem;
			color: var(--neutral-dark);
			text-decoration: none;
			border-radius: 4px;
			transition: background-color 0.2s ease;
		}

		.emergency-action:hover {
			background-color: rgba(0, 0, 0, 0.05);
		}

		.emergency-action:first-child {
			color: var(--accent-alt);
		}

		.mobile-controls {
			display: none;
		}

		.emergency-mobile {
			display: none;
		}

		.mobile-emergency-dropdown {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		.mobile-emergency-btn {
			padding: 0.5rem;
			border-radius: 4px;
		}

		.emergency-form-btn {
			background-color: #d9534f;
			color: white;
			padding: 0.5rem;
			border-radius: 4px;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			transition: background-color 0.3s ease;
		}

		.emergency-form-btn:hover {
			background-color: #c9302c;
		}
	</style>
</nav>
