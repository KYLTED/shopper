import React, {Component} from 'react'

import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo.png";

export default class Navbar extends Component<{className?:string}>{

  render(){
    return (
			<div className="loginpage">
				{/* <!-- NAVBAR --> */}
				<div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
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
									<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
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
									<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">English</a>

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
						{/* <!-- Brand --> */}
						<a className="navbar-brand" href="/">
							<img src={Logo} className="nav-logo"/>
						</a>

						{/* <!-- Toggler --> */}
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						{/* <!-- Collapse --> */}
						<div className="collapse navbar-collapse" id="navbarCollapse">

							{/* <!-- Nav --> */}
							<ul className="navbar-nav mx-auto navbar-logo-link-container">
								<li className="nav-item dropdown">

									{/* <!-- Toggle --> */}
									<a className="nav-link" href="/">Home</a>
								</li>
								<li className="nav-item dropdown position-static">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">Catalog</a>

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
																			<a className="list-styled-link" href="/shop.html">All Clothing</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Blouses & Shirts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Coats & Jackets</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Dresses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Hoodies & Sweats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Denim</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Jeans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Jumpers & Cardigans</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Leggings</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Shoes & Boots</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-6 mb-md-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">All Shoes & Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Branded Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Boots</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Heels</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Trainers</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Sandals</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Shoes</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Wide Fit Shoes</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Bags & Accessories</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">All Bags & Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Bags & Purses</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Luggage</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Belts</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Hats</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Hair Accessories</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Jewellery</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Travel Accessories</a>
																		</li>
																	</ul>

																</div>
																<div className="col-6 col-md">

																	{/* <!-- Heading --> */}
																	<div className="mb-5 font-weight-bold">Collections</div>

																	{/* <!-- Links --> */}
																	<ul className="list-styled mb-0 font-size-sm">
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">All Collections</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Occasionwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Going Out</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Workwear</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Holiday Shop</a>
																		</li>
																		<li className="list-styled-item">
																			<a className="list-styled-link" href="/shop.html">Jean Fit Guide</a>
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
																				<a className="btn btn-white stretched-link" href="/shop.html">
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
									<a className="nav-link" data-toggle="dropdown" href="#">Shop</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu" style={{minWidth: "650px"}}>
										<div className="card card-lg">
											<div className="card-body">
												<div className="row">
													<div className="col">

														{/* <!-- Heading --> */}
														<div className="mb-5 font-weight-bold">Shop</div>

														{/* <!-- Links --> */}
														<ul className="list-styled mb-7 font-size-sm">
															<li className="list-styled-item">
																<a className="list-styled-link" href="/shop">
																	Link A
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" href="/shop">
																	Link B
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" href="/shop">
																	Link C
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" href="/shop">
																	Link D
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" href="/shop">
																	Link E
																</a>
															</li>
														</ul>

														{/* <!-- Heading --> */}
														<div className="mb-5 font-weight-bold">Product</div>

														{/* <!-- Links --> */}
														<ul className="list-styled font-size-sm">
															<li className="list-styled-item">
																<a className="list-styled-link" href="/product/1">
																	Product 1
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" href="/product/1">
																	Product 2
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" href="/product/3">
																	Product 3
																</a>
															</li>
														</ul>

													</div>
													<div className="col">

														{/* <!-- Heading --> */}
														<div className="mb-5 font-weight-bold">Support</div>

														{/* <!-- Links --> */}
														<ul className="list-styled mb-7 font-size-sm">
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/shopping-cart">
																	Shopping Cart
																</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/checkout">
																	Checkout
																</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/order-completed">
																	Order Completed
																</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/shipping-and-returns">
																	Shipping & Returns
																</Link>
															</li>
														</ul>

														{/* <!-- Heading --> */}
														<div className="mb-5 font-weight-bold">Account</div>

														{/* <!-- Links --> */}
														<ul className="list-styled font-size-sm">
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/account-order">Order</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/account-orders">Orders</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/account-wishlist">Wishlist</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/account-personal-info">Personal Info</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/account-address">Addresses</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/account-address-edit">Addresses: New</Link>
															</li>
														</ul>

													</div>
													<div className="col">

														{/* <!-- Links --> */}
														<ul className="list-styled mb-7 font-size-sm">
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/account-payment">Payment</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/account-payment-edit">Payment: New</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/account-payment-choose">Payment: Choose</Link>
															</li>
															<li className="list-styled-item">
																<Link className="list-styled-link" to="/login">Login</Link>
															</li>
														</ul>

														{/* <!-- Heading --> */}
														<div className="mb-5 font-weight-bold">Modals</div>

														{/* <!-- Links --> */}
														<ul className="list-styled font-size-sm">
															<li className="list-styled-item">
																<a className="list-styled-link" data-toggle="modal" href="#modalNewsletterHorizontal">
																	Newsletter: Horizontal
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" data-toggle="modal" href="#modalNewsletterVertical">
																	Newsletter: Vertical
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" data-toggle="modal" href="#modalProduct">
																	Product
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" data-toggle="modal" href="#modalSearch">
																	Search
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" data-toggle="modal" href="#modalShoppingCart">
																	Shopping Cart
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" data-toggle="modal" href="#modalSizeChart">
																	Size Chart
																</a>
															</li>
															<li className="list-styled-item">
																<a className="list-styled-link" data-toggle="modal" href="#modalWaitList">
																	Wait List
																</a>
															</li>
														</ul>

													</div>
												</div>
											</div>
										</div>
									</div>


								</li>
								<li className="nav-item dropdown">

									{/* <!-- Toggle --> */}
									<a className="nav-link" data-toggle="dropdown" href="#">Pages</a>

									{/* <!-- Menu --> */}
									<div className="dropdown-menu">
										<div className="card card-lg">
											<div className="card-body">
												<ul className="list-styled font-size-sm">
													<li className="list-styled-item">
														<Link className="list-styled-link" to="/about">About</Link>
													</li>
													<li className="list-styled-item">
														<Link className="list-styled-link" to="/contact-us">Contact Us</Link>
													</li>
													<li className="list-styled-item">
														<Link className="list-styled-link" to="/faq">FAQ</Link>
													</li>
													<li className="list-styled-item">
														<Link className="list-styled-link" to="/404">404</Link>
													</li>
												</ul>
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
							<ul className="navbar-nav flex-row">
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