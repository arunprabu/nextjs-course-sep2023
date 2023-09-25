import MenuList from "../MenuList/MenuList";

// Functional Component with Anonymous Function
const Footer = function() {
  const copyrightYear = 2023;
  
  // must return JSX
  return (
    <footer className="text-center">
      <hr />
      <MenuList />
      <p>Copyright {copyrightYear} | Arun</p>
    </footer>
  );
}

export default Footer;
