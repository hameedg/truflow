import { Check, X } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$10",
      description: "Perfect for small projects",
      features: [
        { name: "1 User", included: true },
        { name: "5 Projects", included: true },
        { name: "5GB Storage", included: true },
        { name: "Basic Support", included: true },
        { name: "Advanced Analytics", included: false },
        { name: "Custom Domain", included: false },
      ],
      addons: ["Email Support"],
    },
    {
      name: "Pro",
      price: "$25",
      description: "Best for growing teams",
      features: [
        { name: "5 Users", included: true },
        { name: "20 Projects", included: true },
        { name: "20GB Storage", included: true },
        { name: "Priority Support", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Custom Domain", included: false },
      ],
      addons: ["Phone Support", "Team Collaboration Tools"],
      popular: true,
    },
    {
      name: "Business",
      price: "$50",
      description: "For large-scale operations",
      features: [
        { name: "Unlimited Users", included: true },
        { name: "Unlimited Projects", included: true },
        { name: "100GB Storage", included: true },
        { name: "24/7 Dedicated Support", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "Custom Domain", included: true },
      ],
      addons: ["API Access", "Custom Integrations", "On-premise Option"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-xl border border-gray-200 overflow-hidden ${
              plan.popular ? "bg-[#ede9fe] shadow-lg md:scale-105" : "bg-white"
            }`}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              {plan.popular && (
                <span className="inline-block bg-black text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide absolute top-4 right-4">
                  Most Popular
                </span>
              )}
              <p className="text-4xl font-bold mt-4">{plan.price}<span className="text-sm font-normal">/month</span></p>
              <p className="text-gray-500 mt-2">{plan.description}</p>
            </div>
            <div className={`p-6 flex-grow ${plan.popular ? 'bg-[#ede9fe]' : 'bg-white'}`}>
  <ul className="space-y-2">
    {plan.features.map((feature, featureIndex) => (
      <li key={featureIndex} className="flex items-center">
        {feature.included ? (
          <Check className="h-5 w-5 text-green-500 mr-2" />
        ) : (
          <X className="h-5 w-5 text-red-500 mr-2" />
        )}
        <span className={feature.included ? "" : "text-gray-500"}>{feature.name}</span>
      </li>
    ))}
  </ul>
  {plan.addons && (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Add-ons:</h4>
      <ul className="list-disc list-inside text-sm text-gray-500">
        {plan.addons.map((addon, addonIndex) => (
          <li key={addonIndex}>{addon}</li>
        ))}
      </ul>
    </div>
  )}
</div>

            <div className="p-6">
            <button
  className={`w-full font-semibold py-2 px-4 rounded-xl transition duration-300 ${
    plan.popular
      ? 'bg-black text-white hover:bg-primary-dark'
      : 'bg-white text-black border border-black hover:bg-gray-100'
  }`}
  aria-label={`Get started with ${plan.name} plan`}
>
  Get Started Now
</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}