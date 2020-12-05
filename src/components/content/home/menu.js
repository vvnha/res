import React, { Component, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { connect } from 'react-redux';
import Food from '../home/Food';
import axios from 'axios';
import callApi from '../utils/apiCaller';
import * as actions from '../../../actions/index';

const responsive = {
    0: {
        items: 1,
    },
    600: {
        items: 4,
    }
}

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foods: [],
            isLoading: true,
            errors: null
        };
    }

    getFoods() {
        callApi('api/foods/getFoods', 'GET', null).then(res => {
            this.setState({
                foods: res.data.data,
                isLoading: false
            });
        });
    }

    componentDidMount() {
        this.getFoods();
    }

    render() {

        var { isLoading, foods } = this.state;

        return (
            <React.Fragment>
                {!isLoading ? (
                    <div className="section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8" data-aos="fade-up">

                                    <h2 className="mb-5 text-center">Menu List with Price</h2>

                                    <ul className="nav site-tab-nav" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="pills-breakfast-tab" data-toggle="pill" href="#pills-breakfast" role="tab" aria-controls="pills-breakfast" aria-selected="true">Breakfast</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-lunch-tab" data-toggle="pill" href="#pills-lunch" role="tab" aria-controls="pills-lunch" aria-selected="false">Brunch</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-dinner-tab" data-toggle="pill" href="#pills-dinner" role="tab" aria-controls="pills-dinner" aria-selected="false">Dinner</a>
                                        </li>
                                    </ul>

                                    <div className="tab-content" id="pills-tabContent">

                                        <div className="tab-pane fade show active" id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab">
                                            <div className="carousel-inner">

                                                <OwlCarousel items={4} className="carousel slide" loop nav margin={8} responsive={responsive}>
                                                    {this.showFoods(foods)}
                                                </OwlCarousel>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab">

                                            <div className="d-block d-md-flex menu-food-item">
                                                <div className="text order-1 mb-3">
                                                    <h3><a href="#">Jumbo Lump Crab Stack</a></h3>
                                                    <p>Spinach and artichokes in a creamy cheese dip with warm tortilla chips &amp; salsa.</p>
                                                </div>
                                                <div className="price order-2">
                                                    <strong>$12.49</strong>
                                                </div>
                                            </div>

                                            <div className="d-block d-md-flex menu-food-item">
                                                <div className="text order-1 mb-3">
                                                    <h3><a href="#">Jamaican Chicken Wings</a></h3>
                                                    <p>Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.</p>
                                                </div>
                                                <div className="price order-2">
                                                    <strong>$15.99</strong>
                                                </div>
                                            </div>

                                            <div className="d-block d-md-flex menu-food-item">
                                                <div className="text order-1 mb-3">
                                                    <h3><a href="#">Bahamian Seafood Chowder</a></h3>
                                                    <p>A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.</p>
                                                </div>
                                                <div className="price order-2">
                                                    <strong>$10.99</strong>
                                                </div>
                                            </div>

                                            <div className="d-block d-md-flex menu-food-item">
                                                <div className="text order-1 mb-3">
                                                    <h3><a href="#">Grilled Chicken &amp; Tropical Fruit on Mixed Greens</a></h3>
                                                    <p>Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.</p>
                                                </div>
                                                <div className="price order-2">
                                                    <strong>$12.99</strong>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab">

                                            <div className="d-block d-md-flex menu-food-item">
                                                <div className="text order-1 mb-3">
                                                    <h3><a href="#">Grilled Top Sirlion Steak</a></h3>
                                                    <p>Spinach and artichokes in a creamy cheese dip with warm tortilla chips &amp; salsa.</p>
                                                </div>
                                                <div className="price order-2">
                                                    <strong>$18.99</strong>
                                                </div>
                                            </div>

                                            <div className="d-block d-md-flex menu-food-item">
                                                <div className="text order-1 mb-3">
                                                    <h3><a href="#">Steak Oscar</a></h3>
                                                    <p>Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.</p>
                                                </div>
                                                <div className="price order-2">
                                                    <strong>$23.99</strong>
                                                </div>
                                            </div>

                                            <div className="d-block d-md-flex menu-food-item">
                                                <div className="text order-1 mb-3">
                                                    <h3><a href="#">Skirt Steak Churrasco</a></h3>
                                                    <p>A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.</p>
                                                </div>
                                                <div className="price order-2">
                                                    <strong>$20.99</strong>
                                                </div>
                                            </div>

                                            <div className="d-block d-md-flex menu-food-item">
                                                <div className="text order-1 mb-3">
                                                    <h3><a href="#">Grilled Beef Steak</a></h3>
                                                    <p>Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.</p>
                                                </div>
                                                <div className="price order-2">
                                                    <strong>$20.99</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (<p>Loading..</p>)}
            </React.Fragment>
        );
    }
    showFoods(foods) {
        var result = null;
        if (foods.length > 0) {
            result = foods.map((food, index) => {
                return (
                    <Food
                        key={index}
                        food={food}
                    />
                );

            });
        }
        return result;
    }

}
const mapStateToProps = state => {
    return {
        foods: state.foods,
        token: state.tokens
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToken: (token) => {
            dispatch(actions.storeToken(token));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);