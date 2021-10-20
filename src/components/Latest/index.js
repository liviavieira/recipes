import React from "react";
import * as S from "./styles";

export default function Latest({
  title,
  cake,
  pizza,
  shake,
  textcake,
  textpizza,
  textshake,
}) {

  const data = [
    {
      img: cake.url,
      alt: 'Image of a cake with a strawberry on top',
      text: textcake,
      style: true,
    },
    {
      img: pizza.url,
      alt: 'Image of a pizza',
      text: textpizza,
    },
    {
      img: shake.url,
      alt: 'Image of a smoothie cup',
      text: textshake,
    }
  ];

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>{title}</S.Title>

        <S.Content>
          {data.map((item, i) => (
            <S.Recipe key={i}>
              <S.RecipeImg
                src={item.img}
                alt={item.alt}
                style={{objectPosition: item.style === true && '0 74%'}}
              />
              <S.Description>
                <p>{item.text}</p>
              </S.Description>
            </S.Recipe>
          ))}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  )
}