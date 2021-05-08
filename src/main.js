import React, {useState, useEffect} from 'react'
import _ from 'lodash'

import Breadcrumbs from './breadcrumbs'
import Content from './content'

function Main() {
  const [currLocation, setCurrLocation] = useState(['root'])
  const [content, setContent] = useState({})

  useEffect(() => {
    let mypath = _.join(_.tail(currLocation), '-')
    fetch(`http://localhost:8080/path/${mypath}`)
      .then((res) => res.json())
      .then((data) => setContent(data))
  },[currLocation])

  const changeLocation = (location) => {
    setCurrLocation(location)
  }

  return (
    <div className="Main" style={{margin: '10px'}}>
      <Breadcrumbs currLocation={currLocation} changeLocation={changeLocation}/>
      <Content content={content} currLocation={currLocation} changeLocation={changeLocation}/>
    </div>
  );
}

export default Main;
