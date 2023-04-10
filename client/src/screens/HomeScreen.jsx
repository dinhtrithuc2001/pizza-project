import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import Pizza from '../components/Pizza'
import CarouselHome from '../components/CarouselHome'
import { getAllPizzas } from '../redux/actions/pizzaAction'
import Loading from '../components/Loading'

const HomeScreen = () => {

    const dispatch = useDispatch()
    const pizzaState = useSelector(state => state.getAllPizzaReducer)
    const { pizzas, loading, error } = pizzaState

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])

    return (
        <>
            <Container>
                {loading ? <Loading /> : error ? (<h1>Error while fetching data pizzas</h1>) : <>
                    <Row>
                        <CarouselHome />
                    </Row>
                    <Row>
                        <h2 className='text-center my-3'>Pizzas list</h2>
                        {pizzas?.map((pizza, index) => (
                            <Col md={4} className='p-3'>
                                <Pizza pizza={pizza} key={index} />
                            </Col>
                        ))}
                    </Row>
                </>}
            </Container>
        </>
    )
}

export default HomeScreen