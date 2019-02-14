import { Container } from "unstated";

export default class AuthContainer extends Container{
    state={
        oib: '1234',
        password: '1234',
        loading: false,
        error: null
    }
    login = async (data) =>{
            
            this.setState({loading: true})
            if(data.oib!==this.state.oib) await this.setState({error: 'Krivi podaci'})
            if(data.password!==this.state.password) await this.setState({error: 'Krivi podaci'})

            else {
                await this.setState({error: null})
            }
            console.log(this.state.error)
            

            
     

    }
    
}