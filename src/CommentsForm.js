import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// форма для комментариев с функционалом
export default function CommentsForm({ picId }) {
  const [comment, setComment] = useState({ name: "", text: "" });

  const handleChange = (e) => {
    // при изменении
    const targetName = e.target.name; // ловим где изменилось
    const targetValue = e.target.value; // ловим что изменилось
    setComment({ ...comment, [targetName]: targetValue }); // фиксируем изменения в объект
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.name && comment.text) { // если заполнены оба поля
      try {
        let response = await fetch(
          `https://boiling-refuge-66454.herokuapp.com/images/${picId}/comments`, // отправляем по адресу
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ // эти данные
              name: comment.name,
              comment: comment.text,
            }),
          }
        );
        setComment({ name: "", text: "" });
        console.log(
          "%cRESPONSE STATUS ==>>> " + response.status,
          "font-weight: bold; color:red; font-family:monospace; font-size: 20px"
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Fields not filled!");
    }
  };

  return (
    <Form className="form-comment">
      <Form.Group className="mb-3" controlId="userName">
        <Form.Control
          type="text"
          placeholder="Your name"
          name="name"
          value={comment.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formComment">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          name="text"
          value={comment.text}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Leave a comment
        </Button>
      </div>
    </Form>
  );
}
// форма для комментариев с функционалом
