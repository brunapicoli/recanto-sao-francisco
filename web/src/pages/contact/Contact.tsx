import { Title } from 'components/atoms/title/Title';
import { NavbarFooter } from '../../templates/NavbarFooter';
import FacebookIcon from 'assets/icons/facebook.png';
import InstagramIcon from 'assets/icons/instagram.png';
import {
  ContactBlock,
  ContactContainer,
  ContactContent,
  ContactLine,
  ContactLink,
  ContactMap,
  ContactSocialMedia,
  ContactSubtitle,
  ContactText,
  ContactTextContainer,
} from './style';

export const Contact = () => {
  return (
    <NavbarFooter bgBlueNavbar>
      <ContactContainer>
        <ContactContent>
          <div>
            <Title title="CONTATO" />
            <ContactTextContainer>
              <ContactText>
                Entre em contato conosco para fazer uma doação, adotar um peludo, participar de algum de nossos projetos
                ou conhecer nosso abrigo.
              </ContactText>
              <ContactText>
                Por recebermos centenas de pedidos de ajuda diariamente, infelizmente não temos como atender a todos e
                por isso, filtramos os casos mais graves e viáveis.
              </ContactText>
              <ContactText>
                Para denunciar crimes de maus-tratos ou qualquer outro previsto na Lei 9.605/98, Artigo 32, ligue para
                181.
              </ContactText>
            </ContactTextContainer>
          </div>
          <ContactBlock>
            <ContactSubtitle>Envie-nos um e-mail</ContactSubtitle>
            <ContactLink href="mailto:recantosaofranciscopinhal@gmail.com">
              <ContactText>recantosaofranciscopinhal@gmail.com</ContactText>
            </ContactLink>
            <ContactLine />
            <ContactSubtitle>Recanto São Francisco</ContactSubtitle>
            <ContactText>Rodovia SP-342, Km 98, Distrito Industrial Irmãos Del Guerra</ContactText>
            <ContactText>Espírito Santo do Pinhal - SP</ContactText>
            <ContactSocialMedia>
              <ContactLink href="https://www.facebook.com/AppaRecantoSaoFrancisco" target="_blank">
                <img src={FacebookIcon} alt="Facebook" />
              </ContactLink>
              <ContactLink href="https://www.instagram.com/recanto.saofrancisco/" target="_blank">
                <img src={InstagramIcon} alt="Instagram" />
              </ContactLink>
            </ContactSocialMedia>
          </ContactBlock>
        </ContactContent>
      </ContactContainer>
      <ContactMap
        title="Localização"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.1205386480933!2d-46.78325262412027!3d-22.197524979760594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9ad028ebc1f5d%3A0xdd0431f206389fe9!2sRecanto%20S%C3%A3o%20Francisco!5e0!3m2!1spt-BR!2sbr!4v1705593325757!5m2!1spt-BR!2sbr"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </NavbarFooter>
  );
};
