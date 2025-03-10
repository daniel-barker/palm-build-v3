<script>
    // Get current year for copyright
    const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-grid">
			<div class="footer-column">
				<div class="logo">
					<span class="logo-text">Palm Build</span>
				</div>
				<p class="footer-tagline">Restoring Properties, Rebuilding Lives for over 30 years.</p>
				<p class="service-areas">Serving Florida, North Carolina, South Carolina, Georgia, Texas, Tennessee, and New Jersey.</p>
				<div class="social-icons">
					<a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
					<a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
					<a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
					<a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
				</div>
			</div>

			<div class="footer-column">
				<h3>Services</h3>
				<ul class="footer-links">
					<li><a href="#fire">Fire & Smoke Restoration</a></li>
					<li><a href="#water">Water Restoration</a></li>
					<li><a href="#mold">Mold Remediation</a></li>
					<li><a href="#asbestos">Asbestos Abatement</a></li>
					<li><a href="#reconstruction">Complete Reconstruction</a></li>
				</ul>
			</div>

			<div class="footer-column">
				<h3>Quick Links</h3>
				<ul class="footer-links">
					<li><a href="#about">About Us</a></li>
					<li><a href="#testimonials">Testimonials</a></li>
					<li><a href="#portfolio">Recent Projects</a></li>
					<li><a href="#faq">FAQ</a></li>
					<li><a href="#blog">Blog</a></li>
				</ul>
			</div>

			<div class="footer-column">
				<h3>Contact Us</h3>
				<ul class="contact-info">
					<li>
						<i class="fas fa-map-marker-alt"></i> 378 Crompton Street<br />Charlotte, NC 28273
					</li>
					<li><i class="fas fa-phone"></i> <a href="tel:+19546412018">+1 (954) 641-2018</a></li>
					<li>
						<i class="fas fa-envelope"></i>
						<a href="mailto:admin@palmbld.com">admin@palmbld.com</a>
					</li>
				</ul>
				<div class="contact-links">
					<a href="/contact/emergency" class="contact-link emergency-link"><i class="fas fa-exclamation-circle"></i> Emergency Contact</a>
					<a href="/contact/quote" class="contact-link quote-link"><i class="fas fa-file-invoice-dollar"></i> Request Quote</a>
					<a href="/contact" class="contact-link"><i class="fas fa-envelope"></i> General Contact</a>
				</div>
				<p class="emergency-text">24/7 Emergency Service Available</p>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; {currentYear} Palm Build Restoration. All Rights Reserved.</p>
			<p class="footer-links">
				<a href="#privacy">Privacy Policy</a> |
				<a href="#terms">Terms of Service</a> |
				<a href="#sitemap">Sitemap</a>
			</p>
		</div>
	</div>
</footer>

<style>
	/* Footer Styles */
	.footer {
		background-color: var(--primary-dark);
		color: var(--neutral-light);
		padding-top: 4rem;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.footer-column h3 {
		color: var(--neutral-white);
		font-size: 1.2rem;
		margin-bottom: 1.5rem;
		position: relative;
	}

	.footer-column h3::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -0.5rem;
		width: 50px;
		height: 2px;
		background-color: var(--accent);
	}

	.footer-tagline {
		margin: 1rem 0 0.5rem;
		font-style: italic;
	}

	.service-areas {
		font-size: 0.85rem;
		margin-bottom: 1rem;
		line-height: 1.4;
		opacity: 0.85;
	}

	.social-icons {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	.social-icons a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.1);
		color: var(--neutral-white);
		transition: all 0.3s ease;
	}

	.social-icons a:hover {
		background-color: var(--accent);
		transform: translateY(-3px);
	}

	.footer-links,
	.contact-info {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-links li {
		margin-bottom: 0.75rem;
	}

	.footer-links a {
		color: var(--neutral-light);
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.footer-links a:hover {
		color: var(--accent);
		text-decoration: underline;
	}

	.contact-info li {
		display: flex;
		align-items: flex-start;
		margin-bottom: 1rem;
		gap: 0.75rem;
	}

	.contact-info i {
		color: var(--accent);
		margin-top: 0.25rem;
	}

	.contact-info a {
		color: var(--neutral-light);
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.contact-info a:hover {
		color: var(--accent);
	}

	.emergency-text {
		font-weight: 600;
		color: var(--accent-alt);
		margin-top: 1rem;
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}

	.contact-link {
		color: var(--neutral-light);
		text-decoration: none;
		transition: all 0.2s ease;
		font-size: 0.9rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.contact-link:hover {
		color: var(--neutral-white);
		transform: translateX(3px);
	}

	.emergency-link {
		color: var(--accent-alt);
	}

	.quote-link {
		color: #2196F3;
	}

	.footer-bottom {
		margin-top: 3rem;
		padding: 1.5rem 0;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.footer-bottom p {
		margin: 0;
	}

	.footer-bottom .footer-links {
		display: flex;
		gap: 1rem;
	}

	.logo-text {
		color: var(--neutral-white);
		font-family: var(--font-heading);
		font-size: 1.8rem;
		font-weight: 700;
	}

	/* Responsive Styles */
	@media (max-width: 992px) {
		.footer-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}

		.footer-bottom {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
