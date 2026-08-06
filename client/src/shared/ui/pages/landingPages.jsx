
import Banner from '../components/Banner';
import CTASection from '../components/CTASection';
import DashboardHero from '../components/DashboardHero';
import FeatureSection from '../components/FeatureSection';
import TopBar from '../components/TopBar';
import TrustedBy from '../components/TrustedBy';

function landingPages() {
    return (
        <div className="w-full bg-[var(--background)]">
            <TopBar />
            <Banner />
            <DashboardHero />
            <TrustedBy />
            <FeatureSection />
            <CTASection />
        </div>
    )
}

export default landingPages
