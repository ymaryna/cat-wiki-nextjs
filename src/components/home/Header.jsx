import { useEffect, useState } from 'react';
import Link from "next/link";
import {getCats} from '@/services/catsApi'
import { logoHeader, logoHeaderMobile } from '@/assets'
import Image from 'next/image';
import { Modal, Form, InputGroup } from "react-bootstrap";
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header() {
    const [keyword, setKeyword] = useState()
    const [resultShow, setResultShow] = useState(false);
    const [cats, setCats] = useState()
    const [show, setShow] = useState(false);
    
    const handleChange = (event) => {
      const { value } = event.target
  
      if(value.length >= 3) {
        setKeyword(value)
        setResultShow(true)
  
      } else if(value.length <= 3) {
        setResultShow(false)
      }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        getCats(keyword)
        .then(cats => {
          setCats(cats)
        })
      }, 500)

      return () => clearTimeout(timer)
    },[keyword])

    return (
      <header className="section">
        <div className="container text">
            <Image className="logo-desktop" src={logoHeader} alt="logo" />
            <Image className="logo-mobile" src={logoHeaderMobile} alt="logo mobile" />
            <h4>Get to know more about your cat breed</h4>
            <InputGroup className="large" size="lg">
                <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Enter your breed"
                onChange={ handleChange }
                />
                <InputGroup.Text id="inputGroup-sizing-lg"><AiOutlineSearch /> </InputGroup.Text>
            </InputGroup>
            {resultShow && !show ?
                <div className="results d-flex flex-column">
                    {cats.map((cat, index) =>
                        <Link className="result" href={`/cats/${cat.name}`} key={index} >{cat.name}</Link>
                    )}
                </div> 
            : 
            ''}
            <InputGroup className="small" size="md">
                <Form.Control
                  aria-label="small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Search"
                  onClick={ handleShow }
                />
                <InputGroup.Text id="inputGroup-sizing-lg"><AiOutlineSearch /> </InputGroup.Text>
            </InputGroup>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
              <InputGroup className="large-modal" size="lg">
                  <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Enter your breed"
                  onChange={ handleChange }
                  />
                  <InputGroup.Text id="inputGroup-sizing-lg"><AiOutlineSearch /> </InputGroup.Text>
              </InputGroup>
          </Modal.Body>
          {resultShow ?
                <div className="results d-flex flex-column mobile">
                    {cats.map((cat, index) =>
                        <Link className="result" href={`/cats/${cat.name}`} key={index} >{cat.name}</Link>
                    )}
                </div> 
            : 
            ''}
        </Modal>
      </header>
    );
}


