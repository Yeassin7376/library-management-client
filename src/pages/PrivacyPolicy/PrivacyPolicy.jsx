import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className=" px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mb-6">
        At <strong>Our Library Management System</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our application.
      </p>

      <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Personal details such as your name, email address, and contact number.</li>
        <li>Account login information.</li>
        <li>Library usage history, including borrowed and returned books.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
      <p className="mb-6">
        We use your data to manage your library account, process book transactions, send due date reminders, improve our services, and comply with legal requirements.
      </p>

      <h2 className="text-xl font-semibold mb-3">3. Data Protection</h2>
      <p className="mb-6">
        We implement strong security measures to protect your information. However, please note that no method of data transmission over the internet is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mb-3">4. Sharing of Information</h2>
      <p className="mb-6">
        We do not sell, trade, or rent your personal data to third parties. Your information is shared only with authorized staff and trusted service providers necessary for library operations.
      </p>

      <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Access your personal information.</li>
        <li>Request correction of inaccurate data.</li>
        <li>Request deletion of your account and associated data.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">6. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
      </p>

      <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy, please contact us at:  
        <a href="mailto:support@libraryapp.com" className="text-blue-600 underline">
          support@libraryapp.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
