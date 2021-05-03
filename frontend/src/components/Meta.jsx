import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To YourShop",
  description: "We sell the best product online for low price",
  keyword: "electronics, buy electronic, cheap electronics",
};
export default Meta;
