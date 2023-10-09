import Footer from "./footer";
import Header from "./header";

export default function Layout(props: any) {
  return (
    <>
      <Header></Header>
      
      <main>{props.children}</main>

      <Footer></Footer>
    </>
  );
}