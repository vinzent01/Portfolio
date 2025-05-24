export default function Footer(){ 
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
        <a href="https://github.com/vinzent01/Portfolio" target='_blank'>
          <img width={40} height={40} src="/svg/github.svg"/>
        </a>
        <p>Vinzent &copy; {year}</p>
    </footer>
  )
}