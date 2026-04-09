import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 32px 16px;
  text-align: center;
  margin-top: 64px;
`

const FooterContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

const SocialLinks = styled.div`
  margin: 16px 0;

  a {
    color: #e74c3c;
    margin: 0 8px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <h3>eFood</h3>
        <SocialLinks>
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#twitter">Twitter</a>
        </SocialLinks>
        <p>&copy; 2024 eFood. Todos os direitos reservados.</p>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
