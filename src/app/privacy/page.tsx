import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Rapid Entrepreneurs. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-blue py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-xl text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300 text-lg">Last updated: February 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="heading-md text-deep-blue mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Rapid Entrepreneurs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting the privacy and security
                of your personal information. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website rapidentrepreneurs.com and use
                our services, including Akwaaba AI.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">2. Information We Collect</h2>
              <h3 className="font-display font-bold text-xl text-deep-blue mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name and contact details (email, phone number, address)</li>
                <li>Business name and industry</li>
                <li>Payment information (processed securely through third-party payment providers)</li>
                <li>Communication preferences</li>
                <li>Information you provide through our contact forms and chat widget</li>
              </ul>

              <h3 className="font-display font-bold text-xl text-deep-blue mt-6 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Device information (browser type, operating system, device type)</li>
                <li>IP address and approximate location</li>
                <li>Website usage data (pages visited, time spent, click patterns)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We use collected information for:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Providing and improving our digital services</li>
                <li>Responding to inquiries and providing customer support</li>
                <li>Processing payments and managing client accounts</li>
                <li>Sending relevant updates about our services and products</li>
                <li>Analyzing website usage to improve user experience</li>
                <li>Complying with legal obligations under Ghanaian law</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">4. Data Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell your personal data. We may share information with:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service providers:</strong> Trusted partners who help us deliver our services (payment processors, hosting providers, analytics tools)</li>
                <li><strong>Network partners:</strong> Pacific Wave Digital and Global Digital Prime for collaborative projects (with your consent)</li>
                <li><strong>Legal authorities:</strong> When required by law or to protect our rights</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">5. Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement industry-standard security measures to protect your data, including encryption
                in transit and at rest, secure access controls, and regular security audits. However, no
                method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">6. Mobile Money & Payment Data</h2>
              <p className="text-gray-600 leading-relaxed">
                Payment information processed through our platforms (including mobile money transactions via
                MTN MoMo, Vodafone Cash, and AirtelTigo Money) is handled by certified payment processors.
                We do not store your mobile money PIN or complete payment credentials on our servers.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">7. Akwaaba AI Data</h2>
              <p className="text-gray-600 leading-relaxed">
                When you use Akwaaba AI, conversations may be processed by our AI systems to provide
                intelligent responses. We may use anonymized conversation data to improve our AI models.
                You can request deletion of your conversation history at any time.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">8. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Under applicable data protection laws, you have the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">9. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize
                content. You can manage cookie preferences through your browser settings. Disabling cookies
                may affect the functionality of certain features on our website.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">10. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly
                collect personal information from children.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">11. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material
                changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
              </p>
            </div>

            <div>
              <h2 className="heading-md text-deep-blue mb-4">12. Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 bg-light-blue rounded-xl p-6">
                <p className="text-gray-700">
                  <strong>Rapid Entrepreneurs</strong><br />
                  14 Independence Avenue, East Legon<br />
                  Accra, Ghana<br />
                  Email: <a href="mailto:privacy@rapidentrepreneurs.com" className="text-vibrant-orange hover:underline">privacy@rapidentrepreneurs.com</a><br />
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
