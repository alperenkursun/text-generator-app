// react
import React, { useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTexts,
  textsSelector,
  textsStatusSelector,
  textsErrorSelector,
  textsParasSelector,
  textsIsHTMLSelector,
} from "../../redux/texts/textsSlice";

function Content() {
  const dispatch = useDispatch();
  const texts = useSelector(textsSelector);
  const status = useSelector(textsStatusSelector);
  const error = useSelector(textsErrorSelector);
  const paras = useSelector(textsParasSelector);
  const isHTML = useSelector(textsIsHTMLSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTexts({ paras, isHTML }));
    }
  }, [dispatch, status, paras, isHTML]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return <main>{texts}</main>;
}

export default Content;
