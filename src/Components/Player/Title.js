import React from "react";
import styled from "styled-components";

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: #616161;
  padding-left: 10px;
`;
const Name = styled.p`
  font-size: 16px;
  margin: 0;
`;
const Artist = styled.p`
  font-size: 13px;
  font-weight: 400;
  margin: 0;
  padding-top: 5px;
`;

const Title = ({ name, artist, album }) => (
  <TitleBox>
    <Name>{name}</Name>
    <Artist>{`${artist} - ${album}`}</Artist>
  </TitleBox>
);

export default Title;
