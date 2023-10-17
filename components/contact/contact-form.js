import { useState, useEffect } from "react";

import Notification from "../ui/notification";
import classes from "./contact-form.module.css";
  //发送DB数据
  // async function sendContactData(contactDetails){
  //   const response = await fetch('/api/contact',{
  //     method:'POST',
  //     body:JSON.stringify(contactDetails),
  //     headers:{
  //       'Content-Type':'application/json',
  //     },
  //   });

  //   const data = await response.json();
  //  if(!response.ok){
  //   throw new Error(data.message || 'Something went wrong!');
  //  }
  // }


  async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(contactDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  }
function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  //优先加载一次数据状态
  useEffect(()=>{
    if(requestStatus==='success'||requestStatus==='error'){
      const timer = setTimeout(()=>{
        setRequestStatus(null);
        setRequestError(null);
      },3000);
      return ()=> clearTimeout(timer);
    }
  },[requestStatus]);


  //表单处理
  function sendMessageHandler(event) {
    event.preventDefault();
  
    setRequestStatus('pending');
    
    
    try{
      await sendContactData({
        email:enteredEmail,
        name:enteredName,
        message: enteredMessage,
      });
      //发送数据后,要重置状态信息
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    }catch(error){
      setRequestError(error.message);
      setRequestStatus('error');
    }
    
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you?</h1>
      <form onSubmit={sendMessageHandler}>
        <div>
          <label htmlFor="email">you email</label>
          <input
            type="email"
            id="email"
            required
            value={enteredEmail}
            onChange={(event) => setEnteredEmail(event.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}
export default ContactForm;
