
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Sign Up & Create Account",
    description: "Create your secure account in minutes, with minimal information required to get started.",
  },
  {
    number: "02",
    title: "Add Your Assets & Beneficiaries",
    description: "Catalog your digital assets and add beneficiaries who should receive them when the time comes.",
  },
  {
    number: "03",
    title: "Set Your Wishes & Conditions",
    description: "Specify how you want your assets distributed and under what conditions.",
  },
  {
    number: "04",
    title: "Finalize & Secure Your Will",
    description: "Review, finalize, and secure your will with our bank-level encryption technology.",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-willtank-200 to-willtank-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-l from-willtank-200 to-blue-100 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How <span className="text-gradient">WillTank</span> Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Creating and securing your digital will is simple with our streamlined four-step process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 xl:gap-16">
          <div className="md:self-center mb-8 md:mb-0 order-2 md:order-1">
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-willtank-100 text-willtank-700 font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Button size="lg" className="bg-willtank-600 hover:bg-willtank-700">
                Create Your Digital Will
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border overflow-hidden">
                <div className="bg-willtank-600 p-6 text-white">
                  <h3 className="text-xl font-semibold">Digital Will Creation</h3>
                  <p className="text-willtank-100 mt-1">Step 2 of 4</p>
                </div>
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Digital Asset Type</label>
                    <div className="h-10 bg-gray-100 rounded-md"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Asset Description</label>
                    <div className="h-24 bg-gray-100 rounded-md"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Beneficiary</label>
                    <div className="h-10 bg-gray-100 rounded-md"></div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div className="w-24 h-10 bg-gray-200 rounded-md"></div>
                    <div className="w-24 h-10 bg-willtank-200 rounded-md"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-willtank-200 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
