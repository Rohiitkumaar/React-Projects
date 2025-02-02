import {Container, Logo, LogoutBtn} from  '../index';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus =  useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems  = [
    {
      name : "Home",
      slug : "/",
      active: true
    },
    {
      name : "Login",
      slug : "/Login",
      active: !authStatus,
    },
    {
      name : "Signup",
      slug : "/signup",
      active: !authStatus,
    },
    {
      name : "All Posts",
      slur:  "/all-posts",
      active: authStatus,
      },
      {
        name:  "Add Post",
        slug: "/add-post",
        active: authStatus,
      },
  ]
  return (
    <header className='py-3 ahadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='flex'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul  className='flex ml-auto'>
            {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                className='inline-block px-6 py-2 hover:bg-blue-100 duration-200 rounded-full'
                onClick={() =>  navigate(item.slug)}
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn/>
            </li>
           )}
          </ul>

        </nav>
      </Container>
    </header>
  )
}

export default Header
