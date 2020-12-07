import React, {Component} from 'react'

import Navbar from "../Navbar"
import Footer from '../Footer'

import { Link } from "react-router-dom"

export default class AccountAddressPage extends Component{
  render(){
    return (
			<div className="accountorderspage">
				<Navbar />

				
				{/* <!-- BREADCRUMB --> */}
				<nav class="py-5">
					<div class="container">
						<div class="row">
							<div class="col-12">

								{/* <!-- Breadcrumb --> */}
								<ol class="breadcrumb mb-0 font-size-xs text-gray-400">
									<li class="breadcrumb-item">
										<a class="text-gray-400" href="index.html">Home</a>
									</li>
									<li class="breadcrumb-item active">
										My Account
									</li>
								</ol>

							</div>
						</div>
					</div>
				</nav>

				{/* <!-- CONTENT --> */}
				<section class="pt-7 pb-12">
					<div class="container">
						<div class="row">
							<div class="col-12 text-center">

								{/* <!-- Heading --> */}
								<h3 class="mb-10">My Account</h3>

							</div>
						</div>
						<div class="row">
							<div class="col-12 col-md-3">

								<nav class="mb-10 mb-md-0">
									<div class="list-group list-group-sm list-group-strong list-group-flush-x">
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-orders">
											Orders
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-wishlist">
											Wishlist
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-personal-info">
											Personal Info
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle active" to="account-address">
											Addresses
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="account-payment">
											Payment Methods
										</Link>
										<Link className="list-group-item list-group-item-action dropright-toggle" to="/login">
											Logout
										</Link>
									</div>
								</nav>


							</div>
							<div class="col-12 col-md-9 col-lg-8 offset-lg-1">
								<div class="row">
									<div class="col-12 col-lg-6">

										{/* <!-- Card --> */}
										<div class="card card-lg bg-light mb-8">
											<div class="card-body">

												{/* <!-- Heading --> */}
												<h6 class="mb-6">
													Shipping Address
												</h6>

												{/* <!-- Text --> */}
												<p class="text-muted mb-0">
													Daniel Robinson <br/>
													3997 Raccoon Run <br/>
													Kingston <br/>
													45644 <br/>
													United States <br/>
													6146389574
												</p>

												{/* <!-- Action --> */}
												<div class="card-action card-action-right">

													{/* <!-- Button --> */}
													<a class="btn btn-xs btn-circle btn-white-primary" href="account-address-edit.html">
														<i class="fe fe-edit-2"></i>
													</a>

													{/* <!-- Button --> */}
													<button class="btn btn-xs btn-circle btn-white-primary">
														<i class="fe fe-x"></i>
													</button>

												</div>

											</div>
										</div>

									</div>
									<div class="col-12 col-lg-6">

										{/* <!-- Card --> */}
										<div class="card card-lg bg-light mb-8">
											<div class="card-body">

												{/* <!-- Heading --> */}
												<h6 class="mb-6">
													Billing Address
												</h6>

												{/* <!-- Text --> */}
												<p class="text-muted mb-0">
													Daniel Robinson <br/>
													3997 Raccoon Run <br/>
													Kingston <br/>
													45644 <br/>
													United States <br/>
													6146389574
												</p>

												{/* <!-- Action --> */}
												<div class="card-action card-action-right">

													{/* <!-- Button --> */}
													<a class="btn btn-xs btn-circle btn-white-primary" href="account-address-edit.html">
														<i class="fe fe-edit-2"></i>
													</a>

													{/* <!-- Button --> */}
													<button class="btn btn-xs btn-circle btn-white-primary">
														<i class="fe fe-x"></i>
													</button>

												</div>

											</div>
										</div>

									</div>
									<div class="col-12">

										{/* <!-- Button --> */}
										<a class="btn btn-block btn-lg btn-outline-border" href="account-address-edit.html">
											Add Address <i class="fe fe-plus"></i>
										</a>

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