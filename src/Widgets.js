import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleleft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )


  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Women Empowerment News</h2>
        <InfoIcon/>
      </div>
      {newsArticle("Women Recycled 7.5 Lakh Empty Used Milk Bags","Top News - 2026 Readers")}
      {newsArticle("Coronavirus: India Updates","Top News - 1067 Readers")}
      {newsArticle("Droupadi Murmu Elected 15th President","Politics - 686 Readers")}
      {newsArticle("Tesla Hits New Highs","Cars & Auto - 455 Readers")}
    </div>
  )
}

export default Widgets
