import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, i'm Daniel and <br />
        welcome to <br />
        my personal portfolio
      </SectionTitle>
      <SectionText>
        A Javascript enthusiast, father of a beautiful girl, and eternal learner.
      </SectionText>
      <Button onClick={() => window.open('https://www.linkedin.com/in/daniel-alexandro-lingan-caballero/', '_blank')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;