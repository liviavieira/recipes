import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "gatsby-plugin-react-helmet";
import styled from "styled-components";

import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Latest from "../components/Latest";
import About from "../components/About";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Main = styled.main``;

export const query = graphql`
  query {
    recipedata {
      headers {
        about
        subscribe
        recipes
        logo {
          url
        }
        background {
          url
        }
        title
      }
      mains {
        latesttitle
        textcake
        textpizza
        textshake
        about
        lorem
        imgcake {
          url
        }
        imgpizza {
          url
        }
        imgshake {
          url
        }
        imgspoon {
          url
        }
        email
        submit
        signup
        subscribe
      }
      footers {
        about
        subscribe
        recipes
        pinterest {
          url
        }
        instagram {
          url
        }
        facebook {
          url
        }
        twitter {
          url
        }
        info
      }
    }
  }
`;

const Index = ({ data }) => {
  const headers = data.recipedata.headers[0];
  const mains = data.recipedata.mains[0];
  const footers = data.recipedata.footers[0];

  return (
    <>
      <GlobalStyles />

      <Header
        title={headers.title}
        bg={headers.background}
      >
        <Nav
          logo={headers.logo}
          about={headers.about}
          recipes={headers.recipes}
          subscribe={headers.subscribe}
        />
      </Header>

      <Main>
        <Latest
          title={mains.latesttitle}
          textcake={mains.textcake}
          textpizza={mains.textpizza}
          textshake={mains.textshake}
          cake={mains.imgcake}
          pizza={mains.imgpizza}
          shake={mains.imgshake}
        />
        <About
          spoon={mains.imgspoon}
          title={mains.about}
          about={mains.lorem}
        />
        <Subscribe
          title={mains.subscribe}
          signup={mains.signup}
          email={mains.email}
          submit={mains.submit}
        />
      </Main>
      
      <Footer
        instagram={footers.instagram}
        twitter={footers.twitter}
        facebook={footers.facebook}
        pinterest={footers.pinterest}
        about={footers.about}
        recipes={footers.recipes}
        subscribe={footers.subscribe}
        reference={footers.info}
      />
    </>
  );
}

export default Index