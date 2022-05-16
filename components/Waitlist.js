import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Form,
  Input,
  FormGroup,
  Label,
  Toast,
  ToastBody,
  FormText,
} from "reactstrap";
import styles from "../styles/Waitlist.module.css";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios";

const Waitlist = (props) => {
  const [formData, setFormData] = useState({
    Email: "",
  });
  const [loading, setLoading] = useState(false);
  const [activeToast, setActiveToast] = useState(false);
  const [activeBadToast, setActiveBadToast] = useState(false);
  const [error, setError] = useState(false);
  const [superError, setSuperError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const validateEmail = (e) => {
    console.log(e);
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(e)) {
      return true;
    } else {
      setError(true);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateEmail(formData.Email)) {
      setError(false);
      setSuperError(false);
      axios
        .post(
          "https://api.moosend.com/v3/subscribers/0c0a78b7-095b-47f0-8805-41295a6de041/subscribe.json?apikey=9a91dbc2-f055-41a9-b059-1e9185717326",
          formData
        )
        .then((res) => {
          setLoading(false);
          setActiveToast(true);
          setTimeout(() => {
            setActiveToast(false);
          }, 5000);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
          setActiveBadToast(true);
          setTimeout(() => {
            setActiveBadToast(false);
          }, 5000);
        });
    } else {
      if (error) {
        setError(false);
        setSuperError(true);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    }
  };

  return (
    <div className={styles.modal}>
      <Form noValidate onSubmit={handleSubmit} id="subscribeForm">
        <Modal {...props} toggle={props.onHide} centered>
          <ModalHeader
            className={styles.modalHeader}
            charCode="x"
            toggle={props.onHide}
          >
            Join Waitlist
          </ModalHeader>
          <ModalBody>
            <p>
              We'd love to get everyone an eluno one day. Right now, we are
              limited. Join our waitlist to get the best chance to get your
              eluno.
            </p>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="Email"
                id="email"
                placeholder="steph@bayc.com"
                onChange={handleChange}
                className={styles.input}
              />
              {error && !superError && (
                <FormText>Please enter a valid email.</FormText>
              )}
              {superError && (
                <FormText>
                  <b>Another error. You got this 🥳</b>
                </FormText>
              )}
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            {loading && <div className="dot-elastic"></div>}
            <Button
              className={styles.submitButton}
              type="submit"
              form="subscribeForm"
              disabled={loading}
            >
              Submit
            </Button>
          </ModalFooter>
          <Toast isOpen={activeToast} fade>
            <ToastBody>Form submitted. Thank you 🚀</ToastBody>
          </Toast>
          <Toast isOpen={activeBadToast} fade className={styles.danger}>
            <ToastBody>Error. Please try again.</ToastBody>
          </Toast>
        </Modal>
      </Form>
    </div>
  );
};

export default Waitlist;
