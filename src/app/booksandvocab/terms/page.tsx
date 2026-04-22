import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service | Books and Vocab",
  description: "Terms of service for the Books and Vocab application.",
};

export default function TermsPage() {
  return (
    <section className="foliox_tm_section w-full h-auto clear-both float-left py-[120px] px-0 bg-[#0f0f1a] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <div className="flex justify-center mb-8">
            <Image
              src="/assets/img/apps/booksandvocab.png"
              width={64}
              height={64}
              alt="Books and Vocab app"
              className="shadow-2xl"
            />
          </div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            These terms govern your use of Books and Vocab. By using the site,
            you accept these terms and agree to comply with them.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10 text-slate-200">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="leading-8">
              By accessing or using Books and Vocab, you agree to these terms.
              If you do not agree, please do not use the service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              2. Use of the Service
            </h2>
            <p className="leading-8">
              You may use the app for personal learning and vocabulary practice.
              Do not use the service for any illegal or unauthorized purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              3. Content and Accuracy
            </h2>
            <p className="leading-8">
              We strive to provide accurate information, but the app is provided
              &quot;as is&quot; without warranties of any kind. We are not
              liable for any errors, omissions, or results obtained from the
              service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">
              4. Intellectual Property
            </h2>
            <p className="leading-8">
              All content, text, and graphics on Books and Vocab are owned by
              the site owner or licensed to the site. You may not reproduce or
              distribute content without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">5. Changes to Terms</h2>
            <p className="leading-8">
              We may update these terms at any time. Continued use of the
              service after changes means you accept the new terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
