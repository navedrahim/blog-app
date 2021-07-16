import Nav from "../Nav/Nav.jsx"
import Footer from "../Footer/Footer.jsx"

function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
