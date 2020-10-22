import React from "react";
import { Link } from 'react-router-dom';

export default function(props) {
    // - background image: thumb_image_url
    // - logo:
    // - description: description
    // - id: id
  const { id, description, thumb_image_url, logo_url} = props.item;
  return (
    <div className="portfolio-item-wrapper">
      <img src={thumb_image_url} />
      <img src={logo_url} />
      <div>{description}</div>
      <Link to={`/portolio/${id}`}>Link</Link>
    </div>
  )
}