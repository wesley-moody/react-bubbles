import React, { useState, useEffect } from "react";
import axios from "axios";

import  axiosAuth  from '../components/axiosAuth';
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  useEffect (() => {
    axiosAuth()
      .get('/colors')
      .then(res => {
        console.log('results', res)
        setColorList(res.data)
      })
      .catch (err => {
        console.log("You're killing me smalls!", err)
      });
  }, []);
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
