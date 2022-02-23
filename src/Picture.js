import React, { useState } from "react";

import timeStampToDate from "./timeStampToDate";

import CommentsForm from "./CommentsForm";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Picture = ({ id, url, removePicture }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const [picture, setPicture] = useState({ id: "", url: "", comments: [] });
  let url2 = `https://boiling-refuge-66454.herokuapp.com/images/${id}`; // картинка в модальном окне
  let comments = picture.comments;

  const loadModalData = () => {
    fetch(url2)
      .then((response) => {
        return response.json();
      })
      .then((picture) => {
        setPicture(picture);
      });
  };

  return (
    <div className="single-picture">
      <img src={url} alt="" onClick={() => handleShow(loadModalData())} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <img src={picture.url} alt="" />
                <CloseButton variant="black" onClick={handleClose} />
              </Col>
              <Col xs={6} md={4}>
                <div className="comments">
                  {comments.map((comment) => {
                    return (
                      <div className="comments" key={comment.id}>
                        <span className="comment-date">
                          {timeStampToDate(comment.date)}:{" "}
                        </span>
                        <br />
                        {comment.text}
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                <CommentsForm picId={id} />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Picture;
