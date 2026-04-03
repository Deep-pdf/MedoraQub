import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HealthCategories from '@/components/HealthCategories';
import HowItWorks from '@/components/HowItWorks';
import CallToAction from '@/components/CallToAction';
import SubscriptionPlans from '@/components/SubscriptionPlans';
import Brands from '@/components/Brands';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HealthCategories />
        <HowItWorks />
        <CallToAction />
        <SubscriptionPlans />
        <Brands />
      </main>
      <Footer />
    </>
  );
}
