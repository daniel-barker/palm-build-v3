/**
 * This file contains the functions to integrate with Google Sheets API
 * via Google Apps Script web app
 */

/**
 * The URL of your Google Apps Script web app
 * Replace this with your actual deployed script URL
 */
const GOOGLE_SCRIPT_URL =
	'https://script.google.com/macros/s/AKfycbziAPkfatA4YXHEvXODxQbggHDNNk5htiOgAY6KBNwXOkDYDpnPAKAl5IPU8wGpsxdz1w/exec';

/**
 * Submit form data to Google Sheets via Google Apps Script
 * @param {{name: string, email: string, phone: string, subject: string, message: string, website?: string}} formData - The form data to submit
 * @param {string} formType - The type of form (regular, emergency, quote)
 * @returns {Promise<boolean>} - Promise that resolves to true if submission was successful
 */
export async function submitToGoogleSheets(formData, formType = 'regular') {
	console.log('Submitting form data to Google Sheets:', formData);
	console.log('Form type:', formType);

	try {
		// Check for honeypot field - if it's filled, we silently reject but pretend success
		if (formData.website) {
			console.log('Honeypot field filled - rejecting submission silently');
			return true; // Pretend success to the bot
		}

		// Simple validation to ensure we have the required fields
		if (
			!formData.name ||
			!formData.email ||
			!formData.phone ||
			!formData.subject ||
			!formData.message
		) {
			console.error('Missing required form fields');
			return false;
		}

		// Create a clean copy of the form data without the honeypot field
		const cleanFormData = {
			name: formData.name,
			email: formData.email,
			phone: formData.phone,
			subject: formData.subject,
			message: formData.message,
			formType: formType // Add the form type to the data sent to Google Sheets
		};

		// Send data to Google Apps Script
		const response = await fetch(GOOGLE_SCRIPT_URL, {
			method: 'POST',
			body: JSON.stringify(cleanFormData),
			headers: {
				'Content-Type': 'application/json'
			},
			mode: 'no-cors' // Required for Google Apps Script
		});

		// Due to no-cors mode, we can't actually read the response
		// So we assume success if no error was thrown
		return true;
	} catch (error) {
		console.error('Error submitting to Google Sheets:', error);
		return false;
	}
}

/**
 * Validate form data before submission
 * @param {{name: string, email: string, phone: string, subject: string, message: string}} formData - The form data to validate
 * @returns {Object} - Object containing any validation errors
 */
export function validateContactForm(formData) {
	const errors = {};

	if (!formData.name?.trim()) {
		errors.name = 'Name is required';
	}

	if (!formData.email?.trim()) {
		errors.email = 'Email is required';
	} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
		errors.email = 'Email is invalid';
	}

	if (!formData.phone?.trim()) {
		errors.phone = 'Phone number is required';
	}

	if (!formData.subject?.trim()) {
		errors.subject = 'Subject is required';
	}

	if (!formData.message?.trim()) {
		errors.message = 'Message is required';
	}

	return errors;
}
