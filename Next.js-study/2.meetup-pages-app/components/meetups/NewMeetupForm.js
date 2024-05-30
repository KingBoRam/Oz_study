import React, {useRef} from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import {useRouter} from "next/router";

const NewMeetupForm = () => {
  const router = useRouter();

  const titleInputRef = useRef();
  const imgInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefauit();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imgInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      images: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    handleAddMeetup(meetupData);
  };

  const handleAddMeetup = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {"Content-Type": "application/json"},
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">모임이름</label>
          <input type="text" required id="title" ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">모임사진</label>
          <input type="url" required id="image" ref={imgInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">주소</label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">설명</label>
          <textarea
            type="text"
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}>
            {" "}
          </textarea>
        </div>
        <div className={classes.actions}>
          <button>모임 생성하기</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
