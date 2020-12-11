import React, {Component} from 'react'

import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo.png";

export default class Navbar extends Component<{className?:string}>{

  render(){
    return (
			<div className="loginpage">
				{/* <!-- NAVBAR --> */}
				<div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light navbar-first">
					<div className="container">

						{/* <!-- Toggler --> */}
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						{/* <!-- Collapse --> */}
						<div className="collapse navbar-collapse" id="topbarCollapse">

							{/* <!-- Nav --> */}
							<ul className="nav nav-divided navbar-nav mr-auto">
								<li className="nav-item dropdown">

									{/* <!-- Toggle --> */}
									<a className="nav-link" href="#">
										<img className="mb-1 mr-1" src="/assets/img/flags/usa.svg" alt="..." /> United States
									</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu minw-0">
										<a className="dropdown-item" href="#!">
											<img className="mb-1 mr-2" src="/assets/img/flags/usa.svg" alt="USA" />United States
										</a>
										<a className="dropdown-item" href="#!">
											<img className="mb-1 mr-2" src="/assets/img/flags/canada.svg" alt="Canada" />Canada
										</a>
										<a className="dropdown-item" href="#!">
											<img className="mb-1 mr-2" src="/assets/img/flags/germany.svg" alt="Germany" />Germany
										</a>
									</div>

								</li>
								<li className="nav-item dropdown">

									{/* <!-- Toggle --> */}
									<a className="nav-link" href="#">English</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu minw-0">
										<a className="dropdown-item" href="#">English</a>
										<a className="dropdown-item" href="#">French</a>
										<a className="dropdown-item" href="#">German</a>
									</div>

								</li>
							</ul>

							{/* <!-- Nav --> */}
							<ul className="nav navbar-nav">
								<li className="nav-item">
									<a className="nav-link" href="/shipping-and-returns.html">Shipping</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/faq.html">FAQ</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/contact-us.html">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!-- NAVBAR --> */}
				<nav className={"navbar navbar-expand-lg navbar-light bg-white"+((this.props.className != null) ? " "+this.props.className : "")}>
					<div className="container">
						{/* <!-- Toggler --> */}
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						{/* <!-- Brand --> */}
						<a className="navbar-brand" href="/">
							<img src={Logo} className="nav-logo"/>
						</a>
						
						{/* <!-- Nav --> */}
						<ul className="navbar-nav flex-row navbar-icons-mobile">
							<li className="nav-item">
								<a className="nav-link" data-toggle="modal" href="#modalSearch">
									<i className="fe fe-search"></i>
								</a>
							</li>
							<li className="nav-item ml-lg-n4">
								<a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
									<span>
										<i className="fe fe-shopping-bag"></i>
									</span> 
								</a>
							</li>
						</ul>


						{/* <!-- Collapse --> */}
						<div className="collapse navbar-collapse" id="navbarCollapse">

							{/* <!-- Nav --> */}
							<ul className="navbar-nav mx-auto navbar-logo-link-container">
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">New in</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu w-100">

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Kids
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-lg">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Clothing</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Clothing</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Blouses & Shirts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Coats & Jackets</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Dresses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hoodies & Sweats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Denim</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jeans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jumpers & Cardigans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Leggings</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Shoes & Boots</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Shoes & Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Branded Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Heels</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Trainers</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Sandals</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Wide Fit Shoes</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Bags & Accessories</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Bags & Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Bags & Purses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Luggage</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Belts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hair Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jewellery</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Travel Accessories</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Collections</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Collections</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Occasionwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Going Out</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Workwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Holiday Shop</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jean Fit Guide</a>
																		</li>
																	</ul>

																</div>
																<div className="col-4 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>

																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</li>
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">Shoes</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu w-100">

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Kids
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-lg">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Clothing</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Clothing</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Blouses & Shirts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Coats & Jackets</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Dresses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hoodies & Sweats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Denim</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jeans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jumpers & Cardigans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Leggings</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Shoes & Boots</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Shoes & Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Branded Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Heels</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Trainers</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Sandals</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Wide Fit Shoes</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Bags & Accessories</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Bags & Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Bags & Purses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Luggage</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Belts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hair Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jewellery</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Travel Accessories</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Collections</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Collections</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Occasionwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Going Out</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Workwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Holiday Shop</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jean Fit Guide</a>
																		</li>
																	</ul>

																</div>
																<div className="col-4 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>

																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</li>
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">Sneakers</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu w-100">

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Kids
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-lg">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Clothing</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Clothing</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Blouses & Shirts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Coats & Jackets</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Dresses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hoodies & Sweats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Denim</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jeans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jumpers & Cardigans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Leggings</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Shoes & Boots</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Shoes & Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Branded Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Heels</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Trainers</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Sandals</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Wide Fit Shoes</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Bags & Accessories</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Bags & Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Bags & Purses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Luggage</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Belts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hair Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jewellery</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Travel Accessories</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Collections</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Collections</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Occasionwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Going Out</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Workwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Holiday Shop</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jean Fit Guide</a>
																		</li>
																	</ul>

																</div>
																<div className="col-4 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>

																	</div>

																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

									</div>
								</li>
								<li className="nav-item dropdown">

									{/* <!-- Toggle --> */}
									<a className="nav-link" href="/shop">Bags</a>
								</li>
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">Accessories</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu w-100">

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Kids
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-lg">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Clothing</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Clothing</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Blouses & Shirts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Coats & Jackets</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Dresses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hoodies & Sweats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Denim</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jeans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jumpers & Cardigans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Leggings</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Shoes & Boots</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Shoes & Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Branded Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Heels</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Trainers</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Sandals</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Wide Fit Shoes</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Bags & Accessories</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Bags & Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Bags & Purses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Luggage</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Belts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hair Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jewellery</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Travel Accessories</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Collections</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Collections</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Occasionwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Going Out</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Workwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Holiday Shop</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jean Fit Guide</a>
																		</li>
																	</ul>

																</div>
																<div className="col-4 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">Sales</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu w-100">

										{/* <!-- Tabs --> */}
										<form className="mb-2 mb-lg-0 border-bottom-lg">
											<div className="container">
												<div className="row">
													<div className="col-12">

														{/* <!-- Nav --> */}
														<nav className="nav nav-tabs nav-overflow font-size-xs border-bottom border-bottom-lg-0">
															<a className="nav-link text-uppercase active" data-toggle="tab" href="#navTab">
																Women
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Men
															</a>
															<a className="nav-link text-uppercase" data-toggle="tab" href="#navTab">
																Kids
															</a>
														</nav>

													</div>
												</div>
											</div>
										</form>

										{/* <!-- Tab content --> */}
										<div className="card card-lg">
											<div className="card-body">
												<div className="tab-content">
													<div className="tab-pane fade show active" id="navTab">
														<div className="container">
															<div className="row">
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Clothing</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Clothing</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Blouses & Shirts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Coats & Jackets</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Dresses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hoodies & Sweats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Denim</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jeans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jumpers & Cardigans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Leggings</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Shoes & Boots</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Shoes & Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Branded Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Heels</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Trainers</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Sandals</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Wide Fit Shoes</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Bags & Accessories</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Bags & Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Bags & Purses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Luggage</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Belts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Hair Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jewellery</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Travel Accessories</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Collections</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">All Collections</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Occasionwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Going Out</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Workwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Holiday Shop</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop">Jean Fit Guide</a>
																		</li>
																	</ul>

																</div>
																<div className="col-4 d-none d-lg-block">

																	{/* <!-- Card --> */}
																	<div className="card">

																		{/* <!-- Image --> */}
																		<img className="card-img" src="/assets/img/products/product-110.jpg" alt="..." />

																		{/* <!-- Overlay --> */}
																		<div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
																			<div className="text-center">
																				<a className="btn btn-white stretched-link" href="/shop">
																					Shop Sweaters <i className="fe fe-arrow-right ml-2"></i>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								{/* <li className="nav-item dropdown">
									<!-- Toggle -->
									<a className="nav-link" data-toggle="dropdown" href="#">Blog</a>

									<!-- Menu -->
									<div className="dropdown-menu">
										<div className="card card-lg">
											<div className="card-body">
												<ul className="list-styled font-size-sm">
													<li className="list-styled-item">
														<a className="list-styled-link" href="/blog.html">Blog</a>
													</li>
													<li className="list-styled-item">
														<a className="list-styled-link" href="/blog-post.html">Blog Post</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li> */}
							</ul>

							{/* <!-- Nav --> */}
							<ul className="navbar-nav flex-row navbar-icons-desktop">
								<li className="nav-item">
									<a className="nav-link" data-toggle="modal" href="#modalSearch">
										<i className="fe fe-search"></i>
									</a>
								</li>
								<li className="nav-item ml-lg-n4">
								<Link className="nav-link" to="/account-orders">
									<i className="fe fe-user"></i>
								</Link>
								</li>
								<li className="nav-item ml-lg-n4">
									<Link className="nav-link" to="/account-wishlist">
										<i className="fe fe-star"></i>
									</Link>
								</li>
								<li className="nav-item ml-lg-n4">
									<a className="nav-link" data-toggle="modal" href="#modalShoppingCart">
										<span data-cart-items="2">
											<i className="fe fe-shopping-bag"></i>
										</span> 
									</a>
								</li>
							</ul>

						</div>

					</div>
				</nav>
			</div>
    )
  }
}