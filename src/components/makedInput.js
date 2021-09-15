import React, {useEffect} from "react";
import styled from "styled-components";
// import editorContext from "../editorContext";
import { connect } from "react-redux";
import * as actionCreators  from "../store/data/index";
const Container = styled.div`
  width: 50%;
  height: 200px;
  padding: 13px;
  border-right: 1.5px solid rgba(15, 15, 15, 0.4);
  font-family: "Lato", sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1em;
  padding: 8px 0;
  border-bottom: 1px solid rgba(15, 15, 15, 0.3);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 17px;
`;

function MarkedInput(props) {
  const onInputChange = e => {
    props.setText(e.target.value);
};


useEffect(() => {
  if(!props.markDownText) {
      return
  }  
}, [props.markDownText]);

  return (
    <Container>
      <Title>Markdown Text</Title>
      <TextArea value={props.markDownText} onChange={onInputChange} />
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
        setText: (value) => dispatch(actionCreators.addTextSuccess(value))
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(MarkedInput);