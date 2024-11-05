export default function FaqComponent() {
    const faqs = [
      {
        question: "What is TruFlow AI?",
        answer: "TruFlow AI is an advanced artificial intelligence platform designed to streamline workflows and enhance productivity across various industries."
      },
      {
        question: "How can I get started with TruFlow AI?",
        answer: "You can get started by signing up on our website and following the onboarding process. Our team is always ready to assist you with the setup."
      },
      {
        question: "Is TruFlow AI suitable for small businesses?",
        answer: "TruFlow AI is scalable and can be tailored to meet the needs of businesses of all sizes, from startups to large enterprises."
      },
      {
        question: "What kind of support does TruFlow AI offer?",
        answer: "We offer comprehensive support including documentation, video tutorials, email support, and dedicated account managers for enterprise clients."
      }
    ]
  
    return (
      <div className="bg-gray-50 flex justify-center items-start py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">FAQ</h1>
          <p className="text-center mb-8 text-gray-600">
            If you have a question that isn&apos;t addressed here, reach out at{" "}
            <a href="mailto:hello@truflow.ai" className="text-blue-600 hover:underline">
              hello@truflow.ai
            </a>
            .
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{faq.question}</h2>
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }