
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-willtank-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjIiPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMzRjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6TTE2IDE0YzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyek0xNiA0NmMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnpNMTAgMjBjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6TTEwIDQwYzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyek0xMCAyNmMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnpNNDAgMTRjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6TTQ2IDQwYzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyek00NiAyMGMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnpNNDYgMTRjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6TTQwIDQ2YzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyek00MCA0MGMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnpNNDAgMjBjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6TTMwIDIwYzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyek0zMCA0MGMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnpNMzAgMjZjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6TTMwIDM0YzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyek0zMCAxNGMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnpNMzAgNDZjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6TTIwIDIwYzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyek0yMCA0MGMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnpNMjAgMTRjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6TTIwIDQ2YzAgMSAxIDIgMiAyczItMSAyLTItMS0yLTItMi0yIDEtMiAyek0yMCAyNmMwIDEgMSAyIDIgMnMyLTEgMi0yLTEtMi0yLTItMiAxLTIgMnpNMjAgMzRjMCAxIDEgMiAyIDJzMi0xIDItMi0xLTItMi0yLTIgMS0yIDJ6Ij48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')]"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Digital Legacy Today</h2>
          <p className="text-lg text-willtank-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already secured their digital future with WillTank. 
            Create your digital will in minutes and gain peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-willtank-800 hover:bg-gray-100 text-lg">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-willtank-300 text-willtank-100 hover:bg-willtank-800 text-lg">
              Schedule a Demo
            </Button>
          </div>
          
          <p className="mt-8 text-willtank-200 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
