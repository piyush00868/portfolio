import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PageContainer } from '@/components/layout/PageContainer';
import { About } from '@/components/sections/About';
import { Blog } from '@/components/sections/Blog';
import { CallToAction } from '@/components/sections/CallToAction';
import { ContactLinks } from '@/components/sections/ContactLinks';
import { Education } from '@/components/sections/Education';
import { GitHubActivity } from '@/components/sections/GitHubActivity';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Quote } from '@/components/sections/Quote';
import { TechStack } from '@/components/sections/TechStack';
import { Separator } from '@/components/ui/Separator';

// Static page, regenerated at most hourly so the GitHub graph stays fresh.
export const revalidate = 3600;

export default function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <Hero />
      <Separator />
      <About />
      <Separator />
      <ContactLinks />
      <Separator />
      <Projects />
      <Separator />
      <Education />
      <Separator />
      <TechStack />
      <Separator />
      <Blog />
      <Separator />
      <GitHubActivity />
      <Separator />
      <CallToAction />
      <Separator />
      <Quote />
      <Separator />
      <Footer />
    </PageContainer>
  );
}
