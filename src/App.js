// import itemsData from './components/itemsData'
import Item from './components/item'
import Header from './components/header'
import InpBox from './components/inpuBox'
import { useEffect, useState } from 'react'
import Footer from './components/footer'
// import { isContentEditable } from '@testing-library/user-event/dist/utils'

const App = () => {

  const [note, setnote] = useState([""]);

  const fetchData = () => {
    fetch('http://localhost:5000/fetchAll').then((data) => {
      data.json().then((resp) => {
        // console.log(resp);
        setnote(resp);
      })
    })
  }
  useEffect(() => {
    fetchData();
  }, [])

  // console.log(note);

  const dataHandler = (data) => {
    // console.log(data);
    fetch('http://localhost:5000/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-Type': 'application/json'
      }
    }).then((res) => {
      // console.log(res);
      fetchData();
    })
  }

  // const [delData, setdelData] = useState(0);




  return (
    <div>
      <Header></Header>
      <InpBox dataReciever={dataHandler}></InpBox>
      {
        note.map((item, ind) =>
          <div>
            <Item key={ind + 1} id={item.Id} title={item.Title} content={item.Content} restart={fetchData}></Item>
          </div>
        )
      }
      <Footer></Footer>
    </div>
  )
}

export default App;