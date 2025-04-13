
import { Button } from "@/components/ui/button";
import { Shield, Lock, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-willtank-100 to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-willtank-100 to-transparent rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center mb-6 px-4 py-2 bg-willtank-100 rounded-full text-willtank-800 text-sm font-medium">
              <Shield className="h-4 w-4 mr-2" /> Your Digital Legacy, Protected
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Secure Your Digital <br className="hidden md:inline" />
              <span className="text-gradient">Legacy</span> with WillTank
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Create, store and manage your digital will in one secure place. Protect your loved ones and ensure your digital assets are passed on according to your wishes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-willtank-600 hover:bg-willtank-700 text-lg">
                Create Your Will Now
              </Button>
              <Button size="lg" variant="outline" className="border-willtank-300 text-willtank-700 hover:bg-willtank-50 text-lg">
                Learn How It Works
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:flex sm:gap-8">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-willtank-600 mr-2" />
                <p className="text-sm text-gray-600">Bank-level Security</p>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-willtank-600 mr-2" />
                <p className="text-sm text-gray-600">Legally Binding</p>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-willtank-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-sm text-gray-600">Trusted by 50K+ Users</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="w-full h-full max-w-md">
              <div className="relative z-20 bg-white border rounded-2xl shadow-xl overflow-hidden animate-float">
                <div className="p-6 border-b bg-willtank-50">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg text-willtank-800">My Digital Will</h3>
                    <div className="bg-willtank-200 text-willtank-800 px-2 py-1 rounded-md text-xs font-medium">Secured</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-4 bg-gray-100 rounded w-full"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-2 bg-gray-200 rounded w-2/5"></div>
                      <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                    </div>
                    <div className="pt-4 flex justify-end">
                      <div className="h-8 bg-willtank-200 rounded w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute z-10 w-64 h-64 bg-willtank-200 rounded-full blur-3xl opacity-70 -bottom-10 -right-10"></div>
            <div className="absolute z-10 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-70 top-10 -left-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
