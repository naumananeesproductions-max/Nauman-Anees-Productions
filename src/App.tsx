import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { CinemaCurtains } from './components/CinemaCurtains';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { LegacyPage } from './pages/LegacyPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { MusicProductionPage } from './pages/MusicProductionPage';
import { VideoProductionPage } from './pages/VideoProductionPage';
import { VideoPostProductionPage } from './pages/VideoPostProductionPage';
import { TvCommercialsPage } from './pages/TvCommercialsPage';
import { TvDramasPage } from './pages/TvDramasPage';
import { FilmsPage } from './pages/FilmsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { TalentPage } from './pages/TalentPage';
import { EventsPage } from './pages/EventsPage';
import { ContactPage } from './pages/ContactPage';
import { BookProjectPage } from './pages/BookProjectPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

const RouteView: React.FC = () => {
  const { pathname } = useRouter();
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

  switch (cleanPath) {
    case '/':
      return <HomePage />;
    case '/about':
      return <AboutPage />;
    case '/legacy':
      return <LegacyPage />;
    case '/legacy/anees-bhatti':
      return <LegacyPage profileSlug="anees-bhatti" />;
    case '/legacy/nauman-anees':
      return <LegacyPage profileSlug="nauman-anees" />;
    case '/legacy/daniyal-nauman':
      return <LegacyPage profileSlug="daniyal-nauman" />;
    case '/services':
      return <ServicesOverviewPage />;
    case '/services/music-production':
      return <MusicProductionPage />;
    case '/services/video-production':
      return <VideoProductionPage />;
    case '/services/video-post-production':
      return <VideoPostProductionPage />;
    case '/services/tv-commercials':
      return <TvCommercialsPage />;
    case '/services/tv-dramas':
      return <TvDramasPage />;
    case '/services/films':
      return <FilmsPage />;
    case '/portfolio':
      return <PortfolioPage />;
    case '/talent':
      return <TalentPage />;
    case '/events':
      return <EventsPage />;
    case '/contact':
      return <ContactPage />;
    case '/book':
      return <BookProjectPage />;
    case '/privacy-policy':
      return <PrivacyPolicyPage />;
    default:
      return <NotFoundPage />;
  }
};

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-[#080607] text-[#F5EFE6]">
        <CinemaCurtains />
        <Header />
        <main className="flex-1">
          <RouteView />
        </main>
        <Footer />
      </div>
    </RouterProvider>
  );
}
