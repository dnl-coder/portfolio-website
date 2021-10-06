import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+51923289190'>+51923289190</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:dalc.2506@gmail.com'>dalc.2506@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
      <SocialContainer>
        <SocialIcons href='https://github.com/dnl-coder' target='_blank'>
          <AiFillGithub size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/daniel-alexandro-lingan-caballero/' target='_blank'>
          <AiFillLinkedin size='3rem'/>
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/dnl_coder' target='_blank'>
          <AiFillInstagram size='3rem'/>
        </SocialIcons>
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
