import React, { useState } from 'react';
import { Card, CardImg, Form, FormGroup, Input, Dropdown, DropdownToggle, DropdownMenu, Label, Button } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';

const PizzaForm = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        size: '',
        sauce: '',
        pepperoni: false,
        sausage: false,
        canadian: false,
        spicy: false,
        grilled: false,
        onions: false,
        green: false,
        special: ''
    });
    const schema = yup.object().shape({
        name: yup.string().required().min(2),
        size: yup.string().required('Required Field'),
        sauce: yup.string().required('Required Field'),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        canadian: yup.boolean(),
        spicy: yup.boolean(),
        grilled: yup.boolean(),
        onions: yup.boolean(),
        green: yup.boolean()
    })
    const submit = () => {
        schema.validate(formData).then(() => {
            axios.post('https://reqres.in/api/users', formData).then( (res) => {
                console.log(res.data, 'This is Posted Data')
            })
        })
    }
    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleToppings = e => {
        setFormData({...formData, [e.target.name]: e.target.checked})
    }
    const toggle = () => setDropdownOpen((prevState) => !prevState)
    
    return(

        <>
        <Card color='danger'>
            <h2 style={{color: 'black', margin : '0 auto'}} >
                Build Your Pizza!
            </h2>
            <CardImg style={{width: '80%', margin: '0 auto'}} src={require("../imgs/pizza2.jpg")}/>
        </Card>
        <Form data-cy='submit' onSubmit={(e) => {
            e.preventDefault()
            submit()
        }} style={{ margin: '5%'}}>
            <FormGroup>
                <legend>Name</legend>
                <Input type='name' name='name' data-cy='name' value={formData.name} onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>{formData.size === '' ? 'Pizza Size' : formData.size}</DropdownToggle>
                    <DropdownMenu>
                        <div onClick={() => {
                            toggle();
                            setFormData({...formData, size: 'Small'})
                        }}>Small</div>
                        <div onClick={() => {
                            toggle();
                            setFormData({...formData, size: 'Medium'})
                        }}>Medium</div>
                        <div onClick={() => {
                            toggle();
                            setFormData({...formData, size: 'Large'})
                        }}>Large</div>
                        <div onClick={() => {
                            toggle();
                            setFormData({...formData, size: 'XLarge'})
                        }}>XLarge</div>
                        <div onClick={() => {
                            toggle();
                            setFormData({...formData, size: 'XXLarge'})
                        }}>XXLarge</div>
                    </DropdownMenu>
                </Dropdown>
            </FormGroup>
            <FormGroup tag='fieldset'>
                <legend>Choice of Sauce</legend>
                <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='red' onChange={handleChange}/>
                        Original Red
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='ranch' onChange={handleChange}/>
                        Garlic Ranch
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='bbq' onChange={handleChange}/>
                        BBQ Sauce
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='radio' name='sauce' value='spinach' onChange={handleChange}/>
                        Spinach Alfredo
                    </Label>
                </FormGroup>
            </FormGroup>

                <FormGroup tag='fieldset'>
                <legend>Add Toppings</legend>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='pepperoni' data-cy='checkbox1' checked={formData.pepperoni} onChange={handleToppings} />
                        Pepperoni
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='sausage' data-cy='checkbox2' checked={formData.sausage} onChange={handleToppings} />
                        Sausage
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='canadian' data-cy='checkbox3' checked={formData.canadian} onChange={handleToppings} />
                        Canadian Bacon
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='spicy' data-cy='checkbox4' checked={formData.spicy} onChange={handleToppings} />
                        Spicy Italian Sausage
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='grilled' data-cy='checkbox5' checked={formData.grilled} onChange={handleToppings} />
                        Grilled Chicken
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='onions' data-cy='checkbox6' checked={formData.onions} onChange={handleToppings} />
                        Onions
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type='checkbox' name='green' data-cy='checkbox7' checked={formData.green} onChange={handleToppings} />
                        Green Pepper
                    </Label>
                </FormGroup>
                <FormGroup>
                    <legend>Special Instructions</legend>
                    <Input type='textarea' name='special' value={formData.special} onChange={handleChange} />
                </FormGroup>
                <Button>Submit</Button>

            </FormGroup>

        </Form>
        </>
    )
}

export default PizzaForm;