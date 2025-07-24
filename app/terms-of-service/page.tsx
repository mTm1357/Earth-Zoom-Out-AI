import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Terms of Service - Earth Zoom Out AI",
  description: "Terms of service for Earth Zoom Out AI. Learn about our service terms, user responsibilities, and usage policies.",
  robots: "index, follow",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Terms of Service
          </h1>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="prose prose-invert max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">1. Acceptance of Terms</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  By accessing and using Earth Zoom Out AI (&quot;the Service&quot;), you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">2. Service Description</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Earth Zoom Out AI provides artificial intelligence-powered video generation services that 
                  transform static images into dynamic video effects. The service uses advanced AI algorithms 
                  to create cinematic &quot;earth zoom out&quot; effects from user-uploaded images.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">3. User Responsibilities</h2>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Content Ownership</h3>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>• You must own or have permission to use all uploaded images</li>
                  <li>• You are responsible for ensuring content does not infringe copyrights</li>
                  <li>• You retain full ownership of your original images and generated videos</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Prohibited Content</h3>
                <div className="bg-red-500/10 border border-red-400/20 rounded-lg p-4 mb-4">
                  <p className="text-gray-300 mb-2"><strong>You may not upload content that:</strong></p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Contains illegal, harmful, or offensive material</li>
                    <li>• Violates intellectual property rights</li>
                    <li>• Contains personal information of others without consent</li>
                    <li>• Is intended to harass, threaten, or harm others</li>
                    <li>• Contains malware or malicious code</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">4. Service Availability</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                  The service may be temporarily unavailable due to maintenance, updates, or technical issues. 
                  We will provide advance notice of scheduled maintenance when possible.
                </p>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Service Limitations</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Maximum file size: 50MB per image</li>
                  <li>• Supported formats: JPG, PNG, WebP</li>
                  <li>• Processing time: 8-10 minutes depending on settings</li>
                  <li>• Daily usage limits may apply to prevent abuse</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">5. Payment Terms</h2>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Pricing and Billing</h3>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>• All prices are clearly displayed before purchase</li>
                  <li>• Payments are processed securely through third-party providers</li>
                  <li>• All sales are final unless otherwise specified</li>
                  <li>• Prices may change with advance notice</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Refund Policy</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Refunds are available only in cases of technical failure, service unavailability 
                  exceeding 24 hours, or significant quality issues due to system errors. Refunds 
                  are not available for user errors or dissatisfaction with results.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">6. Intellectual Property</h2>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Your Content</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You retain all rights to your uploaded images and generated videos. By using our service, 
                  you grant us a limited license to process your images solely for the purpose of generating 
                  your requested videos.
                </p>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Our Technology</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our AI algorithms, software, and service infrastructure are protected by intellectual 
                  property laws. You may not reverse engineer, copy, or create derivative works based 
                  on our technology.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">7. Privacy and Data Protection</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Your privacy is important to us. Please review our Privacy Policy to understand how 
                  we collect, use, and protect your information. By using our service, you consent to 
                  the data practices described in our Privacy Policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">8. Limitation of Liability</h2>
                <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-4 mb-4">
                  <p className="text-gray-300 leading-relaxed">
                    <strong>Important:</strong> Our liability is limited to the amount paid for the specific service. 
                    We are not responsible for indirect damages, lost profits, or consequential damages. 
                    The service is provided &quot;as is&quot; without warranties of any kind.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">9. Account Termination</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We reserve the right to suspend or terminate accounts that violate these terms. 
                  You may also delete your account at any time. Upon termination, your access to 
                  the service will cease, and your data will be deleted according to our retention policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">10. Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may modify these terms at any time. Material changes will be communicated via 
                  email or website notification. Your continued use of the service after changes 
                  constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">11. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  These terms are governed by and construed in accordance with applicable laws. 
                  Any disputes will be resolved through binding arbitration or in courts of 
                  competent jurisdiction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">12. Contact Information</h2>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300 mb-4">
                    For questions about these terms or our services, please contact us:
                  </p>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <strong>Email:</strong> legal@earthzoomoutai.top</li>
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
