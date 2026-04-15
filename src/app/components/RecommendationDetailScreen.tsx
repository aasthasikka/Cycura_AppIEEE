import { motion } from 'motion/react';
import { ArrowLeft, Clock, Users, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface RecommendationDetailScreenProps {
  onNavigate: (screen: string) => void;
  recommendation: {
    title: string;
    type: 'yoga' | 'facemask' | 'meditation';
  };
}

const recommendationDetails = {
  yoga: {
    title: 'Gentle Yoga Flow',
    duration: '15-20 minutes',
    difficulty: 'Beginner to Intermediate',
    description: 'This gentle yoga sequence is specifically designed for your follicular phase when energy levels are rising. It helps improve flexibility, boost mood, and prepare your body for higher intensity workouts.',
    benefits: [
      'Reduces menstrual discomfort',
      'Improves flexibility and strength',
      'Boosts mood and energy',
      'Enhances blood circulation'
    ],
    poses: [
      {
        name: 'Cat-Cow Stretch',
        duration: '2 minutes',
        description: 'Warm up your spine with gentle flowing movements between arching and rounding your back.'
      },
      {
        name: 'Downward Facing Dog',
        duration: '1 minute',
        description: 'Stretch your hamstrings, calves, and shoulders while building arm strength.'
      },
      {
        name: 'Warrior II',
        duration: '1 minute each side',
        description: 'Build leg strength and stamina while improving balance and focus.'
      },
      {
        name: 'Triangle Pose',
        duration: '1 minute each side',
        description: 'Stretch your sides, hips, and hamstrings while improving stability.'
      },
      {
        name: 'Cobra Pose',
        duration: '30 seconds',
        description: 'Strengthen your back muscles and open your chest and shoulders.'
      },
      {
        name: "Child's Pose",
        duration: '2 minutes',
        description: 'Rest and relax in this gentle forward fold that calms the nervous system.'
      }
    ],
    tips: [
      'Practice on an empty stomach or 2-3 hours after eating',
      'Use a yoga mat for comfort and grip',
      'Listen to your body and modify poses as needed',
      'Focus on your breath throughout the practice',
      'Stay hydrated before and after'
    ]
  },
  facemask: {
    title: 'Anti-Acne Face Mask',
    duration: '15-20 minutes',
    difficulty: 'Easy',
    description: 'A natural DIY face mask perfect for your follicular phase to combat hormonal acne and brighten your skin. Turmeric and honey work together as powerful anti-inflammatory and antibacterial agents.',
    benefits: [
      'Reduces inflammation and redness',
      'Fights acne-causing bacteria',
      'Brightens and evens skin tone',
      'Provides natural hydration'
    ],
    ingredients: [
      {
        name: '1 teaspoon organic turmeric powder',
        purpose: 'Anti-inflammatory, reduces acne and scarring'
      },
      {
        name: '2 tablespoons raw honey',
        purpose: 'Antibacterial, moisturizing, healing'
      },
      {
        name: '1 teaspoon plain yogurt',
        purpose: 'Gentle exfoliation, adds probiotics for skin health'
      },
      {
        name: '2-3 drops tea tree oil (optional)',
        purpose: 'Extra antibacterial power for stubborn acne'
      }
    ],
    instructions: [
      {
        step: 1,
        title: 'Cleanse Your Face',
        description: 'Start with a clean face. Wash with a gentle cleanser and pat dry.'
      },
      {
        step: 2,
        title: 'Mix Ingredients',
        description: 'In a small bowl, combine turmeric, honey, and yogurt. Mix well until you get a smooth paste. Add tea tree oil if using.'
      },
      {
        step: 3,
        title: 'Patch Test',
        description: 'Apply a small amount on your inner wrist and wait 10 minutes to check for any reaction.'
      },
      {
        step: 4,
        title: 'Apply the Mask',
        description: 'Use clean fingers or a brush to apply an even layer to your face, avoiding the eye area.'
      },
      {
        step: 5,
        title: 'Wait and Relax',
        description: 'Leave the mask on for 15-20 minutes. You may feel a slight tingling sensation - this is normal!'
      },
      {
        step: 6,
        title: 'Rinse Off',
        description: 'Gently wash off with lukewarm water using circular motions. Pat dry with a clean towel.'
      },
      {
        step: 7,
        title: 'Moisturize',
        description: 'Follow up with your regular moisturizer to lock in hydration.'
      }
    ],
    tips: [
      'Use this mask 2-3 times per week for best results',
      'Turmeric may temporarily stain skin yellow - this fades within a few hours',
      'Avoid sun exposure immediately after use',
      'Store leftover mixture in fridge for up to 3 days',
      'Always use raw, organic honey for maximum benefits'
    ],
    warnings: [
      'If you have sensitive skin, reduce turmeric to 1/2 teaspoon',
      'Skip tea tree oil if you have very dry or sensitive skin',
      'Discontinue use if you experience severe irritation'
    ]
  },
  meditation: {
    title: 'Sleep Meditation',
    duration: '7 minutes',
    difficulty: 'All Levels',
    description: 'A guided relaxation meditation to help you unwind and prepare for restful sleep. Perfect for the luteal phase when you may experience sleep disturbances or restlessness.',
    benefits: [
      'Reduces stress and anxiety',
      'Improves sleep quality',
      'Calms racing thoughts',
      'Relaxes tense muscles'
    ],
    guide: [
      {
        time: 'Minute 0-1',
        title: 'Get Comfortable',
        instruction: 'Lie down in bed or sit in a comfortable position. Close your eyes and take three deep breaths, inhaling through your nose and exhaling through your mouth.'
      },
      {
        time: 'Minute 1-2',
        title: 'Body Scan',
        instruction: 'Bring awareness to your body. Notice any areas of tension. Starting from your toes, consciously relax each body part, moving upward through your legs, torso, arms, and face.'
      },
      {
        time: 'Minute 2-4',
        title: 'Breath Focus',
        instruction: 'Shift your attention to your natural breath. Don\'t try to change it, just observe. Count "one" on the inhale, "two" on the exhale, up to ten, then start again. If your mind wanders, gently return to counting.'
      },
      {
        time: 'Minute 4-5',
        title: 'Visualization',
        instruction: 'Imagine a warm, soft light starting at the top of your head, slowly moving down your body like a gentle wave, melting away any remaining tension as it flows.'
      },
      {
        time: 'Minute 5-6',
        title: 'Affirmations',
        instruction: 'Silently repeat: "I am safe. I am relaxed. I am ready for peaceful sleep." Let these words sink into your subconscious mind.'
      },
      {
        time: 'Minute 6-7',
        title: 'Gradual Release',
        instruction: 'Allow your breath to become even softer and slower. Feel yourself drifting into a peaceful, restful state. When ready, let yourself drift into sleep.'
      }
    ],
    tips: [
      'Create a calm environment: dim lights, comfortable temperature',
      'Use this meditation at the same time each night for best results',
      'If thoughts arise, acknowledge them without judgment and return to the meditation',
      'Consider using calming essential oils like lavender',
      'Turn off screens at least 30 minutes before meditation'
    ],
    whenToUse: [
      'Before bedtime to prepare for sleep',
      'If you wake up during the night',
      'During high stress or anxiety periods',
      'When experiencing PMS-related sleep issues'
    ]
  }
};

export function RecommendationDetailScreen({ onNavigate, recommendation }: RecommendationDetailScreenProps) {
  const detail = recommendationDetails[recommendation.type];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-white pb-24 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E91E63] to-[#F48FB1] rounded-b-[2.5rem] shadow-lg shadow-pink-200 pb-6 pt-6 px-6">
        <div className="flex items-center gap-4 mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => onNavigate('home')}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl text-white flex-1">{detail.title}</h1>
        </div>
      </div>

      <div className="px-6 -mt-4">
        {/* Overview Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Card className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg shadow-pink-100 p-6">
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-[#8E7C93] dark:text-gray-400">
                <Clock className="h-4 w-4" />
                {detail.duration}
              </div>
              <div className="flex items-center gap-2 text-sm text-[#8E7C93] dark:text-gray-400">
                <Users className="h-4 w-4" />
                {detail.difficulty}
              </div>
            </div>
            <p className="text-[#4A2C2A] dark:text-gray-200 leading-relaxed">{detail.description}</p>
          </Card>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A] dark:text-gray-200 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#E91E63]" />
            Benefits
          </h3>
          <Card className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg shadow-pink-100 p-6">
            <ul className="space-y-3">
              {detail.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-[#E91E63] mt-1">✓</span>
                  <span className="text-[#4A2C2A] dark:text-gray-200 flex-1">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Type-specific content */}
        {recommendation.type === 'yoga' && 'poses' in detail && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h3 className="text-sm mb-4 text-[#4A2C2A] dark:text-gray-200">Yoga Sequence</h3>
            <div className="space-y-3">
              {detail.poses.map((pose, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md shadow-pink-100 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E91E63] to-[#F48FB1] flex items-center justify-center text-white text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#4A2C2A] dark:text-gray-200 mb-1">{pose.name}</h4>
                      <p className="text-xs text-[#E91E63] mb-2">{pose.duration}</p>
                      <p className="text-sm text-[#8E7C93] dark:text-gray-400">{pose.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {recommendation.type === 'facemask' && 'ingredients' in detail && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h3 className="text-sm mb-4 text-[#4A2C2A] dark:text-gray-200">Ingredients</h3>
              <Card className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg shadow-pink-100 p-6">
                <div className="space-y-4">
                  {detail.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#FCE4EC] dark:bg-gray-700 flex items-center justify-center text-[#E91E63] text-xs flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-[#4A2C2A] dark:text-gray-200 mb-1">{ingredient.name}</p>
                        <p className="text-xs text-[#8E7C93] dark:text-gray-400">{ingredient.purpose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <h3 className="text-sm mb-4 text-[#4A2C2A] dark:text-gray-200">Instructions</h3>
              <div className="space-y-3">
                {detail.instructions.map((instruction) => (
                  <Card key={instruction.step} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md shadow-pink-100 p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E91E63] to-[#F48FB1] flex items-center justify-center text-white text-sm flex-shrink-0">
                        {instruction.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[#4A2C2A] dark:text-gray-200 mb-2">{instruction.title}</h4>
                        <p className="text-sm text-[#8E7C93] dark:text-gray-400">{instruction.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>

            {detail.warnings && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-6"
              >
                <Card className="bg-[#FFF8E1] dark:bg-yellow-900/30 border-[#FFB74D] rounded-2xl p-5">
                  <h4 className="text-[#F57C00] dark:text-yellow-400 mb-3 flex items-center gap-2">
                    ⚠️ Important Warnings
                  </h4>
                  <ul className="space-y-2">
                    {detail.warnings.map((warning, index) => (
                      <li key={index} className="text-sm text-[#E65100] dark:text-yellow-300">• {warning}</li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )}
          </>
        )}

        {recommendation.type === 'meditation' && 'guide' in detail && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h3 className="text-sm mb-4 text-[#4A2C2A] dark:text-gray-200">Meditation Guide</h3>
              <div className="space-y-3">
                {detail.guide.map((step, index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md shadow-pink-100 p-5">
                    <div className="mb-3">
                      <span className="text-xs text-[#E91E63] bg-[#FCE4EC] dark:bg-pink-900/30 px-3 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <h4 className="text-[#4A2C2A] dark:text-gray-200 mb-2">{step.title}</h4>
                    <p className="text-sm text-[#8E7C93] dark:text-gray-400 leading-relaxed">{step.instruction}</p>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <h3 className="text-sm mb-4 text-[#4A2C2A] dark:text-gray-200">When to Use</h3>
              <Card className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg shadow-pink-100 p-6">
                <ul className="space-y-3">
                  {detail.whenToUse.map((use, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#E91E63] mt-1">→</span>
                      <span className="text-[#4A2C2A] dark:text-gray-200 flex-1">{use}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </>
        )}

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A] dark:text-gray-200">Pro Tips</h3>
          <Card className="bg-gradient-to-br from-[#E91E63] to-[#F48FB1] rounded-3xl shadow-lg p-6 text-white">
            <ul className="space-y-3">
              {detail.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-white mt-1">💡</span>
                  <span className="flex-1">{tip}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
