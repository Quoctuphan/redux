import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/esm/Button";

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteUserRedux, fecthAllUser } from "../action/actions";
import ClipLoader from "react-spinners/ClipLoader";
import ModalDelete from "./ModalDelete";

function TableListUser() {
    // const [listUser, setListUser] = useState()
    // // const handlerDelete = (user) => {
    // //     console.log(user)
    // }
    const [isShow, setIsShow ] = useState(false)
    const [userID, setUserID] = useState("")
    const [isDelete, setIsDelete] = useState(false)
    const listUser = useSelector((state) => (state.user.listUsers))
    const isLoading = useSelector((state) => (state.user.isLoading))
    const isError = useSelector((state) => (state.user.isError))
    const dispatch = useDispatch()
 
   useEffect ( () => {
      dispatch(fecthAllUser())
   }, []
)
   const handlerDelete = (user) => {
        setUserID(user.id)
        // dispatch(deleteUserRedux(user.id))
        // alert(`Deleted successfully user ${user.username} `)
     
     setIsShow(true)
   }
    console.log("isShow start",isShow)
   const handlerClose = () => {
        setIsShow(false)
}
// const handlerShow = () => {
//     setIsShow(true)
// }

const handlerOk = () => {
     dispatch(deleteUserRedux(userID))
     setIsShow(false)
}


    return ( 
        <Container>
            <hr />
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Email</th>
                <th>Username</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {isError ? 
                <div>Something wrongs, please try again....</div>
                :
                <>
                    {isLoading ? 
                    <tr> 
                        <td>         
                                    Loading 
                                    <ClipLoader
                                    color={"red"}
                                    size={15}
                                    data-testid="loader"
                                    />
                        </td>
                    </tr>
                  
                        : 
                    <>
                    {
                    listUser && listUser.length > 0 && listUser.map( (item, index)=>{
                      
                        return(
                        <tr key={`user-${index}`}>
                        <td>{index + 1}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                        <td>
                            <Button variant="danger"
                                    onClick={() => handlerDelete(item)}                          
                            >
                             Delete
                             </Button></td>

                        </tr>
                        )
                    })
                     }
                     {
                        <ModalDelete show={isShow} close={handlerClose} onClick={handlerOk} />
                     }
                    </>
                }
</>}

            </tbody>
            </Table>
        </Container>
     );
}

export default TableListUser;