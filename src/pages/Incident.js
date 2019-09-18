import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Search } from "semantic-ui-react";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Stap from '../components/Stap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome } from '@fortawesome/free-solid-svg-icons'

const getusers = () => axios.get('https://jsonplaceholder.typicode.com/users');

let states = {
  users: {
    isLoaded: false,
    data: []
  }
}

const Index = () => {
  let [users, setUsers] = useState([])
  let [search, setsearch] = useState({ data: [] })
  let [value, setValue] = useState([])
  let [leval, setLeval] = useState(false)

  useEffect(() => {
    if (!states.users.isLoader) {
      getusers().then(res => {
        let data = res.data.map(res => {
          return {
            title: res.name
          }
        })
        setUsers(data)
        states.users.data = data;
        states.users.isLoaded = true;
      })
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const getdata = async () => await axios.get(`https://jsonplaceholder.typicode.com/users/?name=` + name)
    getdata().then(result => {
      let value = result.data.map(res => {
        return {
          name: res.name,
          email: res.email,
          phone: res.phone
        }
      })
      setValue(value)
      setLeval(true)
    })
  }

  const handleSubmit2 = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  
  // const resRender = () => (
  //   <div>
  //       <FontAwesomeIcon icon={faHome} size='1x' style={{ color: 'white' }} /> {handleChange}
  //   </div>
  // );

  let handleChange = (e) => {
    let value = e.target.value;
    if (value)
      setsearch({ data: users.filter(res => res.title.includes(value)) })
    else
      setsearch({ data: users })
  }

  return (
    <div className="container">
      <br/>
      <Stap status={leval}/>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <Search
            fluid
            icon="search"
            placeholder="Search..."
            onSearchChange={handleChange}
            results={search.data}
            // resultRenderer={resRender}
            name='name'
          />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>

      <br/>
      <div>
        {value.map((item, index) => (
          <div key={index}>
            <Form onSubmit={(e) => handleSubmit2(e)}>
              <Form.Group>
                <Form.Input
                  placeholder='Name'
                  name='name'
                  value={item.name}
                /><br/>
                <Form.Input
                  placeholder='email'
                  name='email'
                  value={item.email}
                /><br/>
                <Form.Input
                  placeholder='Phone'
                  name='phone'
                  value={item.phone}
                /><br/>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /><br/>
                <Form.Button content='Submit' />
              </Form.Group>
            </Form>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
