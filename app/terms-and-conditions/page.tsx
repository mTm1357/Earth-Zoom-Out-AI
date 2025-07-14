import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Terms and Conditions - Earth Zoom Out AI",
  description: "Terms and conditions for Earth Zoom Out AI service. One-time payment model for AI video generation.",
  robots: "index, follow",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Terms and Conditions
          </h1>
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="prose prose-invert max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">1. Service Overview</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Earth Zoom Out AI provides artificial intelligence-powered video generation services that transform 
                  static images into dynamic "earth zoom out" effect videos. Our service operates on a one-time payment 
                  model for each video generation request.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">2. Payment Model</h2>
                <div className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">One-Time Payment Structure</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Each video generation requires a separate payment</li>
                    <li>• No subscription fees or recurring charges</li>
                    <li>• Payment is processed before video generation begins</li>
                    <li>• Pricing varies based on video quality and processing requirements</li>
                  </ul>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Users pay only for the videos they generate. There are no hidden fees, monthly subscriptions, 
                  or automatic renewals. Each transaction is independent and complete upon successful video delivery.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">3. Service Usage</h2>
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Acceptable Use</h3>
                <ul className="text-gray-300 space-y-2 mb-4">
                  <li>• Upload only images you own or have permission to use</li>
                  <li>• Do not upload copyrighted material without proper authorization</li>
                  <li>• Prohibited content includes illegal, harmful, or offensive material</li>
                  <li>• Commercial use is permitted for legitimately owned content</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Technical Limitations</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Maximum file size: 50MB per image</li>
                  <li>• Supported formats: JPG, PNG, WebP</li>
                  <li>• Processing time: 8-10 minutes depending on settings</li>
                  <li>• Video output: MP4 format, up to 4K resolution</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">4. Payment and Refunds</h2>
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Payment Processing</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All payments are processed securely through our payment partners. We accept major credit cards 
                  and digital payment methods. Payment confirmation is required before video generation begins.
                </p>
                
                <h3 className="text-lg font-semibold mb-3 text-purple-300">Refund Policy</h3>
                <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-4 mb-4">
                  <p className="text-gray-300">
                    <strong>Refunds are available in the following cases:</strong>
                  </p>
                  <ul className="text-gray-300 mt-2 space-y-1">
                    <li>• Technical failure preventing video generation</li>
                    <li>• Service unavailability for more than 24 hours</li>
                    <li>• Significant quality issues due to system errors</li>
                  </ul>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Refunds are not available for user errors, unsatisfactory results due to image quality, 
                  or change of mind after successful video generation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">5. Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You retain full ownership of your uploaded images and generated videos. Earth Zoom Out AI 
                  does not claim any rights to your content. However, you grant us a limited license to 
                  process your images for the sole purpose of generating your requested videos.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our AI technology, algorithms, and service infrastructure remain the intellectual property 
                  of Earth Zoom Out AI and are protected by applicable copyright and patent laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">6. Privacy and Data</h2>
                <ul className="text-gray-300 space-y-2">
                  <li>• Uploaded images are processed and then permanently deleted</li>
                  <li>• Generated videos are available for download for 30 days</li>
                  <li>• We do not store or use your content for training or other purposes</li>
                  <li>• Payment information is handled by certified payment processors</li>
                  <li>• We collect minimal analytics data to improve service quality</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">7. Service Availability</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  While we strive for 99.9% uptime, we cannot guarantee uninterrupted service availability. 
                  Scheduled maintenance will be announced in advance when possible. In case of extended 
                  outages affecting paid services, appropriate refunds or credits will be provided.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">8. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Earth Zoom Out AI provides services "as is" without warranties. Our liability is limited 
                  to the amount paid for the specific service. We are not responsible for indirect damages, 
                  lost profits, or consequential damages arising from service use.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">9. Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We reserve the right to modify these terms at any time. Significant changes will be 
                  communicated via email or website notification. Continued use of the service after 
                  changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-blue-300">10. Contact Information</h2>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300 mb-2">
                    For questions about these terms or our services:
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Email: support@earthzoomoutai.top</li>
                    <li>• Website: https://earthzoomoutai.top</li>
                  </ul>
                </div>
              </section>

              <div className="text-center text-gray-400 text-sm mt-12 pt-8 border-t border-white/10">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>Effective date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
