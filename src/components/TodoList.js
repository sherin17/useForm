import { Button, Container, TextField, Typography } from '@mui/material'
import useForm from './todo'
import './TodoList.css'
const TodoList = () => {

    //useState
     
    var [todo,settodos] = useForm({name:"",quantity:"",description:""})

    return (
        <div className='container'>
            <Container maxWidth="lg" align='center'>
                <h1>TODO LIST</h1>
                <form className='form-group'>
                    <TextField name='name' value={todo.name} label="TODO Name" variant="filled" fullWidth onChange={settodos}></TextField><br></br><br></br>
                    <TextField name='quantity' value={todo.quantity} label="Quantity" variant="filled" fullWidth onChange={ settodos}></TextField><br></br><br></br>
                    <TextField name='description' value={todo.description} label="Description" variant="filled" fullWidth onChange={settodos}></TextField><br></br><br></br>
                    <Button variant="contained" color='error' >ADD</Button>
                </form>
                    <Typography variant='h6'>Name{todo.name}</Typography>
                    <Typography variant='h6'>Quantity{todo.quantity}</Typography>
                    <Typography variant='h6'>Description{todo.description}</Typography>
            </Container>
        </div>
    )
}

export default TodoList

