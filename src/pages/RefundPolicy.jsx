import React from 'react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Refund and Cancellation Policy
          </h1>
          <div className="h-1 w-32 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">
            Comprehensive Policy for Dairy Products and Investment Services
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Introduction */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                This comprehensive Refund and Cancellation Policy ("Policy") outlines the terms, conditions, and procedures governing refunds, cancellations, returns, and related matters for all transactions conducted through AmruthDhan, the flagship milk division of Anand Foods Limited. This Policy applies to two distinct categories of our offerings: (1) Dairy Products and Consumer Services encompassing the purchase of pure buffalo milk, related dairy items, subscriptions, and associated delivery services; and (2) Investment Services covering participation in our investment programs, including the flagship model wherein investors contribute ₹5,00,000 and receive monthly returns with principal refund at maturity. Each category operates under different refund and cancellation principles reflecting the nature of the products/services, regulatory considerations, and practical constraints. By engaging with AmruthDhan's platform, making purchases, entering investment agreements, or using our services, you acknowledge that you have read, understood, and agreed to be bound by this Policy in its entirety, along with our Terms and Conditions, Privacy Policy, and any specific agreements governing individual transactions.
              </p>

              <p className="text-gray-700 leading-relaxed">
                It is imperative to recognize that dairy products and investment opportunities represent fundamentally different categories with distinct characteristics, risks, and operational considerations. Dairy products are perishable consumer goods subject to biological variations, storage requirements, and immediate consumption timelines, necessitating specific refund approaches focused on quality assurance and customer satisfaction. Investment opportunities, conversely, represent long-term financial commitments to a business enterprise, subject to contractual terms, regulatory frameworks, and inherent business risks, requiring different cancellation and refund mechanisms that balance investor protection with business sustainability. This Policy clearly delineates the applicable rules for each category, providing transparency and predictability while acknowledging the practical realities of operating a dual-focused enterprise that combines dairy production with investment facilitation. We encourage all users to carefully review the relevant sections of this Policy before making purchase or investment decisions to ensure clear understanding of refund eligibility, procedures, timelines, and limitations.
              </p>
            </div>
          </div>

          {/* Dairy Products Section */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dairy Products Refund Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                AmruthDhan is committed to delivering 100% pure, high-quality buffalo milk and related dairy products that meet stringent quality standards and customer expectations. Our refund policy for dairy products is designed to ensure customer satisfaction while acknowledging the practical realities of perishable goods, supply chain logistics, and product characteristics. Refunds or replacements for dairy products are available under specific circumstances outlined in this section, primarily focused on quality issues, delivery problems, or significant deviations from product specifications. Due to the perishable nature of dairy products and hygiene considerations, we generally do not accept returns or provide refunds for change of mind, taste preferences, minor variations in product characteristics, or situations where proper storage and handling after delivery cannot be verified. All refund requests for dairy products must be initiated within 24 hours of delivery or the issue becoming apparent, supported by appropriate evidence such as photographs, detailed descriptions, or in some cases, retention of the product for quality inspection by our team.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Eligible grounds for dairy product refunds or replacements include: (1) products delivered in spoiled, rancid, or otherwise unsafe condition for consumption when proper storage can be verified; (2) significant deviation from advertised specifications such as noticeable adulteration, contamination, or foreign materials; (3) damaged packaging that compromises product safety or quality; (4) delivery of incorrect products or quantities compared to the order; (5) delivery failures where products are not received within the promised timeframe due to Company error (excluding circumstances beyond our reasonable control such as extreme weather, traffic disruptions, or recipient unavailability). For subscription services, customers may cancel or modify their subscriptions according to the terms specified in their subscription agreement, typically requiring advance notice (usually 3-7 days) before the next billing cycle to avoid charges for that cycle. Refunds for subscription payments will be prorated based on unused portions of the service period, minus any applicable administrative fees or discounts that need to be reconciled.
              </p>

              <p className="text-gray-700 leading-relaxed">
                The refund process for dairy products typically involves: (1) submitting a refund request through our customer service portal, mobile application, or designated communication channels within the specified timeframe; (2) providing order details, photographs if applicable, and a detailed description of the issue; (3) evaluation by our quality assurance team, which may include requests for additional information, product inspection, or consultation with delivery personnel; (4) resolution through either replacement delivery in the next available slot, credit to the customer's account for future purchases, or in some cases, refund to the original payment method. Refunds to payment methods may take 7-14 business days to process depending on financial institution procedures. For quality issues that require product testing or laboratory analysis, resolution may take additional time, during which we will maintain transparent communication with the customer. We reserve the right to refuse refunds if we determine, based on reasonable evidence, that the product issue resulted from customer mishandling, improper storage, consumption after the recommended period, or failure to follow storage instructions provided with the product.
              </p>
            </div>
          </div>

          {/* Investment Refund Policy */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Investment Refund and Cancellation Policy</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                INVESTMENTS WITH AMRUTHDHAN ARE LONG-TERM COMMITMENTS AND ARE NOT DESIGNED AS LIQUID OR SHORT-TERM FINANCIAL INSTRUMENTS. The flagship investment model, wherein an investor contributes capital to participate in our dairy business ecosystem, represents a permanent infusion of funds into the Company's operations and growth. These investments are governed by specific investment agreements that outline the rights and obligations of both parties. Prospective investors must carefully consider their financial situation, liquidity needs, and investment horizon before committing funds, as the Company operates on the principle that these investments are final and binding.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong className="font-semibold">NO REFUND, NO CANCELLATION, AND NO EARLY WITHDRAWAL.</strong> Once an investor has completed an investment with AmruthDhan and the investment amount has been received and confirmed by the Company, the transaction is considered final and irrevocable. There is strictly no refund, no cancellation, and no early withdrawal permitted under any circumstances after this point. By proceeding with the investment, the investor acknowledges and agrees that the invested amount will remain locked for the full contractual duration and cannot be withdrawn or cancelled prematurely. This policy is fundamental to the structure of our investment program, allowing for predictable long-term planning and stability within our agricultural and dairy operations.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The only exceptions to this strict no-refund rule are those required by applicable law or explicitly provided for in a separate written agreement signed by an authorized representative of the Company. For instance, a statutory cooling-off period, if mandated by specific regulations, may apply for a very limited time (typically a few days) from the date of investment. Any such right would be clearly communicated at the time of investment and is subject to strict deadlines and conditions. Outside of these narrow, legally mandated exceptions, all investments are non-refundable and non-cancellable.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                <strong className="font-semibold">IMPORTANT CONSIDERATIONS REGARDING THE LONG-TERM NATURE OF YOUR INVESTMENT:</strong>
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>No Liquidity:</strong> This investment should be viewed as an illiquid, long-term commitment. There is no established market for trading or reselling this investment, and the Company does not provide a buy-back option. Investors should not allocate funds they may need for short-term obligations, emergencies, or unexpected expenses.</li>
                <li><strong>Commitment to Business Operations:</strong> The funds invested are allocated directly into the Company's core business activities, including cattle procurement, feed development, infrastructure, and working capital. Early withdrawal of capital would disrupt these operations and is financially and operationally impractical for the Company to facilitate.</li>
                <li><strong>Reliance on Contractual Term:</strong> The projected returns and principal repayment at maturity are based on the assumption that the capital will be deployed for the entire contractual period. The Company's financial modeling and business plans depend on this stability. Any deviation from this long-term commitment undermines the foundation of the investment program for all stakeholders.</li>
                <li><strong>Due Diligence is Essential:</strong> AmruthDhan strongly advises all potential investors to conduct their own due diligence and consult with independent financial, legal, and tax advisors before making an investment decision. You must be comfortable with the long-term, illiquid nature of this commitment and fully understand the terms of the investment agreement.</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                Investors are reminded that the projected benefits, including the principal refund after the agreed-upon term, are contractual commitments that are contingent upon the Company's continued financial health and its ability to meet its future obligations. These are not guarantees insulated from business performance, market risks, or external economic factors. By investing, you acknowledge that your capital is at risk and that your primary remedy in any dispute is through the mechanisms outlined in the investment agreement, not through cancellation or refund of the principal amount.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Any request for cancellation, refund, or withdrawal will be reviewed solely for compliance with the terms stated herein and in the investment agreement. However, as clearly stated, such requests will be denied except where mandated by a specific, applicable law. This policy is designed to protect the integrity of the investment program, ensure fairness to all investors, and maintain the financial stability of the Company's long-term business initiatives.
              </p>
            </div>
          </div>

          {/* General Provisions */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Provisions and Limitations</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                This Refund and Cancellation Policy operates within the broader framework of our Terms and Conditions, Privacy Policy, and specific agreements governing individual transactions. In case of any conflict between this Policy and specific contractual agreements, the contractual agreements shall prevail to the extent of such conflict. We reserve the right to modify, amend, or update this Policy at any time without prior notice, with changes becoming effective upon posting on our platform. Continued use of our services after such changes constitutes acceptance of the modified Policy. We are not obligated to provide refunds, replacements, or cancellations beyond what is explicitly stated in this Policy or required by applicable law, and any discretionary refunds or accommodations provided in specific cases do not establish precedent or create entitlements for other situations. All refund and cancellation decisions are made at the sole discretion of AmruthDhan, exercised reasonably and in good faith considering the specific circumstances, contractual terms, regulatory requirements, and business considerations.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Refund processing timelines vary based on the nature of the transaction, payment method, and specific circumstances. For dairy product refunds to original payment methods, processing typically takes 7-14 business days after approval, though bank processing times may extend this period. For investment-related refunds, processing may take 30-60 days depending on complexity, verification requirements, and settlement calculations. All refund amounts are calculated in Indian Rupees (₹), and foreign currency transactions will be converted at prevailing exchange rates at the time of refund, potentially resulting in differences from the original transaction amount due to exchange rate fluctuations. We are not responsible for any bank fees, transaction charges, or currency conversion losses incurred during the refund process. In cases where refunds are provided as account credits or vouchers for future purchases, these are typically valid for 6-12 months from issuance and cannot be converted to cash, transferred to third parties, or combined with other offers unless explicitly permitted.
              </p>

              <p className="text-gray-700 leading-relaxed">
                This Policy does not affect your statutory rights as a consumer under applicable laws, including but not limited to the Consumer Protection Act, 2019, which may provide additional protections or remedies in certain circumstances. If you believe a refund decision violates your statutory rights, you may pursue available legal remedies through appropriate channels. However, we encourage attempting resolution through our internal grievance redressal mechanism first, as we are committed to fair and transparent resolution of refund and cancellation matters. Our customer service and investment relations teams are trained to handle refund requests professionally, explain applicable policies clearly, and seek reasonable solutions within the framework of this Policy and our broader commitments to customer satisfaction and investor relations. We maintain records of all refund and cancellation requests, decisions, and transactions for quality assurance, compliance, and continuous improvement of our policies and processes.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact and Grievance Redressal</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                For refund requests, cancellation inquiries, or policy clarifications, please contact the appropriate department based on your transaction type:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Dairy Products Refunds</h3>
                  <p className="text-gray-700 mb-1">Customer Service Department</p>
                  <p className="text-gray-700 mb-1">Email: customerservice@amruthdhan.com</p>
                  <p className="text-gray-700 mb-1">Phone: +91-40-1111-2222</p>
                  <p className="text-gray-700 text-sm">Available: 8 AM - 8 PM (All days)</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Investment Refunds</h3>
                  <p className="text-gray-700 mb-1">Investment Relations Department</p>
                  <p className="text-gray-700 mb-1">Email: investments@amruthdhan.com</p>
                  <p className="text-gray-700 mb-1">Phone: +91-40-3333-4444</p>
                  <p className="text-gray-700 text-sm">Available: 10 AM - 6 PM (Weekdays)</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                For formal complaints or escalation of refund matters, please address written communications to our Grievance Redressal Officer at grievance@amruthdhan.com or by post to: Grievance Redressal Officer, Anand Foods Limited, Dairy Complex, Sustainable Agriculture Zone, Hyderabad, Telangana 500032, India. We acknowledge receipt of grievances within 48 hours and aim to resolve them within 30 days, with interim updates provided as needed. For unresolved grievances, you may approach relevant consumer forums, investment regulatory bodies, or other dispute resolution mechanisms as per applicable laws. We encourage maintaining clear documentation of all communications, transactions, and issues related to refund requests to facilitate efficient resolution. Our team is committed to handling all refund and cancellation matters with professionalism, fairness, and respect for our customers and investors, balancing individual circumstances with the sustainable operation of our dairy business and investment ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-10 text-center">
          <Link to="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;