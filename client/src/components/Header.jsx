import {Button, Navbar, TextInput} from 'flowbite-react';
import {Link,useLocation} from "react-router-dom";
import{AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from "react-icons/fa"

export default function Header() {
  const path =useLocation().pathname;
  return (
    <Navbar className=''>
      <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl"> <span>our</span>Blog</Link>
     <form>
      <TextInput
        type='text'
        placeholder='...Search'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'

      /><Button className='lg:hidden w-12 h-10'><AiOutlineSearch/></Button>
     </form>
     <div className='flex gap-2 md:order-2'>
      <Button className=' w-12 h-10 hidden sm:inline ' color='yellow' pill >
        <FaMoon/>
      </Button>
      <Link to='/sign-in'>
        <Button gradientDuoTone="cyanToBlue" outline> Sign-in</Button>
      </Link>
      <Navbar.Toggle/>
     </div>
     <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    )
}
