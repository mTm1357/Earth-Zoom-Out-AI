import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy - Earth Zoom Out AI",
  description: "Privacy policy for Earth Zoom Out AI service. Learn how we protect and handle your personal data.",
  robots: "index, follow",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Privacy Policy
          </h1>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="prose prose-invert max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">1. Information We Collect</h2>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Personal Information</h3>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>• Email address (for account creation and communication)</li>
                  <li>• Payment information (processed securely by third-party providers)</li>
                  <li>• Usage data and analytics (anonymized)</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Content Data</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Images you upload for processing</li>
                  <li>• Generated videos (temporarily stored for download)</li>
                  <li>• Processing preferences and settings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">2. How We Use Your Information</h2>
                <ul className="text-gray-300 space-y-2">
                  <li>• To provide AI video generation services</li>
                  <li>• To process payments and manage transactions</li>
                  <li>• To improve our service quality and user experience</li>
                  <li>• To communicate service updates and support</li>
                  <li>• To comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">3. Data Storage and Security</h2>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Security Measures</h3>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>• SSL encryption for all data transmission</li>
                  <li>• Secure cloud storage with enterprise-grade protection</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Access controls and authentication protocols</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Data Retention</h3>
                <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4 mb-4">
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Uploaded Images:</strong> Deleted immediately after processing</li>
                    <li>• <strong>Generated Videos:</strong> Available for 30 days, then permanently deleted</li>
                    <li>• <strong>Account Data:</strong> Retained until account deletion</li>
                    <li>• <strong>Analytics Data:</strong> Anonymized and retained for service improvement</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">4. Third-Party Services</h2>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Payment Processing</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use secure third-party payment processors to handle transactions. We do not store 
                  your complete payment information on our servers. Payment data is handled according 
                  to PCI DSS standards.
                </p>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Analytics and Tracking</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Google Analytics (anonymized data collection)</li>
                  <li>• Microsoft Clarity (user experience analytics)</li>
                  <li>• Vercel Analytics (performance monitoring)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">5. Your Rights and Choices</h2>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Data Access and Control</h3>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>• Request access to your personal data</li>
                  <li>• Correct inaccurate or incomplete information</li>
                  <li>• Delete your account and associated data</li>
                  <li>• Export your data in a portable format</li>
                  <li>• Opt-out of non-essential communications</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Cookie Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  You can control cookie settings through your browser preferences. Note that disabling 
                  certain cookies may affect website functionality.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">6. International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your data may be processed and stored in countries other than your own. We ensure 
                  appropriate safeguards are in place for international data transfers, including 
                  standard contractual clauses and adequacy decisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">7. Children&apos;s Privacy</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Our service is not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If we become aware that we have 
                  collected such information, we will take steps to delete it promptly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">8. Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may update this privacy policy from time to time. We will notify you of any 
                  material changes by posting the new policy on this page and updating the 
                  &quot;Last Updated&quot; date. Your continued use of the service after changes 
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">9. Contact Information</h2>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300 mb-4">
                    If you have questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Email:</strong> privacy@earthzoomoutai.top</li>
                    <li>• <strong>Support:</strong> support@earthzoomoutai.top</li>
                    <li>• <strong>Website:</strong> https://earthzoomoutai.top</li>
                  </ul>
                </div>
              </section>

              <div className="text-center text-gray-400 text-sm mt-12 pt-8 border-t border-white/10">
                <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
                <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
