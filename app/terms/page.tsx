export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Please read these terms and conditions carefully before using our services
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <div className="prose max-w-none">
              <p>Last Updated: February 28, 2024</p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to Vantage Infra Projects ("Company", "we", "our", "us"). These Terms and Conditions ("Terms",
                "Terms and Conditions") govern your use of our website located at www.prestigeproperties.com (the
                "Service") operated by Vantage Infra Projects.
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part
                of the terms, then you may not access the Service.
              </p>

              <h2>2. Use of Our Service</h2>
              <p>
                The content on our website is for general information purposes only. It is subject to change without
                notice. Our website provides information about real estate properties and related services. The
                information presented on our website does not constitute an offer to sell or a solicitation of an offer
                to buy any property.
              </p>

              <h2>3. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of Vantage Infra Projects and its licensors. The Service is protected by copyright, trademark,
                and other laws of both the United States and foreign countries. Our trademarks and trade dress may not
                be used in connection with any product or service without the prior written consent of Vantage Infra Projects.
              </p>

              <h2>4. Links To Other Web Sites</h2>
              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by
                Vantage Infra Projects.
              </p>
              <p>
              Vantage Infra Projects has no control over, and assumes no responsibility for, the content, privacy
                policies, or practices of any third-party websites or services. You further acknowledge and agree that
                Vantage Infra Projects shall not be responsible or liable, directly or indirectly, for any damage or
                loss caused or alleged to be caused by or in connection with the use of or reliance on any such content,
                goods, or services available on or through any such websites or services.
              </p>

              <h2>5. Limitation Of Liability</h2>
              <p>
                In no event shall Prestige Properties LLC, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct
                or content of any third party on the Service; (iii) any content obtained from the Service; and (iv)
                unauthorized access, use, or alteration of your transmissions or content, whether based on warranty,
                contract, tort (including negligence), or any other legal theory, whether or not we have been informed
                of the possibility of such damage.
              </p>

              <h2>6. Disclaimer</h2>
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
                basis. The Service is provided without warranties of any kind, whether express or implied, including,
                but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement, or course of performance.
              </p>

              <h2>7. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without
                regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect.
              </p>

              <h2>8. Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>

              <h2>9. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <ul>
                <li>By email:  vantageinfraprojects2@gmail.com</li>
                <li>By phone: +919963645346</li>
                {/* <li>By mail: 123 Luxury Lane, Suite 500, Beverly Hills, CA 90210</li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

