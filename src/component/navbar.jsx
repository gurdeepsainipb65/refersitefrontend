import { Link } from "react-router-dom";
import 
export default function Navbar() {
  return (
    <div>
      <nav className="w-full flex justify-between items-center font-bold p-4 h-20 shadow-lg">
        <div className="flex gap-8 items-center">
          <Link className="lg:text-xl font-bold">ACCREDIAN</Link>
          <Link><button className="bg-blue-600 text-white  w-24 h-8 text-center border rounded-2xl pointer-events-none ">COURSES</button></Link>
          <Link><button  className="bg-blue-600  lg:hidden text-white w-24 h-8 text-center border rounded-2xl pointer-events-none ">LOGIN</button></Link>
        </div>

        <div className="hidden lg:flex gap-8 items-center">
          <Link onClick={}>REFER EARN</Link>
          <Link>ABOUT US</Link>
          <Link>TRY FREE</Link>
          <Link><button  className="bg-blue-600 text-white w-24 h-8 text-center border rounded-2xl pointer-events-none ">LOGIN</button></Link>
        </div>
      </nav>
    </div>
  );
}
