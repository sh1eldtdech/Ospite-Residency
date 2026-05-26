import { useEffect } from 'react'

export default function PrivacyPolicy() {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="bg-cream min-h-screen pb-24">
      {/* Hero Header */}
      <section
        className="relative h-[40vh] flex items-end pb-12 px-6 bg-forest-900"
        style={{
          backgroundImage: "linear-gradient(rgba(15, 42, 29, 0.85), rgba(15, 42, 29, 0.95)), url('/hotel/docx_07.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-cream/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <p className="text-gold-400 text-xs uppercase tracking-[0.35em] font-body mb-2">Policies & Terms</p>
          <h1
            className="text-4xl md:text-6xl font-display font-semibold text-cream"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Privacy Policy & <span className="italic text-gold-400">Terms</span>
          </h1>
        </div>
      </section>

      {/* Main Document Content */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-forest-50/50 space-y-12 animate-fadeUp">
          
          {/* Privacy Policy Section */}
          <div className="space-y-8 text-forest-700 font-body leading-relaxed">
            <div className="border-b border-forest-50 pb-6">
              <h2
                className="text-4xl font-display font-bold text-forest-800 mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Privacy Policy
              </h2>
              <p className="text-sm text-forest-500 italic">
                <strong>Last Updated:</strong> May 26, 2026
              </p>
            </div>

            <p className="text-forest-600 font-medium">
              Welcome to the website of Ospite Residency. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and hotel-related services.
            </p>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                1. Information We Collect
              </h3>
              <p>
                We may collect the following information from users and guests through our website, contact forms, booking forms, or inquiry submissions:
              </p>
              <ul className="list-none space-y-2 pl-4">
                {[
                  'Full Name',
                  'Email Address',
                  'Contact Number / Phone Number',
                  'Booking or Reservation Details',
                  'Any additional information voluntarily provided by the user',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold-500 mt-1">🌿</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                2. Purpose of Data Collection
              </h3>
              <p>
                The information collected is used solely for hotel-related services and communication purposes, including:
              </p>
              <ul className="list-none space-y-2 pl-4">
                {[
                  'Responding to inquiries and reservation requests',
                  'Confirming bookings and providing hotel services',
                  'Customer support and communication',
                  'Improving user experience and website services',
                  'Sending important updates related to reservations or services',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold-500 mt-1">🌿</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                3. Data Sharing and Third Parties
              </h3>
              <p className="font-semibold text-forest-800">We respect your privacy.</p>
              <ul className="list-none space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">🌿</span>
                  <span>
                    We do <strong>not</strong> sell, rent, trade, or share your personal information with any third party, business, marketing agency, or external organization.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">🌿</span>
                  <span>
                    Your information is used strictly for internal hotel operations and customer service purposes only.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">🌿</span>
                  <span>
                    Data may only be disclosed if required by applicable law, legal process, or government authority.
                  </span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                4. Cookies and Website Usage
              </h3>
              <p>
                Our website may use basic cookies or analytics tools to improve website functionality and user experience. These cookies do not collect sensitive personal information.
              </p>
              <p>
                Users may choose to disable cookies through their browser settings.
              </p>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                5. Changes to This Privacy Policy
              </h3>
              <p>
                We reserve the right to update or modify this Privacy Policy at any time without prior notice. Updated versions will be posted on this page with the revised date.
              </p>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                6. Contact Us
              </h3>
              <p>
                If you have any questions regarding this Privacy Policy or your personal information, please contact Ospite Residency through the contact details available on the website.
              </p>
            </section>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-dashed border-forest-100 my-12" />

          {/* Terms & Conditions Section */}
          <div className="space-y-8 text-forest-700 font-body leading-relaxed">
            <div className="border-b border-forest-50 pb-6">
              <h2
                className="text-4xl font-display font-bold text-forest-800 mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Terms and Conditions
              </h2>
              <p className="text-sm text-forest-500 italic">
                <strong>Last Updated:</strong> May 26, 2026
              </p>
            </div>

            <p className="text-forest-600 font-medium">
              Welcome to the website of Ospite Residency. By accessing or using our website and services, you agree to comply with the following Terms and Conditions.
            </p>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                1. General Terms
              </h3>
              <ul className="list-none space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">🌿</span>
                  <span>All bookings, inquiries, reservations, and services are subject to availability and confirmation by the hotel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">🌿</span>
                  <span>Guests are requested to provide accurate and complete information while making reservations or inquiries.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">🌿</span>
                  <span>The hotel reserves the right to modify, update, suspend, or discontinue any service, pricing, or policy without prior notice.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                2. Financial Transactions and Policies
              </h3>
              <p>
                Any financial transaction, payment-related inquiry, refund request, cancellation, adjustment, dispute resolution, or service-related matter shall be subject to:
              </p>
              <ul className="list-none space-y-2 pl-4 mb-4">
                {[
                  'Applicable hotel rules, regulations, and internal policies',
                  'Current and future government rules, notifications, taxes, or legal implementations',
                  'Weather conditions, natural disasters, landslides, road blockages, transportation disruptions, or other unforeseen circumstances',
                  'Local authority restrictions, tourism regulations, safety advisories, or emergency conditions',
                  'Technical issues, banking delays, payment gateway processing, or any direct or indirect operational factors involved',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gold-500 mt-1">🌿</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-forest-800">
                The hotel shall not be held responsible for delays, interruptions, losses, or inconveniences caused due to such external or unavoidable factors.
              </p>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                3. Website Usage
              </h3>
              <ul className="list-none space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">🌿</span>
                  <span>Users shall not misuse, disrupt, or attempt unauthorized access to the website or its services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-500 mt-1">🌿</span>
                  <span>Any unlawful activity, false booking, fraudulent transaction, or misuse of hotel information may result in denial of service and legal action where applicable.</span>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                4. Privacy
              </h3>
              <p>
                User information collected through the website shall be handled in accordance with the Privacy Policy of Ospite Residency.
              </p>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                5. Modifications to Terms
              </h3>
              <p>
                Ospite Residency reserves the right to update or revise these Terms and Conditions at any time without prior notice. Continued use of the website and services shall be considered acceptance of the updated terms.
              </p>
            </section>

            <section className="space-y-4">
              <h3
                className="text-xl font-display font-semibold text-forest-900 border-l-4 border-gold-400 pl-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                6. Contact
              </h3>
              <p>
                For any queries regarding these Terms and Conditions, users may contact Ospite Residency through the official contact details provided on the website.
              </p>
            </section>
          </div>

        </div>
      </div>
    </div>
  )
}
