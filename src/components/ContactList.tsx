export default function ContactList(){
  return (
    <div className="contact-list">
      <div className='contact-item'>
        <img alt="email" src="/svg/email.svg" width={52} height={52}></img>
        <a rel="noreferrer" href="mailto:ryan.costasousa@gmail.com" target='_blank'>ryan.costasousa01@gmail.com</a>
      </div>
      <div className='contact-item'>
        <img src="/svg/github.svg" alt="github" width={52} height={52}></img>
        <a href="https://github.com/vinzent01" target='_blank' rel="noreferrer">github.com/vinzent01</a>
      </div>
      <div className="contact-item">
        <img src="/svg/phone.svg" alt="phone"></img>
        <a href="tel:+5511994336946">+55 11 994336946</a>
      </div>
    </div>
  )
}