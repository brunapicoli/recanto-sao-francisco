import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  FooterContainer,
  FooterForm,
  FooterLogo,
  FooterMenu,
  FooterMenuList,
  FooterMenuTitle,
} from "./style";

export const Footer = () => {
  const menuItems = [
    {
      title: "Sobre",
      links: [
        {
          linkTitle: "Nossa história",
          link: "/#history",
          externalLink: false,
          email: false,
        },
        {
          linkTitle: "Quem somos",
          link: "/quem-somos",
          externalLink: false,
          email: false,
        },
        {
          linkTitle: "Nossa missão",
          link: "/#mission",
          externalLink: false,
          email: false,
        },
      ],
    },
    {
      title: "Como ajudar",
      links: [
        {
          linkTitle: "Adote",
          link: "/adoção",
          externalLink: false,
          email: false,
        },
        {
          linkTitle: "Doe",
          link: "https://docs.google.com/forms/d/e/1FAIpQLScpT925bG4ssxJRwf6R5jprubhn_GIBr1_A7-kIjOHG9hml-w/viewform",
          externalLink: true,
          email: false,
        },
        {
          linkTitle: "Voluntarie-se",
          link: "https://docs.google.com/forms/d/e/1FAIpQLScpT925bG4ssxJRwf6R5jprubhn_GIBr1_A7-kIjOHG9hml-w/viewform",
          externalLink: true,
          email: false,
        },
      ],
    },
    {
      title: "Contato",
      links: [
        {
          linkTitle: "Facebook",
          link: "https://www.facebook.com/AppaRecantoSaoFrancisco",
          externalLink: true,
          email: false,
        },
        {
          linkTitle: "Instagram",
          link: "https://www.instagram.com/recanto.saofrancisco/",
          externalLink: true,
          email: false,
        },
        {
          linkTitle: "E-mail",
          link: "recantosaofranciscopinhal@gmail.com",
          externalLink: false,
          email: true,
        },
      ],
    },
  ];

  const openForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScpT925bG4ssxJRwf6R5jprubhn_GIBr1_A7-kIjOHG9hml-w/viewform"
    );
  };

  return (
    <FooterContainer>
      <Link to="/" onClick={() => document.documentElement.scrollTo(0, 0)}>
        <FooterLogo
          src={require("../../../assets/images/logo.png")}
          alt="Logo do Recanto São Francisco"
        />
      </Link>
      <FooterMenu>
        {menuItems.map((menuItem) => (
          <FooterMenuList>
            <FooterMenuTitle>{menuItem.title}</FooterMenuTitle>
            {menuItem.links.map((item) =>
              item.externalLink ? (
                <Link to="#" onClick={() => window.open(item.link)}>
                  {item.linkTitle}
                </Link>
              ) : item.email ? (
                <Link
                  to="#"
                  onClick={(e) => {
                    window.location.href = `mailto:${item.link}`;
                    e.preventDefault();
                  }}
                >
                  {item.linkTitle}
                </Link>
              ) : (
                <HashLink smooth to={item.link}>
                  {item.linkTitle}
                </HashLink>
              )
            )}
          </FooterMenuList>
        ))}
      </FooterMenu>
      <FooterForm>
        Preencha nosso{" "}
        <Link to="#" onClick={openForm}>
          formulário
        </Link>{" "}
        de ajuda
      </FooterForm>
    </FooterContainer>
  );
};
