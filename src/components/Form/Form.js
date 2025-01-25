import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setParas,
  setIsHTML,
  fetchTexts,
  textsParasSelector,
  textsIsHTMLSelector,
} from "../../redux/texts/textsSlice";

function Form() {
  const dispatch = useDispatch();
  const paras = useSelector(textsParasSelector);
  const isHTML = useSelector(textsIsHTMLSelector);

  const handleParasChange = (e) => {
    dispatch(setParas(Number(e.target.value)));
  };

  const handleHTMLChange = (e) => {
    dispatch(setIsHTML(e.target.value));
    dispatch(fetchTexts({ paras, isHTML: e.target.value }));
  };

  const handleFetchData = (e) => {
    e.preventDefault();
    dispatch(fetchTexts({ paras, isHTML }));
  };

  return (
    <form onSubmit={handleFetchData}>
      <div>
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input
          type="number"
          id="paragraphs"
          name="paragraphs"
          min="1"
          max="10"
          value={paras}
          onChange={handleParasChange}
        />
      </div>

      <div>
        <label htmlFor="include-html">Include HTML:</label>
        <select
          id="include-html"
          name="include-html"
          value={isHTML}
          onChange={handleHTMLChange}
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
