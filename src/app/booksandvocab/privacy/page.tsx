import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy | Books and Vocab",
  description: "Privacy policy for the Books and Vocab application.",
};

export default function PrivacyPage() {
  return (
    <section className="foliox_tm_section w-full h-auto clear-both float-left py-[120px] px-0 bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/img/apps/booksandvocab.png"
              width={64}
              height={64}
              alt="Books and Vocab app"
              className="object-cover shadow-2xl"
            />
          </div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Your privacy is important to Books and Vocab. This policy explains
            what information we collect and how we use it.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10 text-slate-200">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              1. Information Collection
            </h2>
            <p className="leading-8">
              We do not collect personal information unless you choose to
              provide it. Any information submitted through contact forms or
              email is used only to respond to your request.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              2. Use of Information
            </h2>
            <p className="leading-8">
              Information is used to improve the site, provide support, and
              maintain the app. We never sell or share your personal data with
              third parties for marketing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              3. Cookies and Tracking
            </h2>
            <p className="leading-8">
              This site may use cookies or analytics tools for performance and
              usage tracking. These tools help us understand how visitors use
              the app so we can improve the experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
            <p className="leading-8">
              We take reasonable measures to protect any data you provide.
              However, no internet transmission is fully secure, and we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              5. Changes to This Policy
            </h2>
            <p className="leading-8">
              We may update this privacy policy from time to time. Changes will
              be reflected on this page and apply when posted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
