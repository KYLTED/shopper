import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import Navbar from "../Navbar"
import Footer from '../Footer'

// import { Link } from "react-router-dom"
import ShopProductCard from "../ShopProductCard"

import Promo from "../Promo"

import Product from "../../app/models/Product"
import Geral from '../../app/controls/Geral'

export default class ShopPage extends Component{
	filters:any;
	
	renderTags(){
		let elements: Array<JSX.Element> = [];
		let tags_container = document.getElementById("tags-container")!;


		if($('#category_type_shoes').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="category_type_shoes">
					Shoes <a className="text-reset ml-2" role="button" onClick={() => {
							$('#category_type_shoes').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#category_type_dresses').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="category_type_dresses">
					Dresses <a className="text-reset ml-2" role="button" onClick={() => {
							$('#category_type_dresses').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#category_type_tops').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="category_type_tops">
					Tops <a className="text-reset ml-2" role="button" onClick={() => {
							$('#category_type_tops').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#category_type_bags').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="category_type_bags">
					Bags <a className="text-reset ml-2" role="button" onClick={() => {
							$('#category_type_bags').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#category_type_shirts').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="category_type_shirts">
					Shirts <a className="text-reset ml-2" role="button" onClick={() => {
							$('#category_type_shirts').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#summer').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="summer">
					Summer <a className="text-reset ml-2" role="button" onClick={() => {
							$('#summer').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#winter').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="winter">
					Winter <a className="text-reset ml-2" role="button" onClick={() => {
							$('#winter').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#spring').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="spring">
					Spring <a className="text-reset ml-2" role="button" onClick={() => {
							$('#spring').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#autumn').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="autumn">
					Autumn <a className="text-reset ml-2" role="button" onClick={() => {
							$('#autumn').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#3xs').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="3xs">
					3XS <a className="text-reset ml-2" role="button" onClick={() => {
							$('#3xs').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#2xs').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="2xs">
					2XS <a className="text-reset ml-2" role="button" onClick={() => {
							$('#2xs').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#xs').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="xs">
					XS <a className="text-reset ml-2" role="button" onClick={() => {
							$('#xs').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#s').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="s">
					S <a className="text-reset ml-2" role="button" onClick={() => {
							$('#s').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#m').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="m">
					M <a className="text-reset ml-2" role="button" onClick={() => {
							$('#m').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#l').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="l">
					L <a className="text-reset ml-2" role="button" onClick={() => {
							$('#l').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#xl').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="xl">
					XL <a className="text-reset ml-2" role="button" onClick={() => {
							$('#xl').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#2xl').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="2xl">
					2XL <a className="text-reset ml-2" role="button" onClick={() => {
							$('#2xl').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#3xl').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="3xl">
					3XL <a className="text-reset ml-2" role="button" onClick={() => {
							$('#3xl').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#4xl').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="4xl">
					4XL <a className="text-reset ml-2" role="button" onClick={() => {
							$('#4xl').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#one_size').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="one_size">
					One Size <a className="text-reset ml-2" role="button" onClick={() => {
							$('#one_size').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#black').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="black">
					Black <a className="text-reset ml-2" role="button" onClick={() => {
							$('#black').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#white').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="white">
					White <a className="text-reset ml-2" role="button" onClick={() => {
							$('#white').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#blue').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="blue">
					Blue <a className="text-reset ml-2" role="button" onClick={() => {
							$('#blue').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#red').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="red">
					Red <a className="text-reset ml-2" role="button" onClick={() => {
							$('#red').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#brown').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="brown">
					Brown <a className="text-reset ml-2" role="button" onClick={() => {
							$('#brown').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#gray').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="gray">
					Gray <a className="text-reset ml-2" role="button" onClick={() => {
							$('#gray').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#cyan').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="cyan">
					Cyan <a className="text-reset ml-2" role="button" onClick={() => {
							$('#cyan').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#pink').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="pink">
					Pink <a className="text-reset ml-2" role="button" onClick={() => {
							$('#pink').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#brand_one').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="brand_one">
					Brand One <a className="text-reset ml-2" role="button" onClick={() => {
							$('#brand_one').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#brand_two').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="brand_two">
					Brand Two <a className="text-reset ml-2" role="button" onClick={() => {
							$('#brand_two').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#priceOne').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="priceOne">
					$10.00 - $49.99 <a className="text-reset ml-2" role="button" onClick={() => {
							$('#priceOne').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#priceTwo').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="priceTwo">
					$50.00 - $99.99 <a className="text-reset ml-2" role="button" onClick={() => {
							$('#priceTwo').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#priceThree').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="priceThree">
					$100 - $199.99 <a className="text-reset ml-2" role="button" onClick={() => {
							$('#priceThree').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		if($('#priceFour').is(":checked")){
			elements.push(
				<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3" key="priceFour">
					$200 to Up <a className="text-reset ml-2" role="button" onClick={() => {
							$('#priceFour').prop('checked', false);
							this.refreshProducts();
						}}>
						<i className="fe fe-x"></i>
					</a>
				</span>
			);
		}

		ReactDOM.render(elements, tags_container);
	}

	constructor(props: any){
		super(props);
		//Get filter from the API
		// this.filters = require("../../data/filters.json");
		// this.renderFilters();
	}

	refreshProducts(){
		//Get Products from api
		this.renderTags();
		//Get Products from api
		let products:Array<Product> = require("../../data/products.json");

		if(products != null && document != null){
			let product_container = document.getElementById("products-container")!;
			let elements:Array<JSX.Element> = [];
			
			products = products.filter(product => {
				let is_filter = false;
				if($('#category_type_shoes').is(":checked")){
					if(product.filter.category.type != null && product.filter.category.type.includes(Product.SHOES)) {
						return true;
					}
					is_filter = true;
				}
				
				if($('#category_type_dresses').is(":checked")){
					if(product.filter.category.type != null && product.filter.category.type.includes(Product.DRESSES)) 
						return true
					is_filter = true;
				}
				
				if($('#category_type_tops').is(":checked")){
					if(product.filter.category.type != null && product.filter.category.type.includes(Product.TOPS)) 
						return true
					is_filter = true;
				}
				
				if($('#category_type_bags').is(":checked")){
					if(product.filter.category.type != null && product.filter.category.type.includes(Product.BAGS)) 
						return true
					is_filter = true;
				}
				
				if($('#category_type_shirts').is(":checked")){
					if(product.filter.category.type != null && product.filter.category.type.includes(Product.SHIRTS)) 
						return true
					is_filter = true;
				}
				
				if($('#summer').is(":checked")){
					if(product.filter.season != null && product.filter.season.includes(Product.SUMMER)) 
						return true
					is_filter = true;
				}
				
				if($('#winter').is(":checked")){
					if(product.filter.season != null && product.filter.season.includes(Product.WINTER)) 
						return true
					is_filter = true;
				}
				
				if($('#spring').is(":checked")){
					if(product.filter.season != null && product.filter.season.includes(Product.SPRING)) 
						return true
					is_filter = true;
				}
				
				if($('#autumn').is(":checked")){
					if(product.filter.season != null && product.filter.season.includes(Product.AUTUMM)) 
						return true
					is_filter = true;
				}
				
				if($('#3xs').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.THREE_XS)) 
						return true
					is_filter = true;
				}
				
				if($('#2xs').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.TWO_XS)) 
						return true
					is_filter = true;
				}
				
				if($('#xs').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.XS)) 
						return true
					is_filter = true;
				}
				
				if($('#s').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.S)) 
						return true
					is_filter = true;
				}
				
				if($('#m').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.M)) 
						return true
					is_filter = true;
				}
				
				if($('#l').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.L)) 
						return true
					is_filter = true;
				}
				
				if($('#xl').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.XL)) 
						return true
					is_filter = true;
				}
				
				if($('#2xl').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.TWO_XL)) 
						return true
					is_filter = true;
				}
				
				if($('#3xl').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.THREE_XL)) 
						return true
					is_filter = true;
				}
				
				if($('#4xl').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.FOUR_XL)) 
						return true
					is_filter = true;
				}
				
				if($('#one_size').is(":checked")){
					if(product.filter.size != null && product.filter.size.includes(Product.ONE_SIZE)) 
						return true
					is_filter = true;
				}
				
				if($('#black').is(":checked")){
					if(product.filter.color != null && product.filter.color.includes(Product.BLACK)) 
						return true
					is_filter = true;
				}
				
				if($('#white').is(":checked")){
					if(product.filter.color != null && product.filter.color.includes(Product.WHITE)) 
						return true
					is_filter = true;
				}
				
				if($('#blue').is(":checked")){
					if(product.filter.color != null && product.filter.color.includes(Product.BLUE)) 
						return true
					is_filter = true;
				}
				
				if($('#red').is(":checked")){
					if(product.filter.color != null && product.filter.color.includes(Product.RED)) 
						return true
					is_filter = true;
				}
				
				if($('#brown').is(":checked")){
					if(product.filter.color != null && product.filter.color.includes(Product.BROWN)) 
						return true
					is_filter = true;
				}
				
				if($('#gray').is(":checked")){
					if(product.filter.color != null && product.filter.color.includes(Product.GRAY)) 
						return true
					is_filter = true;
				}
				
				if($('#cyan').is(":checked")){
					if(product.filter.color != null && product.filter.color.includes(Product.CYAN)) 
						return true
					is_filter = true;
				}
				
				if($('#pink').is(":checked")){
					if(product.filter.color != null && product.filter.color.includes(Product.PINK)) 
						return true
					is_filter = true;
				}
				
				if($('#brand_one').is(":checked")){
					if(product.filter.brand != null && product.filter.brand.includes(Product.BRAND_ONE)) 
						return true
					is_filter = true;
				}
				
				if($('#brand_two').is(":checked")){
					if(product.filter.brand != null && product.filter.brand.includes(Product.BRAND_ONE)) 
						return true
					is_filter = true;
				}
				
				if($('#priceOne').is(":checked")){
					if(product.price >= 10.0 && product.price <= 49.99) 
						return true
					is_filter = true;
				}
				
				if($('#priceTwo').is(":checked")){
					if(product.price >= 50.0 && product.price <= 99.99) 
						return true
					is_filter = true;
				}
				
				if($('#priceThree').is(":checked")){
					if(product.price >= 100.0 && product.price <= 199.99) 
						return true
					is_filter = true;
				}
				
				if($('#priceFour').is(":checked")){
					if(product.price >= 200.0) 
						return true
					is_filter = true;
				}

				let range_one_val = $('#range_one').val();
				let range_two_val = $('#range_two').val();
				if(range_one_val != null && range_one_val != "" && range_two_val != null && range_two_val != ""){
					if(product.price >= range_one_val && product.price <= range_two_val) 
						return true
					is_filter = true;
				}else if(range_one_val != null && range_one_val != "" && range_two_val == null && range_two_val == ""){
					if(product.price >= range_one_val) 
						return true
					is_filter = true;
				}else if(range_one_val == null && range_one_val == "" && range_two_val != null){
					if(product.price <= range_two_val) 
						return true
					is_filter = true;
				}

				if(is_filter) return false;
				else return true;
			})
			
			products.forEach((product, index) => {
				let e = (
					<div className="col-6 col-md-4" key={product.id}>
						<ShopProductCard product={product} />
					</div>
				);
				elements.push(e);
			});
			ReactDOM.render(elements, product_container);
		}
	}

	componentDidMount(){
		this.refreshProducts();
		$('input[type="checkbox"]').on('change', () => this.refreshProducts())
		// Geral.loadScripts();
	}

  render(){
    return (
			<div className="accountorderspage">
				<Navbar />
				<Promo />
				
				{/* <!-- CONTENT --> */}
				<section className="py-11">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-4 col-lg-3">

								{/* <!-- Filters --> */}
								<form className="mb-10 mb-md-0">
									<ul className="nav nav-vertical" id="filterNav">
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#categoryCollapse">
												Category
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse show" id="categoryCollapse">
												<div className="form-group">
													<ul className="list-styled mb-0" id="productsNav">
														<li className="list-styled-item">

															{/* <!-- Toggle --> */}
															<a className="list-styled-link" data-toggle="collapse" href="#blousesCollapse">
																Subcategory Name
															</a>

															{/* <!-- Collapse --> */}
															<div className="collapse show" id="blousesCollapse" data-parent="#productsNav">
																<div className="py-4 pl-5">
																	<div className="custom-control custom-checkbox mb-3">
																		<input className="custom-control-input" id="category_type_shoes" type="checkbox" />
																		<label className="custom-control-label" htmlFor="category_type_shoes">
																			Shoes
																		</label>
																	</div>
																	<div className="custom-control custom-checkbox mb-3">
																		<input className="custom-control-input" id="category_type_dresses" type="checkbox" />
																		<label className="custom-control-label" htmlFor="category_type_dresses">
																			Dresses
																		</label>
																	</div>
																	<div className="custom-control custom-checkbox mb-3">
																		<input className="custom-control-input" id="category_type_tops" type="checkbox" />
																		<label className="custom-control-label" htmlFor="category_type_tops">
																			Tops
																		</label>
																	</div>
																	<div className="custom-control custom-checkbox mb-3">
																		<input className="custom-control-input" id="category_type_bags" type="checkbox" />
																		<label className="custom-control-label" htmlFor="category_type_bags">
																			Bags
																		</label>
																	</div>
																	<div className="custom-control custom-checkbox">
																		<input className="custom-control-input" id="category_type_shirts" type="checkbox" />
																		<label className="custom-control-label" htmlFor="category_type_shirts">
																			Shirts
																		</label>
																	</div>
																</div>
															</div>

														</li>
														</ul>
												</div>
											</div>

										</li>
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#seasonCollapse">
												Season
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse" id="seasonCollapse" data-toggle="simplebar" data-target="#seasonGroup">
												<div className="form-group form-group-overflow mb-6" id="seasonGroup">
													<div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input" id="summer" type="checkbox" />
														<label className="custom-control-label" htmlFor="summer">
															Summer
														</label>
													</div>
													<div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input" id="winter" type="checkbox" />
														<label className="custom-control-label" htmlFor="winter">
															Winter
														</label>
													</div>
													<div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input" id="spring" type="checkbox" />
														<label className="custom-control-label" htmlFor="spring">
															Spring
														</label>
													</div>
													<div className="custom-control custom-checkbox">
														<input className="custom-control-input" id="autumn" type="checkbox" />
														<label className="custom-control-label" htmlFor="autumn">
															Autumn
														</label>
													</div>
												</div>
											</div>

										</li>
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#sizeCollapse">
												Size
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse" id="sizeCollapse" data-toggle="simplebar" data-target="#sizeGroup">
												<div className="form-group form-group-overlow mb-6" id="sizeGroup">
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="3xs" type="checkbox" />
														<label className="custom-control-label" htmlFor="3xs">
															3XS
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="2xs" type="checkbox" />
														<label className="custom-control-label" htmlFor="2xs">
															2XS
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="xs" type="checkbox" />
														<label className="custom-control-label" htmlFor="xs">
															XS
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="s" type="checkbox" />
														<label className="custom-control-label" htmlFor="s">
															S
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="m" type="checkbox" />
														<label className="custom-control-label" htmlFor="m">
															M
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="l" type="checkbox" />
														<label className="custom-control-label" htmlFor="l">
															L
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="xl" type="checkbox" />
														<label className="custom-control-label" htmlFor="xl">
															XL
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="2xl" type="checkbox" />
														<label className="custom-control-label" htmlFor="2xl">
															2XL
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="3xl" type="checkbox" />
														<label className="custom-control-label" htmlFor="3xl">
															3XL
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="4xl" type="checkbox" />
														<label className="custom-control-label" htmlFor="4xl">
															4XL
														</label>
													</div>
													<div className="custom-control custom-control-inline custom-control-size mb-2">
														<input className="custom-control-input" id="one_size" type="checkbox" />
														<label className="custom-control-label" htmlFor="one_size">
															One Size
														</label>
													</div>
												</div>
											</div>

										</li>
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#colorCollapse">
												Color
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse" id="colorCollapse" data-toggle="simplebar" data-target="#colorGroup">
												<div className="form-group form-group-overflow mb-6" id="colorGroup">
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" id="black" type="checkbox" />
														<label className="custom-control-label text-dark" htmlFor="black">
															<span className="text-body">Black</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" id="white" type="checkbox" />
														<label className="custom-control-label" style={{color: "#f9f9f9"}} htmlFor="white">
															<span className="text-body">White</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" id="blue" type="checkbox" />
														<label className="custom-control-label text-info" htmlFor="blue">
															<span className="text-body">Blue</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" id="red" type="checkbox" />
														<label className="custom-control-label text-primary" htmlFor="red">
															<span className="text-body">Red</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" id="brown" type="checkbox" />
														<label className="custom-control-label" htmlFor="brown" style={{color: "#795548"}}>
															<span className="text-body">Brown</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" id="gray" type="checkbox" />
														<label className="custom-control-label text-gray-300" htmlFor="gray">
															<span className="text-body">Gray</span>
														</label>
													</div>
													<div className="custom-control custom-control-color mb-3">
														<input className="custom-control-input" id="cyan" type="checkbox" />
														<label className="custom-control-label" htmlFor="cyan" style={{color: "#17a2b8"}}>
															<span className="text-body">Cyan</span>
														</label>
													</div>
													<div className="custom-control custom-control-color">
														<input className="custom-control-input" id="pink" type="checkbox" />
														<label className="custom-control-label" htmlFor="pink" style={{color: "#e83e8c"}}>
															<span className="text-body">Pink</span>
														</label>
													</div>
												</div>
											</div>

										</li>
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#brandCollapse">
												Brand
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse" id="brandCollapse" data-toggle="simplebar" data-target="#brandGroup">

												{/* <!-- Search --> */}
												<div data-toggle="lists" data-options='{"valueNames": ["name"]}'>

													{/* <!-- Input group --> */}
													<div className="input-group input-group-merge mb-6">
														<input className="form-control form-control-xs search" type="search" placeholder="Search Brand" />

														{/* <!-- Button --> */}
														<div className="input-group-append">
															<button className="btn btn-outline-border btn-xs">
																<i className="fe fe-search"></i>
															</button>
														</div>

													</div>

													{/* <!-- Form group --> */}
													<div className="form-group form-group-overflow mb-6" id="brandGroup">
														<div className="list">
															<div className="custom-control custom-checkbox mb-3">
																<input className="custom-control-input" id="brand_a" type="checkbox" />
																<label className="custom-control-label name" htmlFor="brand_a">
																	Brand a
																</label>
															</div>
															<div className="custom-control custom-checkbox">
																<input className="custom-control-input" id="brand_b" type="checkbox" />
																<label className="custom-control-label name" htmlFor="brand_b">
																	Brand b
																</label>
															</div>
														</div>
													</div>

												</div>

											</div>

										</li>
										<li className="nav-item">

											{/* <!-- Toggle --> */}
											<a className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6" data-toggle="collapse" href="#priceCollapse">
												Price
											</a>

											{/* <!-- Collapse --> */}
											<div className="collapse" id="priceCollapse" data-toggle="simplebar" data-target="#priceGroup">

												{/* <!-- Form group--> */}
												<div className="form-group form-group-overflow mb-6" id="priceGroup">
													<div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input" id="priceOne" type="checkbox" />
														<label className="custom-control-label" htmlFor="priceOne">
															$10.00 - $49.99
														</label>
													</div>
													<div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input" id="priceTwo" type="checkbox" />
														<label className="custom-control-label" htmlFor="priceTwo">
															$50.00 - $99.99
														</label>
													</div>
													<div className="custom-control custom-checkbox mb-3">
														<input className="custom-control-input" id="priceThree" type="checkbox" />
														<label className="custom-control-label" htmlFor="priceThree">
															$100.00 - $199.99
														</label>
													</div>
													<div className="custom-control custom-checkbox">
														<input className="custom-control-input" id="priceFour" type="checkbox" />
														<label className="custom-control-label" htmlFor="priceFour">
															$200.00 and Up
														</label>
													</div>
												</div>

												{/* <!-- Range --> */}
												<div className="d-flex align-items-center">

													{/* <!-- Input --> */}
													<input type="number" className="form-control form-control-xs" placeholder="$10.00" min="10" id="range_one" />

													{/* <!-- Divider --> */}
													<div className="text-gray-350 mx-2">‒</div>

													{/* <!-- Input --> */}
													<input type="number" className="form-control form-control-xs" placeholder="$350.00" max="350" id="range_two" />

												</div>

											</div>

										</li>
									</ul>
								</form>

							</div>
							<div className="col-12 col-md-8 col-lg-9">
								{/* <!-- Header --> */}
								<div className="row align-items-center mb-7">
									<div className="col-12 col-md">

										{/* <!-- Heading --> */}
										<h3 className="mb-1">Womens' Clothing</h3>

										{/* <!-- Breadcrumb --> */}
										<ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
											<li className="breadcrumb-item">
												<a className="text-gray-400" href="index.html">Home</a>
											</li>
											<li className="breadcrumb-item active">
												Women's Clothing
											</li>
										</ol>

									</div>
									<div className="col-12 col-md-auto">

										{/* <!-- Select --> */}
										<select className="custom-select custom-select-xs" defaultValue="most_popular">
											<option value="most_popular">Most popular</option>
										</select>

									</div>
								</div>

								{/* <!-- Tags --> */}
								<div className="row mb-7">
									<div className="col-12" id="tags-container">
									</div>
								</div>

								{/* <!-- Products --> */}
								<div className="row" id="products-container">
								</div>

								{/* <!-- Slider --> */}
								<div className="flickity-page-dots-inner mb-9" data-flickity='{"pageDots": true}'>

									{/* <!-- Item --> */}
									<div className="w-100">
										<div className="card bg-h-100 bg-left" style={{backgroundImage: "url(assets/img/covers/cover-24.jpg)"}}>
											<div className="row" style={{minHeight: "400px"}}>
												<div className="col-12 col-md-10 col-lg-8 col-xl-6 align-self-center">
													<div className="card-body px-md-10 py-11">

														{/* <!-- Heading --> */}
														<h4>
															2020 Summer Collection
														</h4>

														{/* <!-- Button --> */}
														<a className="btn btn-link px-0 text-body" href="shop.html">
															View Collection <i className="fe fe-arrow-right ml-2"></i>
														</a>

													</div>
												</div>
												<div className="col-12 col-md-2 col-lg-4 col-xl-6 d-none d-md-block bg-cover" style={{backgroundImage: "url(assets/img/covers/cover-16.jpg)"}}></div>
											</div>
										</div>
									</div>


									{/* <!-- Item --> */}
									<div className="w-100">
										<div className="card bg-cover" style={{backgroundImage: "url(assets/img/covers/cover-29.jpg)"}}>
											<div className="row align-items-center" style={{minHeight: "400px"}}>
												<div className="col-12 col-md-10 col-lg-8 col-xl-6">
													<div className="card-body px-md-10 py-11">

														{/* <!-- Heading --> */}
														<h4 className="mb-5">Get -50% from Summer Collection</h4>

														{/* <!-- Text --> */}
														<p className="mb-7">
															Appear, dry there darkness they're seas. <br/>
															<strong className="text-primary">Use code 4GF5SD</strong>
														</p>

														{/* <!-- Button --> */}
														<a className="btn btn-outline-dark" href="shop.html">
															Shop Now <i className="fe fe-arrow-right ml-2"></i>
														</a>

													</div>
												</div>
											</div>
										</div>
									</div>

									{/* <!-- Item --> */}
									<div className="w-100">
										<div className="card bg-cover" style={{backgroundImage: "url(assets/img/covers/cover-30.jpg)"}}>
											<div className="row align-items-center" style={{minHeight: "400px"}}>
												<div className="col-12">
													<div className="card-body px-md-10 py-11 text-center text-white">

														{/* <!-- Preheading --> */}
														<p className="text-uppercase">Enjoy an extra</p>

														{/* <!-- Heading --> */}
														<h1 className="display-4 text-uppercase">50% off</h1>

														{/* <!-- Link --> */}
														<a className="link-underline text-reset" href="shop.html">Shop Collection</a>

													</div>
												</div>
											</div>
										</div>
									</div>

								</div>

								{/* <!-- Pagination --> */}
								<div className="row">
									<div className="col-12">

										{/* <!-- Progress --> */}
										<div className="row justify-content-center mt-7">
											<div className="col-12 text-center">

												{/* <!-- Caption --> */}
												<p className="font-size-sm text-muted">
													Showing 8 of 8 products
												</p>

												{/* <!-- Progress --> */}
												<div className="progress mx-auto mb-7" style={{maxWidth: "250px"}}>
													<div className="progress-bar bg-dark" role="progressbar" style={{width: "100%"}}></div>
												</div>

												{/* <!-- Button --> */}
												<a className="btn btn-sm btn-outline-dark disabled" href="#!">
													Load more
												</a>

											</div>
										</div>

									</div>
								</div>

							</div>
						</div>
					</div>
				</section>

				
				<Footer />
			</div>
    )
  }
}