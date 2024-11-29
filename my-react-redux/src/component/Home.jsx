import FormAddNew from "./FormAddNew";
import Header from "./Header";
import TableListUser from "./TableListUser";
function Home(props) {
    return ( 
            <div>
                <Header/>
                <FormAddNew/>
                <TableListUser/>
            </div>
     );
}

export default Home