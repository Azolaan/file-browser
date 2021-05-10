import React, {useState, useEffect} from 'react'
import _ from 'lodash'

import Breadcrumbs from './breadcrumbs'
import Content from './content'

function Main() {
  const [currLocation, setCurrLocation] = useState(['root'])
  const [content, setContent] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mypath = _.join(_.tail(currLocation), '-')
    fetch(`http://localhost:8080/path/${mypath}`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data)
        setLoading(false)
      })
  },[currLocation])

  const changeLocation = (location) => {
    setLoading(true)
    setCurrLocation(location)
  }

  return (
    <div className="Main" style={{margin: '10px'}}>
      <Breadcrumbs currLocation={currLocation} changeLocation={changeLocation} loading={loading}/>
      <Content content={content} currLocation={currLocation} changeLocation={changeLocation} loading={loading}/>
    </div>
  );
}

export default Main;
