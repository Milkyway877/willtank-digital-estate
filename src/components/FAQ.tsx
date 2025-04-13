
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is a digital will?",
    answer: "A digital will is a legal document that outlines how you want your digital assets—such as social media accounts, digital files, cryptocurrency, and online accounts—to be handled after your death. WillTank provides a secure platform to create and store your digital will."
  },
  {
    question: "Is WillTank's digital will legally binding?",
    answer: "Yes, WillTank creates legally binding documents that comply with digital estate laws. However, we recommend consulting with a legal professional to ensure it meets your specific state or country requirements."
  },
  {
    question: "How secure is my information on WillTank?",
    answer: "WillTank uses bank-level encryption and security protocols to ensure your data is protected. We employ multiple layers of security including end-to-end encryption, secure data centers, and regular security audits."
  },
  {
    question: "Can I update my digital will after creation?",
    answer: "Absolutely! We understand that circumstances change. WillTank allows you to update your digital will at any time, and our system automatically keeps track of all versions for future reference."
  },
  {
    question: "How do my beneficiaries access my digital will?",
    answer: "You can specify how and when your beneficiaries access your digital will. WillTank offers several verification methods to ensure only authorized individuals can access your will when the time comes."
  },
  {
    question: "What happens to my digital will if WillTank ceases to exist?",
    answer: "WillTank has implemented contingency plans to ensure the preservation and accessibility of your digital will. This includes partnerships with trusted third-party services and options to export your will in secure formats."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about digital wills and our service.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a href="#contact" className="text-willtank-600 font-medium hover:text-willtank-700 hover:underline">Contact our support team</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
