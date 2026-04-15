import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Play, Pause, SkipForward, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Slider } from '@/app/components/ui/slider';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface MusicScreenProps {
  onNavigate: (screen: string) => void;
}

const playlists = [
  {
    id: 1,
    name: 'Calm & Centered',
    description: 'Meditation music for menstrual phase',
    phase: 'Menstrual',
    tracks: 12,
    duration: '45:00',
    color: 'from-[#CE93D8] to-[#BA68C8]',
    image: 'https://images.unsplash.com/photo-1752650735951-7724818b3487?...',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    id: 2,
    name: 'Energy Boost',
    description: 'Upbeat tracks for follicular phase',
    phase: 'Follicular',
    tracks: 18,
    duration: '60:00',
    color: 'from-[#E91E63] to-[#F48FB1]',
    image: 'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?...',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    id: 3,
    name: 'Sleep Sanctuary',
    description: 'Peaceful sounds for better rest',
    phase: 'All Phases',
    tracks: 10,
    duration: '90:00',
    color: 'from-[#9575CD] to-[#7E57C2]',
    image: 'https://images.unsplash.com/photo-1686828752365-1f90f9c502b4?...',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
];

export function MusicScreen({ onNavigate }: MusicScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  const currentPlaylist = playlists[currentIndex];

  // Toggle play/pause
  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    // Wait for any pending play promise to complete
    if (playPromiseRef.current) {
      try {
        await playPromiseRef.current;
      } catch (err) {
        // Ignore errors from previous play attempts
      }
      playPromiseRef.current = null;
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      playPromiseRef.current = audioRef.current.play();
      try {
        await playPromiseRef.current;
        setIsPlaying(true);
      } catch (err) {
        console.warn('Playback blocked by browser:', err);
        setIsPlaying(false);
      } finally {
        playPromiseRef.current = null;
      }
    }
  };

  // Skip forward 15s
  const skipForward = () => {
    if (audioRef.current) audioRef.current.currentTime += 15;
  };

  // Load current playlist
  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const wasPlaying = isPlaying;

    // Pause current audio before switching
    if (playPromiseRef.current) {
      playPromiseRef.current.catch(() => {}).then(() => {
        audio.pause();
      });
    } else {
      audio.pause();
    }
    
    setIsPlaying(false);
    playPromiseRef.current = null;

    audio.src = currentPlaylist.audio;
    audio.load();
    setProgress(0);
    setCurrentTime('0:00');

    // Only auto-play if it was playing before
    if (wasPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromiseRef.current = playPromise;
        playPromise
          .then(() => {
            setIsPlaying(true);
            playPromiseRef.current = null;
          })
          .catch(err => {
            console.warn('Playback blocked:', err);
            setIsPlaying(false);
            playPromiseRef.current = null;
          });
      }
    }

    const updateProgress = () => {
      if (!audio.duration) return;
      const newProgress = (audio.currentTime / audio.duration) * 100;
      setProgress(newProgress);

      const mins = Math.floor(audio.currentTime / 60);
      const secs = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
      setCurrentTime(`${mins}:${secs}`);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      // Auto-play next playlist
      const nextIndex = (currentIndex + 1) % playlists.length;
      setCurrentIndex(nextIndex);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentPlaylist, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5F7] to-white pb-32">
      <audio ref={audioRef} preload="auto" />

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
          <h1 className="text-2xl text-white flex-1">Music Therapy</h1>
        </div>
        <p className="text-white/90 text-sm">AI-curated playlists for your cycle & mood</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Current Playlist Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card className={`bg-gradient-to-br ${currentPlaylist.color} rounded-3xl shadow-lg p-6 mb-6 text-white`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={currentPlaylist.image}
                  alt={currentPlaylist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg mb-1">{currentPlaylist.name}</h3>
                <p className="text-sm opacity-90">{currentPlaylist.description}</p>
              </div>
            </div>

            {/* Slider */}
            <div className="mb-4">
              <Slider
                value={[progress]}
                max={100}
                step={1}
                onValueChange={val => {
                  if (!audioRef.current || !audioRef.current.duration) return;
                  const newTime = (val[0] / 100) * audioRef.current.duration;
                  audioRef.current.currentTime = newTime;
                  setProgress(val[0]);
                }}
              />
              <div className="flex justify-between text-xs opacity-80">
                <span>{currentTime}</span>
                <span>{currentPlaylist.duration}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-14 h-14 bg-white/20 hover:bg-white/30 rounded-full"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={skipForward}
              >
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Playlist List */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm text-[#4A2C2A]">Curated for You</h3>
            <Button variant="ghost" size="sm" className="text-[#E91E63] hover:bg-[#FCE4EC]">
              <ExternalLink className="h-4 w-4 mr-2" />
              Add Spotify
            </Button>
          </div>

          <div className="space-y-3">
            {playlists.map((playlist, index) => (
              <motion.div
                key={playlist.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className="bg-white rounded-2xl shadow-md shadow-pink-100 p-4 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden">
                      <ImageWithFallback src={playlist.image} alt={playlist.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[#4A2C2A] mb-1">{playlist.name}</h4>
                      <p className="text-xs text-[#8E7C93] mb-1">{playlist.description}</p>
                      <div className="flex gap-3 text-xs text-[#8E7C93]">
                        <span>{playlist.tracks} tracks</span>
                        <span>•</span>
                        <span>{playlist.duration}</span>
                        <span>•</span>
                        <span className="text-[#E91E63]">{playlist.phase}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-[#E91E63]">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}