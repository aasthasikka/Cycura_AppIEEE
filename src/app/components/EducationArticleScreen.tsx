import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface EducationArticleScreenProps {
  onNavigate: (screen: string) => void;
  article: {
    id: string;
    title: string;
  };
}

const articles: Record<string, any> = {
  'cycle': {
    title: 'Understanding Your Menstrual Cycle',
    readTime: '8 min read',
    sections: [
      {
        heading: 'The Four Phases of Your Cycle',
        content: 'Your menstrual cycle is divided into four distinct phases, each characterized by unique hormonal changes that affect your body, mood, and energy levels. Understanding these phases empowers you to work with your body rather than against it.'
      },
      {
        heading: '1. Menstrual Phase (Days 1-5)',
        content: 'This is when your period happens. The uterine lining sheds, resulting in menstrual bleeding. Hormone levels (estrogen and progesterone) are at their lowest, which may cause fatigue, cramps, and lower mood.\n\nWhat to do: Rest, use heat therapy for cramps, eat iron-rich foods, practice gentle yoga, and be kind to yourself. This is your body\'s natural renewal phase.'
      },
      {
        heading: '2. Follicular Phase (Days 6-13)',
        content: 'After your period ends, estrogen levels begin to rise as your body prepares to release an egg. This phase is characterized by increased energy, improved mood, and clearer skin.\n\nWhat to do: This is the perfect time for high-intensity workouts, trying new activities, starting projects, and social interactions. Your creativity and problem-solving abilities peak during this phase.'
      },
      {
        heading: '3. Ovulation Phase (Days 14-16)',
        content: 'Around day 14, estrogen peaks and triggers the release of an egg from your ovary. This is when you\'re most fertile. You may experience increased confidence, better communication skills, and higher libido.\n\nWhat to do: Schedule important meetings or presentations during this time. You\'re naturally more social and charismatic. It\'s also a great time for cardio and group fitness classes.'
      },
      {
        heading: '4. Luteal Phase (Days 17-28)',
        content: 'After ovulation, progesterone rises to prepare the uterus for potential pregnancy. If pregnancy doesn\'t occur, both estrogen and progesterone drop, leading to PMS symptoms like mood swings, bloating, food cravings, and fatigue.\n\nWhat to do: Focus on self-care, eat complex carbohydrates and magnesium-rich foods, practice stress-reduction techniques, and engage in moderate exercise like pilates or walking. This is your body\'s cue to slow down.'
      },
      {
        heading: 'Tracking Your Cycle',
        content: 'Every woman\'s cycle is unique. While the average cycle is 28 days, anywhere from 21 to 35 days is considered normal. Tracking your cycle helps you:\n\n• Predict your period\n• Identify patterns in mood and energy\n• Plan important events\n• Recognize irregularities that may need medical attention\n• Optimize your fitness and nutrition\n\nUse Cycura\'s period tracker to log your symptoms, mood, and flow. Over time, you\'ll discover your personal patterns and learn to work with your cycle.'
      },
      {
        heading: 'When to Seek Medical Help',
        content: 'Consult a healthcare provider if you experience:\n\n• Very irregular cycles (varying by more than 7-9 days)\n• Extremely heavy bleeding (soaking through a pad/tampon every hour)\n• Severe pain that interferes with daily activities\n• Periods lasting longer than 7 days\n• Missing periods (without pregnancy)\n• Sudden changes in your cycle pattern'
      }
    ]
  },
  'first-period': {
    title: 'First Period Guide for Teens',
    readTime: '10 min read',
    sections: [
      {
        heading: 'What to Expect',
        content: 'Getting your first period (menarche) is a natural and healthy part of growing up. Most girls get their first period between ages 10-15, but everyone is different. It\'s normal to feel excited, nervous, or confused - all these feelings are valid!'
      },
      {
        heading: 'Signs Your Period Might Be Coming',
        content: 'Your body gives you clues that your period is approaching:\n\n• Breast development (usually starts 2-3 years before first period)\n• Pubic and underarm hair growth\n• Growth spurt\n• Vaginal discharge (white or yellowish fluid)\n• Mild cramping in lower abdomen\n• Mood changes\n• Skin changes or acne\n\nThese signs can appear months or even years before your first period arrives.'
      },
      {
        heading: 'What Happens During a Period',
        content: 'Each month, your uterus prepares for a possible pregnancy by building up a thick, blood-rich lining. When pregnancy doesn\'t occur, this lining breaks down and leaves your body through your vagina. This is your period.\n\nYour first period might be very light - just a few spots of brown or red blood. It might last 2-7 days. Don\'t worry if it seems irregular at first; it can take 1-2 years for your cycle to become regular.'
      },
      {
        heading: 'Products You Can Use',
        content: 'There are several options for managing your period:\n\n**Pads (Sanitary Napkins)**\nStick to your underwear and absorb blood. Great for beginners and nighttime. Change every 3-4 hours.\n\n**Tampons**\nInserted into the vagina to absorb blood internally. Come with applicators for easy insertion. Change every 4-6 hours. Never leave in longer than 8 hours.\n\n**Menstrual Cups**\nReusable silicone cups inserted into the vagina. Eco-friendly and cost-effective. Can be worn up to 12 hours.\n\n**Period Underwear**\nSpecial absorbent underwear that can be washed and reused. Good for light days or as backup protection.\n\nStart with pads until you\'re comfortable, then try other options if interested.'
      },
      {
        heading: 'Managing Period Pain',
        content: 'Mild cramping is normal, but severe pain isn\'t. Here\'s how to feel better:\n\n• Use a heating pad or hot water bottle on your lower belly\n• Take over-the-counter pain relievers (ask a parent first)\n• Drink plenty of water\n• Do gentle stretches or yoga\n• Take a warm bath\n• Get enough rest\n\nIf pain is very severe or interferes with school/activities, talk to a doctor.'
      },
      {
        heading: 'Being Prepared at School',
        content: 'Keep a "period kit" in your backpack:\n\n• Pads or tampons\n• Extra underwear in a small bag\n• Pain reliever\n• Wet wipes or tissues\n• Small plastic bag for wrapping used products\n\nMost schools have pads available in the nurse\'s office if you\'re caught unprepared. Don\'t be embarrassed to ask!'
      },
      {
        heading: 'Talking About It',
        content: 'It\'s completely normal to talk about periods! Consider discussing them with:\n\n• Your mom, older sister, or trusted female relative\n• School nurse or counselor\n• Close friends who also menstruate\n• Your doctor\n\nThere\'s no shame in having periods - it\'s a natural, healthy bodily function that about half the population experiences!'
      },
      {
        heading: 'Common Worries (and Why Not to Worry)',
        content: '**"What if I leak?"**\nWear dark pants during your period, change products regularly, and consider wearing a pad to bed. Accidents happen to everyone!\n\n**"Will people know?"**\nNo one can tell you\'re on your period unless you tell them. Period products are discreet and modern pads are very thin.\n\n**"Does it hurt a lot?"**\nMost people experience mild discomfort, not severe pain. Everyone\'s experience is different.\n\n**"Can I still exercise/swim?"**\nYes! You can do all normal activities during your period. Use tampons or a menstrual cup for swimming.\n\n**"What if it comes at the wrong time?"**\nYour period is never wrong - it\'s natural! Always carry supplies and remember that millions of girls are going through the same thing.'
      }
    ]
  },
  'pcos': {
    title: 'Understanding PCOS & PCOD',
    readTime: '12 min read',
    sections: [
      {
        heading: 'What is PCOS?',
        content: 'Polycystic Ovary Syndrome (PCOS) is a hormonal disorder affecting 1 in 10 women of reproductive age. Despite the name, it\'s not just about ovarian cysts - it\'s a complex condition involving hormone imbalances, metabolism issues, and inflammation.'
      },
      {
        heading: 'PCOS vs PCOD: What\'s the Difference?',
        content: 'PCOD (Polycystic Ovarian Disease) and PCOS are often used interchangeably, but there are subtle differences:\n\n**PCOD**: More common, less severe. Ovaries produce immature eggs that turn into cysts. Can often be managed with diet and lifestyle.\n\n**PCOS**: A metabolic disorder. More serious and involves hormone imbalances affecting the entire body. Requires comprehensive management.\n\nHowever, many doctors use PCOS for both conditions. The treatment approach is similar regardless of terminology.'
      },
      {
        heading: 'Common Symptoms',
        content: 'PCOS symptoms vary widely, but common signs include:\n\n• Irregular or absent periods\n• Heavy bleeding when periods occur\n• Excess facial and body hair (hirsutism)\n• Acne, especially along jawline and chin\n• Weight gain or difficulty losing weight\n• Thinning hair on scalp\n• Darkening of skin (neck, groin, under breasts)\n• Skin tags\n• Fatigue\n• Mood changes, depression, anxiety\n• Difficulty getting pregnant\n\nYou don\'t need all symptoms to have PCOS. Some women have mild symptoms, others severe.'
      },
      {
        heading: 'What Causes PCOS?',
        content: 'The exact cause isn\'t fully understood, but several factors play a role:\n\n**Insulin Resistance**: About 70% of women with PCOS have insulin resistance, causing high insulin levels that trigger excess androgen production.\n\n**Inflammation**: Low-grade inflammation is common in PCOS, contributing to symptoms and long-term health risks.\n\n**Genetics**: PCOS often runs in families. If your mother or sister has it, your risk is higher.\n\n**Hormone Imbalance**: Excess androgens (male hormones) interfere with ovulation and cause symptoms like acne and hair growth.'
      },
      {
        heading: 'Getting Diagnosed',
        content: 'Diagnosis typically requires meeting 2 of these 3 criteria:\n\n1. Irregular or absent periods\n2. Signs of excess androgens (physical symptoms or blood tests)\n3. Polycystic ovaries on ultrasound\n\nYour doctor may run tests including:\n\n• Blood tests (hormones, glucose, insulin, cholesterol)\n• Pelvic ultrasound\n• Physical examination\n\nEarly diagnosis is important! If you suspect PCOS, consult a gynecologist or endocrinologist.'
      },
      {
        heading: 'Treatment and Management',
        content: 'While there\'s no cure, PCOS can be effectively managed:\n\n**Lifestyle Changes** (Most Important!)\n• Weight loss of just 5-10% can significantly improve symptoms\n• Regular exercise (30 minutes daily)\n• Low-glycemic diet\n• Stress management\n\n**Medical Treatments**\n• Birth control pills to regulate periods\n• Metformin for insulin resistance\n• Anti-androgen medications for acne/hair growth\n• Fertility treatments if trying to conceive\n\n**Natural Approaches**\n• Inositol supplements\n• Omega-3 fatty acids\n• Vitamin D and magnesium\n• Spearmint tea for reducing androgens\n\nAlways consult your doctor before starting new treatments.'
      },
      {
        heading: 'Diet Tips for PCOS',
        content: 'Nutrition is crucial for managing PCOS:\n\n**Foods to Emphasize**\n• Fiber-rich vegetables\n• Lean proteins (fish, chicken, legumes)\n• Healthy fats (avocado, nuts, olive oil)\n• Low-glycemic fruits (berries, apples, pears)\n• Anti-inflammatory foods (turmeric, ginger, green tea)\n\n**Foods to Limit**\n• Refined carbohydrates (white bread, pastries)\n• Sugary foods and drinks\n• Processed foods\n• Excessive dairy (can increase insulin)\n• Red meat\n\n**Meal Timing**\n• Don\'t skip breakfast\n• Eat regular meals to stabilize blood sugar\n• Combine protein + fiber at each meal'
      },
      {
        heading: 'Long-term Health Considerations',
        content: 'PCOS increases risk for certain conditions, making regular monitoring important:\n\n• Type 2 diabetes\n• High blood pressure\n• High cholesterol\n• Heart disease\n• Endometrial cancer (from irregular periods)\n\nThe good news: Proactive management significantly reduces these risks! Regular check-ups, healthy lifestyle, and appropriate treatment help you stay healthy long-term.'
      },
      {
        heading: 'Living Well with PCOS',
        content: 'PCOS is challenging, but many women manage it successfully:\n\n• Be patient - changes take time, usually 3-6 months to see results\n• Find a supportive healthcare team\n• Connect with others who have PCOS (online communities, support groups)\n• Focus on what you can control (diet, exercise, stress)\n• Celebrate small victories\n• Remember: You\'re not alone, and you can thrive with PCOS!'
      }
    ]
  },
  'nutrition': {
    title: 'Cycle-Syncing Nutrition & Wellness',
    readTime: '10 min read',
    sections: [
      {
        heading: 'What is Cycle Syncing?',
        content: 'Cycle syncing means aligning your diet, exercise, and lifestyle with your menstrual cycle phases. Since your hormones fluctuate throughout the month, your nutritional needs change too. Eating the right foods at the right time can reduce symptoms, balance hormones, and optimize energy.'
      },
      {
        heading: 'Menstrual Phase Nutrition (Days 1-5)',
        content: 'During your period, focus on replenishing nutrients lost through bleeding and supporting your body\'s renewal process.\n\n**Key Nutrients**: Iron, vitamin B12, omega-3s\n\n**Best Foods**:\n• Dark leafy greens (spinach, kale)\n• Red meat or lentils for iron\n• Wild-caught salmon\n• Dark chocolate (70%+ cocoa)\n• Turmeric and ginger for inflammation\n• Bone broth\n• Beets\n\n**Why**: You lose iron through bleeding, and these foods help replenish it while reducing cramps and inflammation.\n\n**Hydration**: Drink plenty of water and herbal teas (ginger, chamomile) to reduce bloating.'
      },
      {
        heading: 'Follicular Phase Nutrition (Days 6-13)',
        content: 'As estrogen rises, your energy increases. Support this upward trajectory with light, energizing foods.\n\n**Key Nutrients**: Protein, vitamin E, zinc\n\n**Best Foods**:\n• Lean proteins (chicken, turkey, fish)\n• Fresh vegetables (broccoli, zucchini, lettuce)\n• Fermented foods (kimchi, sauerkraut, yogurt)\n• Nuts and seeds (pumpkin seeds for zinc)\n• Whole grains (quinoa, brown rice)\n• Citrus fruits\n\n**Why**: Your metabolism is faster, and your body is primed for protein synthesis. Lighter foods match your elevated energy.\n\n**Meal Ideas**:\n• Smoothie bowls with berries and granola\n• Grilled chicken salad\n• Veggie stir-fry with quinoa'
      },
      {
        heading: 'Ovulation Phase Nutrition (Days 14-16)',
        content: 'Estrogen peaks during ovulation. Eat foods that support liver detoxification to help clear excess estrogen.\n\n**Key Nutrients**: Fiber, antioxidants, folate\n\n**Best Foods**:\n• Cruciferous vegetables (broccoli, cauliflower, Brussels sprouts)\n• Colorful vegetables (bell peppers, carrots, tomatoes)\n• Berries (blueberries, strawberries, raspberries)\n• Leafy greens\n• Asparagus\n• Quinoa and whole grains\n\n**Why**: These foods help your liver metabolize and eliminate excess estrogen, preventing hormonal imbalances.\n\n**Eating Pattern**: You may naturally eat less during this phase - listen to your body!'
      },
      {
        heading: 'Luteal Phase Nutrition (Days 17-28)',
        content: 'Progesterone rises, your metabolism increases, and you may experience PMS. Focus on blood sugar balance and mood-supporting nutrients.\n\n**Key Nutrients**: Magnesium, B vitamins, complex carbs, calcium\n\n**Best Foods**:\n• Root vegetables (sweet potatoes, squash, carrots)\n• Complex carbohydrates (brown rice, oats, quinoa)\n• Dark leafy greens (high in magnesium)\n• Chickpeas and lentils\n• Dark chocolate\n• Bananas\n• Pumpkin and sunflower seeds\n• Fatty fish\n\n**Why**: These foods stabilize blood sugar, boost serotonin (reducing mood swings), and provide magnesium to reduce cramps and cravings.\n\n**Managing Cravings**: \n• Crave chocolate? You need magnesium - have dark chocolate or nuts\n• Crave salty foods? You may need more minerals - add sea salt to meals\n• Crave carbs? Your body needs energy - choose complex carbs over refined'
      },
      {
        heading: 'Supplements to Consider',
        content: 'While food should be your primary source of nutrients, these supplements can help:\n\n**Magnesium**: Reduces cramps, bloating, mood swings (especially helpful in luteal phase)\n\n**Omega-3s**: Reduces inflammation and period pain\n\n**Vitamin D**: Supports hormone production and mood\n\n**B-Complex**: Supports energy and hormone metabolism\n\n**Iron**: If you have heavy periods or are anemic\n\n**Inositol**: Particularly helpful for PCOS\n\nAlways consult a healthcare provider before starting supplements!'
      },
      {
        heading: 'Exercise by Cycle Phase',
        content: 'Match your workouts to your hormones:\n\n**Menstrual Phase**: Gentle yoga, walking, stretching\n\n**Follicular Phase**: HIIT, strength training, running, trying new classes\n\n**Ovulation Phase**: High-intensity cardio, dance, group fitness\n\n**Luteal Phase**: Pilates, moderate yoga, strength training, swimming\n\nListen to your body! If you need rest, rest. Pushing through fatigue can worsen hormonal imbalances.'
      },
      {
        heading: 'Lifestyle Tips for Hormone Balance',
        content: '**Sleep**: Aim for 7-9 hours. Go to bed by 10-11pm to support cortisol rhythms.\n\n**Stress Management**: Chronic stress disrupts all hormones. Practice meditation, deep breathing, or journaling.\n\n**Avoid Hormone Disruptors**:\n• Plastic containers (use glass)\n• Non-stick cookware (use cast iron or stainless steel)\n• Conventional personal care products (choose natural alternatives)\n\n**Consistent Meal Times**: Eating at regular times supports stable blood sugar and hormone production.\n\n**Reduce Caffeine**: Especially in the luteal phase, as it can worsen anxiety and disrupt sleep.'
      },
      {
        heading: 'Sample Day-by-Day Meal Plan',
        content: '**Menstrual Phase**\nBreakfast: Oatmeal with walnuts and berries\nLunch: Spinach salad with salmon and beets\nDinner: Lentil soup with turmeric\nSnack: Dark chocolate\n\n**Follicular Phase**\nBreakfast: Greek yogurt parfait with granola\nLunch: Grilled chicken with quinoa and veggies\nDinner: Stir-fried tofu with brown rice\nSnack: Apple with almond butter\n\n**Ovulation Phase**\nBreakfast: Green smoothie with spinach and berries\nLunch: Rainbow vegetable salad with chickpeas\nDinner: Roasted salmon with asparagus\nSnack: Raw veggies with hummus\n\n**Luteal Phase**\nBreakfast: Avocado toast with eggs\nLunch: Sweet potato and black bean bowl\nDinner: Chicken with roasted root vegetables\nSnack: Banana with peanut butter'
      }
    ]
  }
};

