export default function ContactForm() {
  return (
    <form className="contact-form">
      <input type="email" placeholder="Seu email" required />
      <textarea placeholder="Sua mensagem" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  )
}