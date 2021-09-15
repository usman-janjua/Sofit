import React from "react";
import "./styles.css";
import  MarkedInput  from "./components/makedInput";
import styled from "styled-components";
import Result from "./components/result";
import InformationViewer from "./components/informationViewer";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
const InfoContainer = styled.div`
width: 100%;
height: 100%;
margin-top: 100px;
`; 
export default function App() {
  return (
      <AppContainer>
        <Title>Usman Task</Title>
        <EditorContainer>
          <MarkedInput />
          <Result />
        </EditorContainer>
        <InfoContainer>
        <InformationViewer />
        </InfoContainer>
      </AppContainer>
  );
}