
export default function Navbar({cart}) {
    
    const navLinkStyle={
        color:'white',
        textDecoration:'none'}
    const navStyle={
        backgroundColor:'black',height:'50px',display:'flex',justifyContent:'space-evenly',alignItems:'center'
    }
    return (   
        <nav style={navStyle}>
            <a href="#" style={navLinkStyle}>Home</a>
            <a href="#" style={navLinkStyle}>About</a>
            <a href="#" style={navLinkStyle}>Products</a>
            <a href="#" style={navLinkStyle}>Cart: {cart.length} item(s)</a>
        </nav>
            
            )
}