export function EducationArticleScreen({ onNavigate, article }: EducationArticleScreenProps) {
  const articleData = articles[article.id];

  if (!articleData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-white flex items-center justify-center">
        <p className="text-[#8E7C93]">Article not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-white pb-24 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#E91E63] to-[#F48FB1] rounded-b-[2.5rem] shadow-lg shadow-pink-200 pb-8 pt-6 px-6">
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => onNavigate('education')}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl text-white mb-2">{articleData.title}</h1>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <Clock className="h-4 w-4" />
              {articleData.readTime}
            </div>
          </div>
          <BookOpen className="h-6 w-6 text-white" />
        </div>
      </div>

      <div className="px-6 -mt-4">
        {/* Article Content */}
        <div className="space-y-6">
          {articleData.sections.map((section: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg shadow-pink-100 p-6">
                <h2 className="text-lg text-[#4A2C2A] dark:text-gray-200 mb-4">{section.heading}</h2>
                <div className="text-[#4A2C2A] dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-br from-[#E91E63] to-[#F48FB1] rounded-3xl shadow-lg p-6 text-white text-center">
            <p className="mb-4">Want to learn more about menstrual health?</p>
            <Button
              onClick={() => onNavigate('education')}
              className="bg-white text-[#E91E63] hover:bg-white/90"
            >
              Explore More Articles
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
