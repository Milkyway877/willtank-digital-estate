
import { Shield, Key, FileLock, Users, Clock, Gift } from 'lucide-react';

const features = [
  {
    icon: <FileLock className="h-8 w-8 text-willtank-600" />,
    title: "Digital Will Creation",
    description: "Create a comprehensive digital will in minutes with our intuitive step-by-step guide."
  },
  {
    icon: <Shield className="h-8 w-8 text-willtank-600" />,
    title: "Secure Storage",
    description: "Your digital will is protected with bank-level encryption ensuring your information stays private."
  },
  {
    icon: <Users className="h-8 w-8 text-willtank-600" />,
    title: "Beneficiary Management",
    description: "Easily add, remove, or update beneficiaries and set specific asset distributions."
  },
  {
    icon: <Key className="h-8 w-8 text-willtank-600" />,
    title: "Digital Asset Protection",
    description: "Securely include digital assets like cryptocurrency, online accounts, and digital properties."
  },
  {
    icon: <Clock className="h-8 w-8 text-willtank-600" />,
    title: "Regular Updates",
    description: "Update your will anytime as your circumstances change with automatic versioning."
  },
  {
    icon: <Gift className="h-8 w-8 text-willtank-600" />,
    title: "Legacy Messages",
    description: "Leave personal messages and videos for your loved ones to be delivered in the future."
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need for Your <span className="text-gradient">Digital Estate</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            WillTank provides all the tools needed to create, store, and manage your digital will in one secure platform.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 border border-gray-100"
            >
              <div className="inline-flex items-center justify-center p-3 bg-willtank-100 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
