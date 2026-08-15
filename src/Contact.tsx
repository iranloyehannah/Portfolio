import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

const Contact=()=>{
  const [formData,setFormData]=useState({name:"",email:"",message:""}); const [status,setStatus]=useState("");
  const handleChange=(e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>setFormData(c=>({...c,[e.target.name]:e.target.value}));
  const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault(); const subject=encodeURIComponent(`Portfolio enquiry from ${formData.name}`); const body=encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`); setStatus("Opening your email app…"); window.location.href=`mailto:iranloye8.hannah@gmail.com?subject=${subject}&body=${body}`;};
  return <section id="contact" className="contact-stage">
    <div className="contact-display"><p className="micro-label">04 / Contact</p><h2>Let’s make<br/><em>something clear.</em></h2><a className="contact-email" href="mailto:iranloye8.hannah@gmail.com">iranloye8.hannah@gmail.com <span>↗</span></a><div className="contact-social"><a href="https://www.linkedin.com/in/iranloye-hannah/" target="_blank" rel="noreferrer"><LinkedInIcon sx={{fontSize:18}}/>LinkedIn</a><a href="https://github.com/iranloyehannah" target="_blank" rel="noreferrer"><GitHubIcon sx={{fontSize:18}}/>GitHub</a></div></div>
    <form className="contact-form-new" onSubmit={handleSubmit}>
      <p>Tell me what you’re building, hiring for, or trying to improve.</p>
      <label><span>Name</span><input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required/></label>
      <label><span>Email</span><input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@company.com" required/></label>
      <label><span>Message</span><textarea name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="A short brief, role, idea, or hello…" required/></label>
      <div className="contact-form-footer"><button type="submit">Send enquiry <span>↗</span></button><small aria-live="polite">{status}</small></div>
    </form>
  </section>;
};
export default Contact;
