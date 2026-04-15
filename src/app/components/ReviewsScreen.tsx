import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Play, Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';

interface ReviewsScreenProps {
  onNavigate: (screen: string) => void;
}

// Video reviews data - Add your Google Drive video IDs here
const videoReviews = [
  {
    id: '1HqJX8M7PBFU85ITOkcCUnzQ7-NKCbAaC',
    title: 'User Review #1',
    reviewer: 'Anonymous User',
    rating: 5,
    caption: 'Cycura changed my life! Managing PCOS has never been easier.',
    date: 'January 2026'
  },
  {
    id: '1IVdPo-xCDrpF8SFT6jhR-pHJW2-Zd3MB',
    title: 'User Review #2',
    reviewer: 'Anonymous User',
    rating: 5,
    caption: 'Finally an app that understands irregular periods and PCOD!',
    date: 'January 2026'
  },
  {
    id: '1-mG5T8IoLnODv4ruvORqf8RU9Htp97S8',
    title: 'User Review #3',
    reviewer: 'Anonymous User',
    rating: 5,
    caption: 'The AI chatbot and period tracker are game changers.',
    date: 'January 2026'
  },
  {
    id: '1FZV7y0ZSt2I_pyHpZXrB4a2CtBUSjikx',
    title: 'User Review #4',
    reviewer: 'Anonymous User',
    rating: 5,
    caption: 'Love the music therapy feature. It really helps with my cramps!',
    date: 'February 2026'
  },
  {
    id: '1650R0Dvg3bWfUtIR-UQTK5BaihFG-Tlf',
    title: 'User Review #5',
    reviewer: 'Anonymous User',
    rating: 5,
    caption: 'Best period tracking app for managing PCOS symptoms.',
    date: 'February 2026'
  },
  {
    id: '1pVT4pJPxynw3WIGeuSJnwMleC7dWkcyD',
    title: 'User Review #6',
    reviewer: 'Anonymous User',
    rating: 5,
    caption: 'The education section taught me so much about my body!',
    date: 'February 2026'
  },
  {
    id: '1D2CNGwJoIhqPj9QlesZJM32j_WVpBgS7',
    title: 'User Review #7',
    reviewer: 'Anonymous User',
    rating: 5,
    caption: 'Cycura helped me understand my cycle better than ever before.',
    date: 'February 2026'
  }
  // Add more videos here by extracting the ID from Google Drive links
  // Example: https://drive.google.com/file/d/VIDEO_ID/view
];

// Text reviews for additional testimonials
const textReviews = [
  {
    name: 'Priya M.',
    age: 24,
    rating: 5,
    text: 'The AI chatbot understood my concerns better than I could explain them. The period tracker is super accurate and the music therapy helps me relax during cramps.',
    location: 'Mumbai'
  },
  {
    name: 'Ananya S.',
    age: 19,
    rating: 5,
    text: 'Finally an app that doesn\'t make me feel awkward about periods! The education section taught me so much about PCOD that even my doctor was impressed.',
    location: 'Delhi'
  },
  {
    name: 'Riya K.',
    age: 28,
    rating: 5,
    text: 'Love the phase-wise recommendations! I plan my workouts and meals according to my cycle now. Game changer for managing irregular periods.',
    location: 'Bangalore'
  },
  {
    name: 'Sneha P.',
    age: 21,
    rating: 4,
    text: 'The therapist booking feature is amazing. I found a specialist who actually understands PCOS. The app is beautiful and easy to use.',
    location: 'Pune'
  }
];

const stats = [
  { label: 'Happy Users', value: '10,000+' },
  { label: 'Average Rating', value: '4.8/5' },
  { label: 'Video Reviews', value: '7' }
];

export function ReviewsScreen({ onNavigate }: ReviewsScreenProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-white pb-24">
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
          <h1 className="text-2xl text-white flex-1">User Reviews</h1>
        </div>
        <p className="text-white/90 text-sm">See what our community is saying</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-xl text-[#E91E63] mb-1">{stat.value}</div>
                  <p className="text-xs text-[#8E7C93]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Video Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm text-[#4A2C2A]">Video Testimonials</h3>
            <div className="flex items-center gap-1 text-[#E91E63]">
              <Play className="h-4 w-4" />
              <span className="text-xs">{videoReviews.length} videos</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {videoReviews.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="bg-white rounded-3xl shadow-lg shadow-pink-100 overflow-hidden">
                  {/* Video Player */}
                  <div className="relative aspect-video bg-gradient-to-br from-[#FCE4EC] to-[#F8BBD0]">
                    <iframe
                      src={`https://drive.google.com/file/d/${video.id}/preview`}
                      className="w-full h-full"
                      allow="autoplay"
                      title={video.title}
                    />
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-[#4A2C2A]">{video.title}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(video.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#FFD700] text-[#FFD700]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-[#8E7C93] mb-2">{video.caption}</p>
                    <div className="flex items-center justify-between text-xs text-[#8E7C93]">
                      <span>{video.reviewer}</span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Instructions to add more videos */}
          <Card className="bg-gradient-to-br from-[#F3E5F5] to-[#FCE4EC] rounded-2xl p-4 mt-4">
            <div className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-[#9C27B0] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[#4A2C2A] mb-1">
                  <strong>Add More Videos:</strong>
                </p>
                <p className="text-xs text-[#8E7C93]">
                  To add more Google Drive videos, extract the file ID from your Drive link and add it to the videoReviews array in ReviewsScreen.tsx
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Text Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-sm mb-4 text-[#4A2C2A]">User Testimonials</h3>
          <div className="space-y-3">
            {textReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <Card className="bg-white rounded-2xl shadow-md shadow-pink-100 p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-[#4A2C2A] text-sm">{review.name}, {review.age}</h4>
                      <p className="text-xs text-[#8E7C93]">{review.location}</p>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#4A2C2A] leading-relaxed">{review.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <Card className="bg-gradient-to-br from-[#E91E63] to-[#F48FB1] rounded-3xl shadow-lg p-6 text-white text-center">
            <Heart className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-lg mb-2">Love Cycura?</h3>
            <p className="text-sm opacity-90 mb-4">
              Share your story and help other women discover the app that changed your life
            </p>
            <Button className="bg-white text-[#E91E63] hover:bg-pink-50 rounded-full">
              Share Your Review
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}