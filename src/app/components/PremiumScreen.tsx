import { motion } from 'motion/react';
import { ArrowLeft, Check, Crown, Sparkles, MessageSquare, TrendingUp, Gift } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

interface PremiumScreenProps {
  onNavigate: (screen: string) => void;
}

const features = [
  { icon: MessageSquare, text: 'Unlimited AI Chat & Insights', highlight: true },
  { icon: TrendingUp, text: 'Advanced Cycle Analytics', highlight: true },
  { icon: Sparkles, text: 'Personalized Wellness Plans', highlight: false },
  { icon: Gift, text: 'Free Menstrual Cup (₹500 value)', highlight: true },
  { text: 'Priority Therapist Booking', highlight: false },
  { text: 'Premium Music Library', highlight: false },
  { text: 'Export Health Reports', highlight: false },
  { text: 'Ad-free Experience', highlight: false }
];

const plans = [
  {
    name: 'Monthly',
    price: '₹199',
    period: '/month',
    description: 'Perfect for trying premium',
    popular: false
  },
  {
    name: 'Yearly',
    price: '₹1,599',
    period: '/year',
    description: 'Save ₹789 annually',
    popular: true,
    savings: '33% OFF'
  }
];

export function PremiumScreen({ onNavigate }: PremiumScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] via-[#FCE4EC] to-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E91E63] to-[#F48FB1] rounded-b-[2.5rem] shadow-lg shadow-pink-200 pb-8 pt-6 px-6">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl text-white flex-1 flex items-center gap-2">
            Cycura Premium
            <Crown className="h-6 w-6" />
          </h1>
        </div>
        <p className="text-white/90 text-sm">Unlock your full wellness potential</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6"
        >
          <Card className="bg-gradient-to-br from-[#FFD700] via-[#FFA500] to-[#FF8C00] rounded-3xl shadow-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <Crown className="h-10 w-10" />
              <div>
                <h2 className="text-xl">Go Premium</h2>
                <p className="text-sm opacity-90">Join 10,000+ women thriving</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Premium Features</h3>
          <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-6">
            <div className="space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    {Icon ? (
                      <div className={`p-2 rounded-xl ${
                        feature.highlight 
                          ? 'bg-gradient-to-br from-[#E91E63] to-[#F48FB1]' 
                          : 'bg-[#FCE4EC]'
                      }`}>
                        <Icon className={`h-4 w-4 ${
                          feature.highlight ? 'text-white' : 'text-[#E91E63]'
                        }`} />
                      </div>
                    ) : (
                      <div className="p-2 bg-[#FCE4EC] rounded-xl">
                        <Check className="h-4 w-4 text-[#E91E63]" />
                      </div>
                    )}
                    <p className="text-sm text-[#4A2C2A] flex-1">{feature.text}</p>
                    {feature.highlight && (
                      <Badge className="bg-[#FFD700] text-[#4A2C2A] text-xs">NEW</Badge>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </Card>
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Choose Your Plan</h3>
          <div className="space-y-4">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className={`rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all ${
                  plan.popular 
                    ? 'ring-2 ring-[#E91E63] shadow-pink-200' 
                    : 'border border-pink-100'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-[#E91E63] to-[#F48FB1] text-white text-center py-2 text-sm">
                      ⭐ Most Popular - Best Value
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg text-[#4A2C2A] mb-1">{plan.name}</h3>
                        <p className="text-sm text-[#8E7C93]">{plan.description}</p>
                      </div>
                      {plan.savings && (
                        <Badge className="bg-green-100 text-green-800">
                          {plan.savings}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl text-[#E91E63]">{plan.price}</span>
                      <span className="text-sm text-[#8E7C93]">{plan.period}</span>
                    </div>
                    <Button className={`w-full rounded-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#E91E63] to-[#F48FB1] hover:from-[#C2185B] hover:to-[#E91E63]'
                        : 'bg-white text-[#E91E63] border-2 border-[#E91E63] hover:bg-[#FFF5F7]'
                    }`}>
                      {plan.popular ? 'Start Premium' : 'Select Plan'}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">Add-Ons & More</h3>
          <div className="space-y-3">
            <AddOnCard
              title="Expert Session (1-on-1)"
              price="₹799"
              description="45-min consultation with certified therapist"
              icon="👩‍⚕️"
            />
            <AddOnCard
              title="Detailed Health Report"
              price="₹99"
              description="3-month cycle analysis PDF"
              icon="📊"
            />
            <AddOnCard
              title="Fertility Insights Program"
              price="₹199"
              description="Advanced tracking & predictions"
              icon="🌸"
            />
          </div>
        </motion.div>

        {/* B2B Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="bg-gradient-to-br from-[#CE93D8] to-[#BA68C8] rounded-3xl shadow-lg p-6 text-white">
            <h3 className="text-lg mb-2">For Organizations</h3>
            <p className="text-sm opacity-90 mb-4">
              Bulk licensing available for schools, colleges & corporates
            </p>
            <p className="text-sm mb-4">₹99-₹149/user/year</p>
            <Button className="w-full bg-white text-[#BA68C8] hover:bg-white/90">
              Contact for Bulk License
            </Button>
          </Card>
        </motion.div>

        <p className="text-xs text-center text-[#8E7C93] mt-6 px-4">
          🔒 Secure payment • Cancel anytime • 7-day money-back guarantee
        </p>
      </div>
    </div>
  );
}

interface AddOnCardProps {
  title: string;
  price: string;
  description: string;
  icon: string;
}

function AddOnCard({ title, price, description, icon }: AddOnCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-md shadow-pink-100 p-4 cursor-pointer hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <h4 className="text-[#4A2C2A] mb-1">{title}</h4>
          <p className="text-xs text-[#8E7C93]">{description}</p>
        </div>
        <div className="text-right">
          <p className="text-lg text-[#E91E63]">{price}</p>
        </div>
      </div>
    </Card>
  );
}
