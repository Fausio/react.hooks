

function NavBar() {


    const mystyle = {

        nav: {
            'background-color': 'black',
            'color': 'white',

            'margin': '10px',
          

            'padding': '15px',

            'border': '2px solid #4CAF50'
        },

        btn: {
           
            'padding': '8px',
            'margin-right': '10px',  
        }
    }

    return (
        <>
            <div style={mystyle.nav}>
          
                <input type="button"  style={mystyle.btn} value={"Menu 1"}  /> 
                <input type="button"  style={mystyle.btn} value={"Menu 2"}  /> 
                <input type="button"  style={mystyle.btn} value={"Menu 3"}  /> 
         
         
         
            </div>
        </>
    );
}

export default NavBar;
