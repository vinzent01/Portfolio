import { useState } from "react";

export default function ContactForm() {
  const [body, setBody] = useState('');
  
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const mailtoLink = `mailto:ryan.costasousa01@gmail.com?subject=${encodeURIComponent("message")}&body=${encodeURIComponent(body)}`;    
      window.location.href = mailtoLink;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <textarea placeholder="Sua mensagem" onChange={(e) => setBody(e.target.value)} required></textarea>
      <button type="submit">Enviar</button>
    </form>
  )
}