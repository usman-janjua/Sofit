import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";
import * as actionCreators from "../store/data/index";

const Container = styled.div`
  width: 50%;
  height: 200px;
  padding: 13px;
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const ResultArea = styled.div`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;


function Result({ markDownText, setHighlightedText }) {
  
  const selectedText = () => {
    window.getSelection().toString()
      ? setHighlightedText(window.getSelection().toString())
      : null;
  };

  return (
    <Container>
      <Title>Converted Text</Title>
      <ResultArea onMouseUpCapture={selectedText}>
        <ReactMarkdown source={markDownText} />
      </ResultArea>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    markDownText: state.data.markDownText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHighlightedText: (value) =>
      dispatch(actionCreators.highlightedTextChanged(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
