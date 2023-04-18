import React from 'react'
import NewsList from '../../Components/NewsList';

const Home = () => {

  return (
    <div className="container">
      <h1>Wilkommen auf der News Seite gebaut mit React. Dies kostete mich gefühlt mein halbes Leben. Wenn ich auf das Bild in den jeweiligen karten Klickt kommt ihr zur news website woher die news stammt</h1>

      <h1 className="text-center" style={{ paddingTop: "10%" }}>
      </h1>
      <NewsList />

    </div>
  )
}
export default Home;