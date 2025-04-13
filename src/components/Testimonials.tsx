
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    content: "WillTank made the process of creating my digital will so simple. I was able to include all my online accounts and digital assets without any hassle.",
    author: "Sarah J.",
    title: "Tech Professional",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    content: "As someone with cryptocurrency investments, I needed a secure way to pass these on. WillTank's platform gave me peace of mind that my digital assets will be properly handled.",
    author: "Michael T.",
    title: "Crypto Investor",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    content: "The customer service at WillTank is exceptional. They guided me through every step of creating my digital will and answered all my questions promptly.",
    author: "Elena R.",
    title: "Business Owner",
    avatar: "https://i.pravatar.cc/100?img=3",
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by <span className="text-gradient">Thousands</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our users have to say about their experience with WillTank.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-100 flex flex-col"
            >
              <div className="flex-1">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-8">"{testimonial.content}"</p>
              </div>
              <Separator className="mb-4" />
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
