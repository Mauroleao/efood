import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: var(--coral-light);
  color: var(--coral);
  padding: 48px 16px;
  text-align: center;
  margin-top: 64px;
`

const FooterContent = styled.div`
  max-width: 1144px;
  margin: 0 auto;
`

const Logo = styled.h3`
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 16px;
  color: var(--coral);
`

const SocialLinks = styled.div`
  margin: 16px 0 24px 0;
  display: flex;
  justify-content: center;
  gap: 16px;

  a {
    color: var(--coral);
    text-decoration: none;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`

const Copyright = styled.p`
  font-size: 12px;
  color: var(--text-light);
`

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>eFood</Logo>
        <SocialLinks>
          <a href="#facebook" title="Facebook">📘</a>
          <a href="#instagram" title="Instagram">📷</a>
          <a href="#twitter" title="Twitter">𝕏</a>
        </SocialLinks>
        <Copyright>&copy; 2024 eFood. Todos os direitos reservados.</Copyright>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
