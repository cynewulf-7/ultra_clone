import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Button } from '../../globalStyles';
import { 
  FooterContainer,
  FooterSubscription,
  FooterSubheading,
  FooterSubtext,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterSubscription>
            <FooterSubheading>
                Join our exclusive membership to recieve the latest news and trends.
            </FooterSubheading>
            <FooterSubtext>
                You can unsubscribe at any time.
            </FooterSubtext>
            <Form>
              <FormInput name="email" type="email" placeholder="Your Email" />
                <Button fontBig>Subscribe</Button>
            </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Contact Us</FooterLinksTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Videos</FooterLinksTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinksTitle>Social Media</FooterLinksTitle>
              <FooterLink to='/sign-up'>How It Works</FooterLink>
              <FooterLink to='/'>Testimonials</FooterLink>
              <FooterLink to='/'>Careers</FooterLink>
              <FooterLink to='/'>Investors</FooterLink>
              <FooterLink to='/'>Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              <SocialIcon/>
              ULTRA
            </SocialLogo>
            <WebsiteRights>ULTRA &copy; 2022</WebsiteRights>
            <SocialIcons>
             <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
              <FaFacebook />
             </SocialIconLink>
             <SocialIconLink href='/' target='_blank' arial-label='Instagram'>
              <FaInstagram />
             </SocialIconLink>
             <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
              <FaTwitter />
             </SocialIconLink>
             <SocialIconLink href='/' target='_blank' arial-label='Youtube'>
              <FaYoutube />
             </SocialIconLink>
             <SocialIconLink href='/' target='_blank' arial-label='Linkedin'>
              <FaLinkedin />
             </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
  )
}

export default Footer;