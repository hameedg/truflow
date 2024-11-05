import { Tag, Zap, CreditCard, Clock } from 'lucide-react'

export default function HeroPricing() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-32 bg-background">
      <div className=" px-4 md:px-6 flex flex-col items-center text-center">
        <div className="inline-block border-2 border-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-purple-500 mb-8">
          Pricing Plans
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6">
          500% Cheaper than humans taking calls!
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Get Started for Free. No credit card needed.
        </p>
        <p className="flex items-center text-lg font-medium text-yellow-500 mb-8">
          <Clock className="w-5 h-5 mr-2" />
          Limited time offer!
        </p>
        <div className="flex space-x-4">
          <Zap className="w-6 h-6 text-yellow-500" />
          <Tag className="w-6 h-6 text-purple-500" />
          <CreditCard className="w-6 h-6 text-green-500" />
        </div>
      </div>
    </section>
  )
}