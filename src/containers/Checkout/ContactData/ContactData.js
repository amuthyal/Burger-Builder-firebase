import React, {Component} from 'react';
import myClasses from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name:'',
        email:'',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
       // this is for saving it in the firebase
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: 'akhila muthyala',
                address:{
                    street: 'scottsdale',
                    zipCode: '85281',
                    country: 'USA'
                },
                email: 'test@test.com'
            }, deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
        })
        .catch(error =>{
            this.setState({loading: false});
        });
    }

    render () {
        let form  = (
            <form> 
                    <input className={myClasses.Input} type="text" name= "name" placeholder = "Your Name"/>
                    <input className={myClasses.Input} type="email" name= "email" placeholder = " Email"/>
                    <input className={myClasses.Input} type="text" name= "street" placeholder = " street"/>
                    <input className={myClasses.Input} type="text" name= "postalCode" placeholder = "Your postal code"/>
                    <Button btnType= "Success" clicked = {this.orderHandler}> ORDER </Button>
                </form>
        );
        if(this.state.loading){
            form = <Spinner/>;
        }
        return (
            <div className= {myClasses.ContactData}> 
                <h4> Enter your contact data</h4>
                {form}
            </div>
        );
    }
}
export default ContactData;