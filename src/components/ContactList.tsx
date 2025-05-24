export default function ContactList(){
  return (
    <div className="contact-list">
      <div className='contact-item'>
        <img src="/svg/email.svg" width={52} height={52}></img>
        <a href="mailto:ryan.costasousa@gmail.com" target='_blank'>ryan.costasousa01@gmail.com</a>
      </div>
      <div className='contact-item'>
        <img src="/svg/github.svg" width={52} height={52}></img>
        <a href="https://github.com/vinzent01" target='_blank'>github.com/vinzent01</a>
      </div>
    </div>
  )
}