import Link from 'next/link';
import ThemeController from './ThemeController';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
              <ul className="p-2">
                <li>
                  <a>Audit</a>
                </li>
                <li>
                  <a>Tax</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <ThemeController />
        <Link href='/' className="btn btn-ghost text-xl">XYZ CPA</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href='/about'>About Us</Link>
          </li>
          <li>
            <details>
              <summary><Link href='/services'>Services</Link></summary>
              <ul className="p-2">
                <li>
                  <Link href='/services/#audit'>Audit</Link>
                </li>
                <li>
                  <Link href='/services/#tax'>Tax</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href='/login' className="btn">Staff Login</Link>
      </div>
    </div>
  );
}
