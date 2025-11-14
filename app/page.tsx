'use client';

import Link from 'next/link';
import ThreeDLayeredCard from '@/components/ui/3d-layered-card';
import { GlowCard } from '@/components/ui/glow-card';
import { AnimatedText } from '@/components/ui/animated-text';
import { GlitchButton } from '@/components/ui/glitch-button';
import { LiquidMetalButton } from '@/components/ui/liquid-metal-button';
import { CyberpunkCard } from '@/components/ui/cyberpunk-card';
import { AnimatedGrainyBg } from '@/components/ui/animated-grainy-bg';

const HomePage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <AnimatedGrainyBg
        className="fixed inset-0 -z-10"
        colors={['#1a1a2e', '#16213e', '#0f3460']}
      />

      <div className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
        <div className="max-w-7xl w-full space-y-16">
          {/* Hero Section with Animated Text */}
          <section className="text-center space-y-8">
            <AnimatedText
              text="Welcome to Dermosite"
              type="rise"
              className="text-5xl md:text-7xl font-bold text-white"
            />
            <AnimatedText
              text="Powered by NyxUI Components"
              type="cascade"
              delay={0.5}
              className="text-xl md:text-2xl text-gray-300"
            />

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <GlitchButton>
                Get Started
              </GlitchButton>
              <LiquidMetalButton theme="gold">
                Explore Components
              </LiquidMetalButton>
            </div>
          </section>

          {/* 3D Cards Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-white">
              3D Layered Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <ThreeDLayeredCard
                logo="/vercel.svg"
                mainImage="/next.svg"
                title="Next.js 16"
                backgroundColor="bg-gradient-to-b from-black via-gray-900 to-gray-800"
              >
                <p className="text-sm text-gray-300">
                  Built with the latest Next.js featuring Turbopack and React 19
                </p>
              </ThreeDLayeredCard>

              <ThreeDLayeredCard
                logo="/vercel.svg"
                mainImage="/next.svg"
                title="TypeScript"
                backgroundColor="bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900"
              >
                <p className="text-sm text-gray-100">
                  Fully typed with strict TypeScript configuration
                </p>
              </ThreeDLayeredCard>

              <ThreeDLayeredCard
                logo="/vercel.svg"
                mainImage="/next.svg"
                title="Tailwind CSS"
                backgroundColor="bg-gradient-to-b from-purple-600 via-purple-700 to-purple-900"
              >
                <p className="text-sm text-gray-100">
                  Styled with Tailwind CSS v4.1 and custom utilities
                </p>
              </ThreeDLayeredCard>
            </div>
          </section>

          {/* Glow Cards Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-white">
              Interactive Glow Cards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <GlowCard variant="liquid" className="p-6 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="text-center space-y-2">
                  <div className="text-4xl">🌊</div>
                  <h3 className="text-xl font-bold text-white">Liquid</h3>
                  <p className="text-sm text-gray-300">Smooth liquid glow effect</p>
                </div>
              </GlowCard>

              <GlowCard variant="laser" className="p-6 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="text-center space-y-2">
                  <div className="text-4xl">⚡</div>
                  <h3 className="text-xl font-bold text-white">Laser</h3>
                  <p className="text-sm text-gray-300">Sharp laser precision</p>
                </div>
              </GlowCard>

              <GlowCard variant="cosmic" className="p-6 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="text-center space-y-2">
                  <div className="text-4xl">🌌</div>
                  <h3 className="text-xl font-bold text-white">Cosmic</h3>
                  <p className="text-sm text-gray-300">Space-like particles</p>
                </div>
              </GlowCard>

              <GlowCard variant="glitch" className="p-6 rounded-xl backdrop-blur-sm bg-white/5">
                <div className="text-center space-y-2">
                  <div className="text-4xl">💥</div>
                  <h3 className="text-xl font-bold text-white">Glitch</h3>
                  <p className="text-sm text-gray-300">Digital glitch effects</p>
                </div>
              </GlowCard>
            </div>
          </section>

          {/* Cyberpunk Cards Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-white">
              Cyberpunk Style
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CyberpunkCard
                theme="neon-green"
              >
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">▸</span>
                    React 19.2 with Server Components
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">▸</span>
                    Framer Motion Animations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">▸</span>
                    NyxUI Component Library
                  </li>
                </ul>
              </CyberpunkCard>

              <CyberpunkCard
                theme="neon-pink"
              >
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">▸</span>
                    Turbopack for faster builds
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">▸</span>
                    Partial Pre-Rendering (PPR)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-pink-400">▸</span>
                    Optimized Image Loading
                  </li>
                </ul>
              </CyberpunkCard>
            </div>
          </section>

          {/* Features Grid with Animated Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Next.js 16"
              description="Powered by Turbopack for 2-5x faster builds and 10x faster Fast Refresh"
              icon="🚀"
            />
            <FeatureCard
              title="React 19.2"
              description="Latest React features including View Transitions and Activity component"
              icon="⚛️"
            />
            <FeatureCard
              title="TypeScript"
              description="Strict type checking with route-aware type helpers and typed routes"
              icon="📘"
            />
            <FeatureCard
              title="Tailwind CSS v4.1"
              description="PostCSS-based configuration with utility-first styling"
              icon="🎨"
            />
            <FeatureCard
              title="Framer Motion"
              description="Beautiful animations powered by Framer Motion"
              icon="✨"
            />
            <FeatureCard
              title="NyxUI Components"
              description="26+ premium components ready to use"
              icon="🎭"
            />
          </section>

          {/* Tech Stack with Glow Card */}
          <section className="mt-16">
            <GlowCard variant="cosmic" className="p-8 rounded-2xl backdrop-blur-md bg-black/30 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-white">Tech Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Next.js 16 with Turbopack
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    React 19.2 with React Compiler
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    TypeScript with strict mode
                  </li>
                </ul>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Tailwind CSS v4.1
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Framer Motion animations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    NyxUI component library
                  </li>
                </ul>
              </div>
            </GlowCard>
          </section>

          {/* CTA Section */}
          <section className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pb-12">
            <Link href="/about">
              <GlitchButton className="text-lg px-8 py-4">
                Learn More
              </GlitchButton>
            </Link>
            <Link href="/demo">
              <LiquidMetalButton size="lg" theme="emerald">
                View All Demos
              </LiquidMetalButton>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <GlowCard variant="liquid" className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </GlowCard>
  );
};

export default HomePage;
