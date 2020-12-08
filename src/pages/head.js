import React from 'react'
import MetaTags from 'react-meta-tags'

// This is where the meta data is stored
function Head() {
  return (
    <>
      <MetaTags>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />

        <title>Spicyo</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
      </MetaTags>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    </>
  )
}

export default Head
