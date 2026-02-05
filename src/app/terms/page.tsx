import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Rapid Entrepreneurs. Understand the terms and conditions for using our digital services.',
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-blue py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl text-white mb-4">Terms of Service</h1>
          <p className="text-gray-300 text-lg">Last updated: February 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="heading-md text-deep-blue mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using the services provided by Rapid Entrepreneurs (&ldquo;Company,&rdquo;
                &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), including our website rapidentrepreneurs.com,
                Akwaaba AI, and all related digital services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">2. Services Description</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Rapid Entrepreneurs provides digital solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Web development and design</li>
                <li>Mobile application development</li>
                <li>E-commerce platform development</li>
                <li>Digital marketing services</li>
                <li>Fintech and mobile money integration</li>
                <li>AI solutions including Akwaaba AI</li>
                <li>Custom software development</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">3. Client Obligations</h2>
              <p className="text-gray-600 leading-relaxed mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information for project requirements</li>
                <li>Respond to communications and review requests in a timely manner</li>
                <li>Ensure you have the rights to any content you provide for use in our services</li>
                <li>Make payments according to agreed-upon schedules</li>
                <li>Not use our services for any illegal or unauthorized purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Payment terms are outlined in individual project proposals and agreements. General terms include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>A deposit is required before project commencement (typically 50%)</li>
                <li>We accept payments via bank transfer, mobile money (MTN MoMo, Vodafone Cash), and major credit cards</li>
                <li>All prices are quoted in Ghanaian Cedis (GHS) unless otherwise specified</li>
                <li>Invoices are due within 14 days of issuance unless otherwise agreed</li>
                <li>Late payments may incur a 2% monthly interest charge</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Client Materials:</strong> You retain ownership of all content, data, and materials
                you provide to us for use in your project.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Our Work:</strong> Upon full payment, you receive ownership of custom code, designs,
                and deliverables created specifically for your project. We retain the right to use general
                methodologies, techniques, and tools developed during the project.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Third-Party Components:</strong> Some projects may include open-source or licensed
                third-party components, which are subject to their respective licenses.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">6. Akwaaba AI Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you use Akwaaba AI, the following additional terms apply:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Akwaaba AI is provided on a subscription basis with plans as listed on our Products page</li>
                <li>Usage is subject to the limits of your chosen plan</li>
                <li>We may update AI features and capabilities from time to time</li>
                <li>You are responsible for reviewing AI-generated content for accuracy before relying on it</li>
                <li>We are not liable for decisions made based solely on AI-generated responses</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">7. Project Timelines</h2>
              <p className="text-gray-600 leading-relaxed">
                Project timelines are estimates provided in good faith. While we strive to meet all deadlines,
                delays may occur due to factors including client feedback delays, scope changes, or technical
                challenges. We will communicate any timeline changes promptly and work to minimize delays.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">8. Warranties and Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We warrant that our services will be performed in a professional and workmanlike manner.
                We provide a 30-day warranty period after project delivery for bug fixes related to the
                agreed-upon specifications.
              </p>
              <p className="text-gray-600 leading-relaxed">
                EXCEPT AS EXPRESSLY STATED, OUR SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by Ghanaian law, Rapid Entrepreneurs shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages, including loss of
                profits, data, or business opportunities, arising from or related to the use of our services.
                Our total liability for any claim shall not exceed the total fees paid by you in the 12 months
                preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">10. Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                Either party may terminate a project agreement with 30 days written notice. In case of
                termination, you will be invoiced for all work completed up to the termination date.
                Any pre-paid amounts for uncompleted work will be refunded, minus reasonable administrative costs.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">11. Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the
                Republic of Ghana. Any disputes arising from these terms shall be resolved through the courts
                of Accra, Ghana, unless both parties agree to alternative dispute resolution.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">12. Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective
                upon posting to our website. Continued use of our services after changes constitutes acceptance
                of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">13. Contact</h2>
              <p className="text-gray-600 leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 bg-light-blue rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>Rapid Entrepreneurs</strong><br />
                  14 Independence Avenue, East Legon<br />
                  Accra, Ghana<br />
                  Email: <a href="mailto:legal@rapidentrepreneurs.com" className="text-vibrant-orange hover:underline">legal@rapidentrepreneurs.com</a><br />
                  Phone: <a href="tel:+233302745000" className="text-vibrant-orange hover:underline">+233 30 274 5000</a>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/" className="text-vibrant-orange hover:underline font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
