import { Button } from '@material-ui/core';
import React,{useEffect, useState} from 'react';
import { connect } from "react-redux";
import Spinner from './UI/Spinner/Spinner';
import * as actionCreators from "../store/data/index";

function InformationViewer({highlightedText, setHighlightedText, setMarkDownText}) {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
  
    const url =
      `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${highlightedText}`;
      const extractAPIContents = json => {
       if (!json.query) {
           return
       }   
      const { pages } = json.query;
      return Object.keys(pages).map(id => pages[id].extract);
    };
    const resetHandler = () => {
        setMarkDownText("");
        setHighlightedText("");
        setContents([])
    }
    const getContents = async () => {
      let resp;
      let contents = [];
      setLoading(true);
      try {
        resp = await fetch(url);
        const json = await resp.json();
        contents = extractAPIContents(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
      setContents(contents);
    };
  
    useEffect(() => {
      if(!highlightedText) {
          return
      }  
      getContents();
    }, [highlightedText]);
  
    if (loading) {
        return <Spinner />;
    }
    if (error) {
        return "An error occurred"; 
    }   
    return (
        <div>
      <h1>Details</h1>
      <Button onClick={resetHandler} variant="contained" color="secondary" disabled={(highlightedText === "") ? true : false}>Reset</Button>
      {!highlightedText && <p>No Results</p>}
      {contents ? contents.map((content, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: content }} />
      )): null}
    </div>

    )
}

const mapStateToProps = (state) => {
    return {
      highlightedText: state.data.highlightedText,
    };
  };
const mapDispatchToProps = (dispatch) => {
  return {
    setHighlightedText: (value) => dispatch(actionCreators.highlightedTextChanged(value)),
    setMarkDownText: (value) => dispatch(actionCreators.addTextSuccess(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InformationViewer);