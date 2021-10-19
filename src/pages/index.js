import React from "react";
import { graphql } from "gatsby";

import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import Nav from "../components/Nav";

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
      }
    }
  }
`;


const Index = ({ data }) => {
  const headers = data.recipedata.headers[0];
  const mains = data.recipedata.mains[0];
  const footers = data.recipedata.footers[0];
  console.log("header", headers)
  console.log("main", mains)
  console.log("footer", footers)

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
    </>
  );
}

export default Index