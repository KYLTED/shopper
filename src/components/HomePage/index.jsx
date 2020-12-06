import React, {Component} from 'react'

export default class HomePage extends Component{
  render(){
    return (
			<div className="homepage">
				{/* <!-- WELCOME --> */}
				<section className="position-relative mb-4 py-13">
					{/* <!-- Cover --> */}
					<div className="container-cover">
						<div className="container-fluid">
							<div className="row">
								<div className="col d-none d-xl-block bg-cover" style={{backgroundImage: "url(./assets/img/covers/cover-6.jpg)"}}></div>
								<div className="col d-none d-lg-block bg-cover" style={{backgroundImage: "url(./assets/img/covers/cover-7.jpg)"}}></div>
								<div className="col d-none d-md-block bg-cover" style={{backgroundImage: "url(./assets/img/covers/cover-8.jpg)"}}></div>
								<div className="col bg-cover" style={{backgroundImage: "url(./assets/img/covers/cover-9.jpg)"}}></div>
							</div>
						</div>
					</div>
					{/* <!-- Content --> */}
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12 col-md-8 col-lg-6 col-xl-5">
								{/* <!-- Card --> */}
								<div className="card card-xl">
									<div className="card-body text-center">
										{/* <!-- Heading --> */}
										<h4 className="mb-6">Summer Collection</h4>
										{/* <!-- Text --> */}
										<p className="mb-0">
											Appear, dry there darkness they're seas, dry waters thing fly midst above.
										</p>
										{/* <!-- Button --> */}
										<a className="btn btn-dark btn-sm mb-n12" href="shop.html">
											Shop Now <i className="fe fe-arrow-right ml-2"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- SALE --> */}
				<section className="py-12 bg-primary bg-pattern">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">

								{/* <!-- Heading--> */}
								<h1 className="display-4 mb-9 text-white">
									Sale up to 50% off
								</h1>

								{/* <!-- Buttons --> */}
								<a className="btn btn-outline-white border-2 px-md-8 m-2 m-md-4" href="shop.html">Dresses</a>
								<a className="btn btn-outline-white border-2 px-md-8 m-2 m-md-4" href="shop.html">Tops & T-Shirts</a>
								<a className="btn btn-outline-white border-2 px-md-8 m-2 m-md-4" href="shop.html">Blouses & Shirts</a>
								<a className="btn btn-outline-white border-2 px-md-8 m-2 m-md-4" href="shop.html">Jeans & Trousers</a>
								<a className="btn btn-outline-white border-2 px-md-8 m-2 m-md-4" href="shop.html">Jeans & Trousers</a>
								<a className="btn btn-outline-white border-2 px-md-8 m-2 m-md-4" href="shop.html">Shoes</a>
								<a className="btn btn-outline-white border-2 px-md-8 m-2 m-md-4" href="shop.html">Acessories</a>
								<a className="btn btn-outline-white border-2 px-md-8 m-2 m-md-4" href="shop.html">Coats & Jakets</a>
								<a className="btn btn-outline-white border-2 px-md-8 m-2 m-md-4" href="shop.html">Shorts & Skirts</a>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- TOP SELLERS --> */}
				<section className="py-12">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12 col-md-10 col-lg-8 col-xl-6">

								{/* <!-- Preheading --> */}
								<h6 className="heading-xxs mb-3 text-center text-gray-400">
									Top selling
								</h6>

								{/* <!-- Heading --> */}
								<h2 className="mb-10 text-center">Top wekeend Sellers</h2>

							</div>
						</div>
						<div className="row">
							<div className="col-6 col-sm-6 col-md-4 col-lg-3">

								{/* <!-- Card --> */}
								<div className="card mb-7" data-toggle="card-collapse">

									{/* <!-- Badge --> */}
									<div className="badge badge-white card-badge card-badge-left text-uppercase">
										New
									</div>

									{/* <!-- Image --> */}
									<div className="card-img" data-flickity='{"draggable": false}' id="productOneImg">
										<a className="d-block w-100" href="product.html">
											<img className="card-img-top" src="assets/img/products/product-5.jpg" alt="..." />
										</a>
										<a className="d-block w-100" href="product.html">
											<img className="card-img-top" src="assets/img/products/product-142.jpg" alt="..." />
										</a>
									</div>

									{/* <!-- Collapse --> */}
									<div className="card-collapse-parent">

										{/* <!-- Body --> */}
										<div className="card-body px-0 pb-0 bg-white">
											<div className="row no-gutters">
												<div className="col">

													{/* <!-- Title --> */}
													<a className="d-block font-weight-bold text-body" href="product.html">
														Leather mid-heel Sandals
													</a>

													{/* <!-- Category --> */}
													<a className="font-size-xs text-muted" href="shop.html">
														Shoes
													</a>

												</div>
												<div className="col-auto">

													{/* <!-- Price --> */}
													<div className="font-size-sm font-weight-bold text-muted">
														$129.00
													</div>

												</div>
											</div>
										</div>

										{/* <!-- Footer --> */}
										<div className="card-collapse collapse">
											<div className="card-footer px-0 bg-white">
												<form>
													<div className="mb-1">
														<div className="custom-control custom-control-inline custom-control-color">
															<input type="radio" id="productOneColorOne" name="productOneColor" className="custom-control-input" checked />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productOneImg" data-slide="0" style={{color: "beige"}} for="productOneColorOne"></label>
														</div>
														<div className="custom-control custom-control-inline custom-control-color ml-n2">
															<input type="radio" id="productOneColorTwo" name="productOneColor" className="custom-control-input" />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productOneImg" data-slide="1" style={{color: "black"}} for="productOneColorTwo"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productOneSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productOneSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productOneSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productOneSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productOneSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productOneSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productOneSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productOneSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productOneSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productOneSizeFive">8.5</label>
														</div>
													</div>
												</form>
											</div>
										</div>

									</div>

								</div>

							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-3">

								{/* <!-- Card --> */}
								<div className="card mb-7" data-toggle="card-collapse">

									{/* <!-- Image --> */}
									<div className="card-img" data-flickity='{"draggable": false}' id="productTwoImg">
										<a className="d-block w-100" href="product.html">
											<img className="card-img-top" src="assets/img/products/product-6.jpg" alt="..." />
										</a>
										<a className="d-block w-100" href="product.html">
											<img className="card-img-top" src="assets/img/products/product-143.jpg" alt="..." />
										</a>
									</div>

									{/* <!-- Collapse --> */}
									<div className="card-collapse-parent">

										{/* <!-- Body --> */}
										<div className="card-body px-0 pb-0 bg-white">
											<div className="row no-gutters">
												<div className="col">

													{/* <!-- Title --> */}
													<a className="d-block font-weight-bold text-body" href="product.html">
														Cotton floral print Dress
													</a>

													{/* <!-- Category --> */}
													<a className="font-size-xs text-muted" href="shop.html">
														Dresses
													</a>

												</div>
												<div className="col-auto">

													{/* <!-- Price --> */}
													<div className="font-size-sm font-weight-bold text-muted">
														$40.00
													</div>

												</div>
											</div>
										</div>

										{/* <!-- Footer --> */}
										<div className="card-collapse collapse">
											<div className="card-footer px-0 bg-white">
												<form>
													<div className="mb-1">
														<div className="custom-control custom-control-inline custom-control-color">
															<input type="radio" id="productTwoColorOne" name="productTwoColor" className="custom-control-input" checked />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productTwoImg" data-slide="0" style={{color: "red"}} for="productTwoColorOne"></label>
														</div>
														<div className="custom-control custom-control-inline custom-control-color ml-n2">
															<input type="radio" id="productTwoColorTwo" name="productTwoColor" className="custom-control-input" />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productTwoImg" data-slide="1" style={{color: "white"}} for="productTwoColorTwo"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productTwoSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productTwoSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productTwoSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productTwoSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productTwoSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productTwoSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productTwoSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productTwoSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productTwoSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productTwoSizeFive">8.5</label>
														</div>
													</div>
												</form>
											</div>
										</div>

									</div>

								</div>

							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-3">

								{/* <!-- Card --> */}
								<div className="card mb-7" data-toggle="card-collapse">

									{/* <!-- Badge --> */}
									<div className="badge badge-dark card-badge card-badge-left text-uppercase letter-spacing-lg">
										Sale
									</div>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-7.jpg" alt="..." />

									{/* <!-- Collapse --> */}
									<div className="card-collapse-parent">

										{/* <!-- Body --> */}
										<div className="card-body px-0 pb-0 bg-white">
											<div className="row no-gutters">
												<div className="col">

													{/* <!-- Title --> */}
													<a className="d-block font-weight-bold text-body" href="product.html">
														Leather Sneakers
													</a>

													{/* <!-- Category --> */}
													<a className="font-size-xs text-muted" href="shop.html">
														Shoes
													</a>

												</div>
												<div className="col-auto">

													{/* <!-- Price --> */}
													<div className="font-size-xs font-weight-bold text-gray-350 text-decoration-line-through">
														$115.00
													</div>
													<div className="font-size-sm font-weight-bold text-primary">
														$85.00
													</div>

												</div>
											</div>
										</div>

										{/* <!-- Footer --> */}
										<div className="card-collapse collapse">
											<div className="card-footer px-0 bg-white">
												<form>
													<div className="mb-1">
														<div className="custom-control custom-control-inline custom-control-color">
															<input type="radio" id="productThreeColorOne" name="productThreeColor" className="custom-control-input" checked />
															<label className="custom-control-label" style={{color: "#f9f9f9"}} for="productThreeColorOne"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productThreeSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productThreeSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productThreeSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productThreeSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productThreeSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productThreeSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productThreeSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productThreeSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productThreeSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productThreeSizeFive">8.5</label>
														</div>
													</div>
												</form>
											</div>
										</div>

									</div>

								</div>

							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-3">

								{/* <!-- Card --> */}
								<div className="card mb-7" data-toggle="card-collapse">

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-8.jpg" alt="..." />

									{/* <!-- Collapse --> */}
									<div className="card-collapse-parent">

										{/* <!-- Body --> */}
										<div className="card-body px-0 pb-0 bg-white">
											<div className="row no-gutters">
												<div className="col">

													{/* <!-- Title --> */}
													<a className="d-block font-weight-bold text-body" href="product.html">
														Cropped cotton Top
													</a>

													{/* <!-- Category --> */}
													<a className="font-size-xs text-muted" href="shop.html">
														Top
													</a>

												</div>
												<div className="col-auto">

													{/* <!-- Price --> */}
													<div className="font-size-sm font-weight-bold text-muted">
														$29.00
													</div>

												</div>
											</div>
										</div>

										{/* <!-- Footer --> */}
										<div className="card-collapse collapse">
											<div className="card-footer px-0 bg-white">
												<form>
													<div className="mb-1">
														<div className="custom-control custom-control-inline custom-control-color">
															<input type="radio" id="productFourColorOne" name="productFourColor" className="custom-control-input" checked />
															<label className="custom-control-label" style={{color: "#f9f9f9"}} for="productFourColorOne"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFourSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productFourSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFourSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productFourSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFourSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productFourSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFourSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productFourSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFourSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productFourSizeFive">8.5</label>
														</div>
													</div>
												</form>
											</div>
										</div>

									</div>

								</div>

							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-3">

								{/* <!-- Card --> */}
								<div className="card mb-7" data-toggle="card-collapse">

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-9.jpg" alt="..." />

									{/* <!-- Collapse --> */}
									<div className="card-collapse-parent">

										{/* <!-- Body --> */}
										<div className="card-body px-0 pb-0 bg-white">
											<div className="row no-gutters">
												<div className="col">

													{/* <!-- Title --> */}
													<a className="d-block font-weight-bold text-body" href="product.html">
														Floral print midi Dress
													</a>

													{/* <!-- Category --> */}
													<a className="font-size-xs text-muted" href="shop.html">
														Dresses
													</a>

												</div>
												<div className="col-auto">

													{/* <!-- Price --> */}
													<div className="font-size-sm font-weight-bold text-muted">
														$50.00
													</div>

												</div>
											</div>
										</div>

										{/* <!-- Footer --> */}
										<div className="card-collapse collapse">
											<div className="card-footer px-0 bg-white">
												<form>
													<div className="mb-1">
														<div className="custom-control custom-control-inline custom-control-color">
															<input type="radio" id="productFiveColorOne" name="productFiveColor" className="custom-control-input" checked />
															<label className="custom-control-label" style={{color: "yellow"}} for="productFiveColorOne"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFiveSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productFiveSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFiveSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productFiveSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFiveSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productFiveSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFiveSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productFiveSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFiveSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productFiveSizeFive">8.5</label>
														</div>
													</div>
												</form>
											</div>
										</div>

									</div>

								</div>

							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-3">

								{/* <!-- Card --> */}
								<div className="card mb-7" data-toggle="card-collapse">

									{/* <!-- Badge --> */}
									<div className="badge badge-dark card-badge card-badge-left text-uppercase letter-spacing-lg">
										Sale
									</div>

									{/* <!-- Image --> */}
									<div className="card-img" data-flickity='{"draggable": false}' id="productSixImg">
										<a className="d-block w-100" href="product.html">
											<img className="card-img-top" src="assets/img/products/product-10.jpg" alt="..." />
										</a>
										<a className="d-block w-100" href="product.html">
											<img className="card-img-top" src="assets/img/products/product-144.jpg" alt="..." />
										</a>
									</div>

									{/* <!-- Collapse --> */}
									<div className="card-collapse-parent">

										{/* <!-- Body --> */}
										<div className="card-body px-0 pb-0 bg-white">
											<div className="row no-gutters">
												<div className="col">

													{/* <!-- Title --> */}
													<a className="d-block font-weight-bold text-body" href="product.html">
														Suede cross body Bag
													</a>

													{/* <!-- Category --> */}
													<a className="font-size-xs text-muted" href="shop.html">
														Bags
													</a>

												</div>
												<div className="col-auto">

													{/* <!-- Price --> */}
													<div className="font-size-xs font-weight-bold text-gray-350 text-decoration-line-through">
														$79.00
													</div>
													<div className="font-size-sm font-weight-bold text-primary">
														$49.00
													</div>

												</div>
											</div>
										</div>

										{/* <!-- Footer --> */}
										<div className="card-collapse collapse">
											<div className="card-footer px-0 bg-white">
												<form>
													<div className="mb-1">
														<div className="custom-control custom-control-inline custom-control-color">
															<input type="radio" id="productSixColorOne" name="productSixColor" className="custom-control-input" checked />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productSixImg" data-slide="0" style={{color: "beige"}} for="productSixColorOne"></label>
														</div>
														<div className="custom-control custom-control-inline custom-control-color ml-n2">
															<input type="radio" id="productSixColorTwo" name="productSixColor" className="custom-control-input" />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productSixImg" data-slide="1" style={{color: "black"}} for="productSixColorTwo"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSixSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productSixSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSixSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productSixSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSixSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productSixSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSixSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productSixSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSixSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productSixSizeFive">8.5</label>
														</div>
													</div>
												</form>
											</div>
										</div>

									</div>

								</div>

							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-3">

								{/* <!-- Card --> */}
								<div className="card mb-7" data-toggle="card-collapse">

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-11.jpg" alt="..." />

									{/* <!-- Collapse --> */}
									<div className="card-collapse-parent">

										{/* <!-- Body --> */}
										<div className="card-body px-0 pb-0 bg-white">
											<div className="row no-gutters">
												<div className="col">

													{/* <!-- Title --> */}
													<a className="d-block font-weight-bold text-body" href="product.html">
														Printed A-line Skirt
													</a>

													{/* <!-- Category --> */}
													<a className="font-size-xs text-muted" href="shop.html">
														Skirts
													</a>

												</div>
												<div className="col-auto">

													{/* <!-- Price --> */}
													<div className="font-size-sm font-weight-bold text-muted">
														$79.00
													</div>

												</div>
											</div>
										</div>

										{/* <!-- Footer --> */}
										<div className="card-collapse collapse">
											<div className="card-footer px-0 bg-white">
												<form>
													<div className="mb-1">
														<div className="custom-control custom-control-inline custom-control-color">
															<input type="radio" id="productSevenColorOne" name="productSevenColor" className="custom-control-input" checked />
															<label className="custom-control-label" style={{color: "black"}} for="productSevenColorOne"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSevenSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productSevenSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSevenSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productSevenSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSevenSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productSevenSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSevenSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productSevenSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSevenSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productSevenSizeFive">8.5</label>
														</div>
													</div>
												</form>
											</div>
										</div>

									</div>

								</div>

							</div>
							<div className="col-6 col-sm-6 col-md-4 col-lg-3">

								{/* <!-- Card --> */}
								<div className="card mb-7" data-toggle="card-collapse">

									{/* <!-- Badge --> */}
									<div className="badge badge-white card-badge card-badge-left text-uppercase">
										New
									</div>

									{/* <!-- Image --> */}
									<div className="card-img" data-flickity='{"draggable": false}' id="productEightImg">
										<a className="d-block w-100" href="product.html">
											<img className="card-img-top" src="assets/img/products/product-12.jpg" alt="..." />
										</a>
										<a className="d-block w-100" href="product.html">
											<img className="card-img-top" src="assets/img/products/product-145.jpg" alt="..." />
										</a>
									</div>

									{/* <!-- Collapse --> */}
									<div className="card-collapse-parent">

										{/* <!-- Body --> */}
										<div className="card-body px-0 pb-0 bg-white">
											<div className="row no-gutters">
												<div className="col">

													{/* <!-- Title --> */}
													<a className="d-block font-weight-bold text-body" href="product.html">
														Heel strappy Sandals
													</a>

													{/* <!-- Category --> */}
													<a className="font-size-xs text-muted" href="shop.html">
														Shoes
													</a>

												</div>
												<div className="col-auto">

													{/* <!-- Price --> */}
													<div className="font-size-sm font-weight-bold text-muted">
														$90.00
													</div>

												</div>
											</div>
										</div>

										{/* <!-- Footer --> */}
										<div className="card-collapse collapse">
											<div className="card-footer px-0 bg-white">
												<form>
													<div className="mb-1">
														<div className="custom-control custom-control-inline custom-control-color">
															<input type="radio" id="productEightColorOne" name="productEightColor" className="custom-control-input" checked />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productEightImg" data-slide="0" style={{color: "black"}} for="productEightColorOne"></label>
														</div>
														<div className="custom-control custom-control-inline custom-control-color ml-n2">
															<input type="radio" id="productEightColorTwo" name="productEightColor" className="custom-control-input" />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productEightImg" data-slide="1" style={{color: "red"}} for="productEightColorTwo"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productEightSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productEightSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productEightSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productEightSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productEightSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productEightSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productEightSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productEightSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productEightSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" for="productEightSizeFive">8.5</label>
														</div>
													</div>
												</form>
											</div>
										</div>

									</div>

								</div>

							</div>
						</div>
						<div className="row">
							<div className="col-12">

								{/* <!-- Link  --> */}
								<div className="mt-7 text-center">
									<a className="link-underline" href="shop.html">Discover more</a>
								</div>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- MUST HAVES --> */}
				<section className="bg-light overflow-hidden">
					<div className="container">
						<div className="row no-gutters justify-content-between">
							<div className="col-12 col-md-5 col-lg-4 py-13">

								{/* <!-- Pretitle --> */}
								<h6 className="heading-xxs text-gray-400">
									Summer trends
								</h6>

								{/* <!-- Heading --> */}
								<h1 className="mb-4">Our must haves</h1>

								{/* <!-- Text --> */}
								<p className="text-gray-500 mb-8">
									Male his our upon seed had said wherein their
									i great wherein under you'll deep first multiply.
									Fish waters they're herb shall saying.
								</p>

								{/* <!-- Button --> */}
								<a className="btn btn-dark" href="shop.html">
									Shop Now <i className="fe fe-arrow-right ml-2"></i>
								</a>

							</div>
							<div className="col-12 col-md-6">

								{/* <!-- Image --> */}
								<div className="h-100 vw-50 bg-cover" style={{backgroundImage: "url(assets/img/covers/cover-10.jpg)"}}></div>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- NEW COLLECTION --> */}
				<section>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-12 col-md-4">

								{/* <!-- Image --> */}
								<img src="assets/img/products/product-38.jpg" alt="..." className="img-fluid my-12" />

							</div>
							<div className="col-12 col-md-4 text-center">

								{/* <!-- Heading --> */}
								<h2 className="mb-4">
									New 2019 Summer collection
								</h2>

								{/* <!-- Text --> */}
								<p className="mb-7 text-gray-500">
									Appear, dry there darkness they're seas, dry
									waters thing fly midst. Beast, above fly
									brought Very green.
								</p>

								{/* <!-- Link  --> */}
								<a className="link-underline" href="shop.html">Discover more</a>

							</div>
							<div className="col-12 col-md-4">

								{/* <!-- Video --> */}
								<div className="position-relative">

									{/* <!-- Poster --> */}
									<img src="assets/img/products/product-39.jpg" alt="..." className="img-fluid my-12" />

									{/* <!-- Button --> */}
									<a className="btn btn-lg btn-circle btn-white btn-hover center" data-fancybox href="https://www.youtube.com/watch?v=BGrY85i-skk">
										<i className="fas fa-play"></i>
									</a>

								</div>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- BRAND --> */}
				<section className="py-12 bg-light">
					<div className="container">
						<div className="row">
							<div className="col-12">

								{/* <!-- Heading --> */}
								<h2 className="mb-10 text-center">
									Shop by Brand
								</h2>

							</div>
						</div>
						<div className="row">
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/mango.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/zara.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/reebok.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/asos.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/stradivarius.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/adidas.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/bershka.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/forever21.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/esprit.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/converse.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="assets/img/brands/gray-350/calvin-klein.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="assets/img/brands/gray-350/joop.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="assets/img/brands/gray-350/h&m.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="assets/img/brands/gray-350/only.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="assets/img/brands/gray-350/guess.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="assets/img/brands/gray-350/river-island.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="assets/img/brands/gray-350/victorias-secret.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="assets/img/brands/gray-350/topshop.svg" alt="..." />
								</a>

							</div>
						</div>
						<div className="row">
							<div className="col-12 text-center">

								{/* <!-- Link  --> */}
								<div className="mt-10 text-center">
									<a className="link-underline" href="shop.html">Discover more</a>
								</div>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- NEW ARRIVAL --> */}
				<section>
					<div className="container py-12 border-bottom">
						<div className="row">
							<div className="col-12">

								{/* <!-- Heading --> */}
								<h2 className="mb-10 text-center">New Arrivals</h2>

								{/* <!-- Slider--> */}
								<div className="flickity-buttons-lg flickity-buttons-offset px-lg-12" data-flickity='{"prevNextButtons": true}'>

									{/* <!-- Card --> */}
									<div className="card col-12 col-md-4 mb-10">

										{/* <!-- Image --> */}
										<a href="product.html">
											<img className="card-img-top" src="assets/img/products/product-26.jpg" alt="..." />
										</a>

										{/* <!-- Body --> */}
										<div className="card-body px-0">
											<div className="d-flex">

												{/* <!-- Caption --> */}
												<div className="mr-auto">

													{/* <!-- Heading --> */}
													<div className="font-weight-bold">
														<a className="text-body" href="product.html">Striped knit Top</a>
													</div>

													{/* <!-- Text --> */}
													<div className="font-size-sm">
														<a className="text-muted" href="shop.html">Tops</a>
													</div>

												</div>

												{/* <!-- Price --> */}
												<div className="font-size-sm font-weight-bold text-muted">
													$39.00
												</div>

											</div>
										</div>

									</div>

									{/* <!-- Card --> */}
									<div className="card col-12 col-md-4 mb-10">

										{/* <!-- Image --> */}
										<a href="product.html">
											<img className="card-img-top" src="assets/img/products/product-25.jpg" alt="..." />
										</a>

										{/* <!-- Body --> */}
										<div className="card-body px-0">
											<div className="d-flex">

												{/* <!-- Caption --> */}
												<div className="mr-auto">

													{/* <!-- Heading --> */}
													<div className="font-weight-bold">
														<a className="text-body" href="product.html">Floral print Dress</a>
													</div>

													{/* <!-- Text --> */}
													<div className="font-size-sm">
														<a className="text-muted" href="shop.html">Dress</a>
													</div>

												</div>

												{/* <!-- Price --> */}
												<div className="font-size-sm font-weight-bold text-muted">
													$60.00
												</div>

											</div>
										</div>

									</div>

									{/* <!-- Card --> */}
									<div className="card col-12 col-md-4 mb-10">

										{/* <!-- Image --> */}
										<a href="product.html">
											<img className="card-img-top" src="assets/img/products/product-28.jpg" alt="..." />
										</a>

										{/* <!-- Body --> */}
										<div className="card-body px-0">
											<div className="d-flex">

												{/* <!-- Caption --> */}
												<div className="mr-auto">

													{/* <!-- Heading --> */}
													<div className="font-weight-bold">
														<a className="text-body" href="product.html">Straight Trousers with Belt</a>
													</div>

													{/* <!-- Text --> */}
													<div className="font-size-sm">
														<a className="text-muted" href="shop.html">Trousers</a>
													</div>

												</div>

												{/* <!-- Price --> */}
												<div className="font-size-sm font-weight-bold text-muted">
													$79.00
												</div>

											</div>
										</div>

									</div>

									{/* <!-- Card --> */}
									<div className="card col-12 col-md-4 mb-10">

										{/* <!-- Image --> */}
										<a href="product.html">
											<img className="card-img-top" src="assets/img/products/product-27.jpg" alt="..." />
										</a>

										{/* <!-- Body --> */}
										<div className="card-body px-0">
											<div className="d-flex">

												{/* <!-- Caption --> */}
												<div className="mr-auto">

													{/* <!-- Heading --> */}
													<div className="font-weight-bold">
														<a className="text-body" href="product.html">Fine quality jeans</a>
													</div>

													{/* <!-- Text --> */}
													<div className="font-size-sm text-muted">
														<a className="text-muted" href="shop.html">Trousers</a>
													</div>

												</div>

												{/* <!-- Price --> */}
												<div className="font-size-sm font-weight-bold text-muted">
													$69.00
												</div>

											</div>
										</div>

									</div>

								</div>

								{/* <!-- Button --> */}
								<div className="text-center">
									<a className="btn btn-dark" href="shop.html">
										Shop Now <i className="fe fe-arrow-right ml-2"></i>
									</a>
								</div>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- NEWSLETTER --> */}
				<section className="py-12">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">

								{/* <!-- Heading --> */}
								<h3>
									Subscribe to our Newsletter
								</h3>

								{/* <!-- Subheading --> */}
								<p className="mb-7 font-size-lg text-gray-500">
									Receive an exclusive 10% discount code when you signup.
								</p>

							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-12 col-md-8 col-lg-6">

								{/* <!-- Form --> */}
								<form>
									<div className="input-group">

										{/* <!-- Input --> */}
										<input className="form-control form-control-underline form-control-sm border-dark" type="email" placeholder="Enter Email *" />

										{/* <!-- Button --> */}
										<div className="input-group-append">
											<button className="btn btn-underline btn-sm border-dark" type="button">Subscribe</button>
										</div>

									</div>
								</form>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- INSTASHOP --> */}
				<section className="bg-light">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12 col-lg-4">
								<div className="row h-100">
									<div className="col-6 bg-cover" style={{backgroundImage: "url(assets/img/products/product-16.jpg)"}}></div>
									<div className="col-6 bg-cover" style={{backgroundImage: "url(assets/img/products/product-40.jpg)"}}></div>
									<div className="col-6 bg-cover" style={{backgroundImage: "url(assets/img/products/product-41.jpg)"}}></div>
									<div className="col-6 bg-cover" style={{backgroundImage: "url(assets/img/products/product-17.jpg)"}}></div>
								</div>
							</div>
							<div className="col-12 col-lg-4 py-12 px-9 text-center">

								{/* <!-- Icon --> */}
								<i className="fe fe-instagram h3 mb-6"></i>

								{/* <!-- Heading --> */}
								<h2 className="mb-6">Instashop</h2>

								{/* <!-- Text --> */}
								<p className="mb-8 font-size-lg text-muted">
									Appear, dry there darkness they're seas, dry
									waters thing fly midst. Beast, above fly
									brought Very green.
								</p>

								{/* <!-- Link --> */}
								<a href="#!" className="link-underline">Go to Instagram</a>

							</div>
							<div className="col-12 col-lg-4">
								<div className="row h-100">
									<div className="col-6 bg-cover" style={{backgroundImage: "url(assets/img/products/product-42.jpg)"}}></div>
									<div className="col-6 bg-cover" style={{backgroundImage: "url(assets/img/products/product-21.jpg)"}}></div>
									<div className="col-6 bg-cover" style={{backgroundImage: "url(assets/img/products/product-18.jpg)"}}></div>
									<div className="col-6 bg-cover" style={{backgroundImage: "url(assets/img/products/product-43.jpg)"}}></div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- FEATURES --> */}
				<section className="py-9">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-6 col-lg-3">

								{/* <!-- Item --> */}
								<div className="d-flex mb-6 mb-lg-0">

									{/* <!-- Icon --> */}
									<i className="fe fe-truck font-size-lg text-primary"></i>

									{/* <!-- Body --> */}
									<div className="ml-6">

										{/* <!-- Heading --> */}
										<h6 className="heading-xxs mb-1">
											Free shipping
										</h6>

										{/* <!-- Text --> */}
										<p className="mb-0 font-size-sm text-muted">
											From all orders over $100
										</p>

									</div>

								</div>

							</div>
							<div className="col-12 col-md-6 col-lg-3">

								{/* <!-- Item --> */}
								<div className="d-flex mb-6 mb-lg-0">

									{/* <!-- Icon --> */}
									<i className="fe fe-repeat font-size-lg text-primary"></i>

									{/* <!-- Body --> */}
									<div className="ml-6">

										{/* <!-- Heading --> */}
										<h6 className="mb-1 heading-xxs">
											Free returns
										</h6>

										{/* <!-- Text --> */}
										<p className="mb-0 font-size-sm text-muted">
											Return money within 30 days
										</p>

									</div>

								</div>

							</div>
							<div className="col-12 col-md-6 col-lg-3">

								{/* <!-- Item --> */}
								<div className="d-flex mb-6 mb-md-0">

									{/* <!-- Icon --> */}
									<i className="fe fe-lock font-size-lg text-primary"></i>

									{/* <!-- Body --> */}
									<div className="ml-6">

										{/* <!-- Heading --> */}
										<h6 className="mb-1 heading-xxs">
											Secure shopping
										</h6>

										{/* <!-- Text --> */}
										<p className="mb-0 font-size-sm text-muted">
											You're in safe hands
										</p>

									</div>

								</div>

							</div>
							<div className="col-12 col-md-6 col-lg-3">

								{/* <!-- Item --> */}
								<div className="d-flex">

									{/* <!-- Icon --> */}
									<i className="fe fe-tag font-size-lg text-primary"></i>

									{/* <!-- Body --> */}
									<div className="ml-6">

										{/* <!-- Heading --> */}
										<h6 className="mb-1 heading-xxs">
											Over 10,000 Styles
										</h6>

										{/* <!-- Text --> */}
										<p className="mb-0 font-size-sm text-muted">
											We have everything you need
										</p>

									</div>

								</div>

							</div>
						</div>
					</div>
				</section>

				{/* <!-- FOOTER --> */}
				<footer className="bg-dark bg-cover @@classList" style={{backgroundImage: "url(./assets/img/patterns/pattern-2.svg)"}}>
					<div className="py-12 border-bottom border-gray-700">
						<div className="container">
							<div className="row">
								<div className="col-12 col-md-3">

									{/* <!-- Heading --> */}
									<h4 className="mb-6 text-white">Shopper.</h4>

									{/* <!-- Social --> */}
									<ul className="list-unstyled list-inline mb-7 mb-md-0 text-gray-350">
										<li className="list-inline-item">
											<a href="#!" className="text-reset">
												<i className="fab fa-facebook-f"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href="#!" className="text-reset">
												<i className="fab fa-youtube"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href="#!" className="text-reset">
												<i className="fab fa-twitter"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href="#!" className="text-reset">
												<i className="fab fa-instagram"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a href="#!" className="text-reset">
												<i className="fab fa-medium"></i>
											</a>
										</li>
									</ul>

								</div>
								<div className="col-6 col-sm">

									{/* <!-- Heading --> */}
									<h6 className="heading-xxs mb-4 text-white">
										Support
									</h6>

									{/* <!-- Links --> */}
									<ul className="list-unstyled mb-7 mb-sm-0">
										<li>
											<a className="text-gray-300" href="./contact-us.html">Contact Us</a>
										</li>
										<li>
											<a className="text-gray-300" href="./faq.html">FAQs</a>
										</li>
										<li>
											<a className="text-gray-300" data-toggle="modal" href="#modalSizeChart">Size Guide</a>
										</li>
										<li>
											<a className="text-gray-300" href="./shipping-and-returns.html">Shipping & Returns</a>
										</li>
									</ul>

								</div>
								<div className="col-6 col-sm">

									{/* <!-- Heading --> */}
									<h6 className="heading-xxs mb-4 text-white">
										Shop
									</h6>

									{/* <!-- Links --> */}
									<ul className="list-unstyled mb-7 mb-sm-0">
										<li>
											<a className="text-gray-300" href="./shop.html">Men's Shopping</a>
										</li>
										<li>
											<a className="text-gray-300" href="./shop.html">Women's Shopping</a>
										</li>
										<li>
											<a className="text-gray-300" href="./shop.html">Kids' Shopping</a>
										</li>
										<li>
											<a className="text-gray-300" href="./shop.html">Discounts</a>
										</li>
									</ul>

								</div>
								<div className="col-6 col-sm">

									{/* <!-- Heading --> */}
									<h6 className="heading-xxs mb-4 text-white">
										Company
									</h6>

									{/* <!-- Links --> */}
									<ul className="list-unstyled mb-0">
										<li>
											<a className="text-gray-300" href="./about.html">Our Story</a>
										</li>
										<li>
											<a className="text-gray-300" href="#!">Careers</a>
										</li>
										<li>
											<a className="text-gray-300" href="#!">Terms & Conditions</a>
										</li>
										<li>
											<a className="text-gray-300" href="#!">Privacy & Cookie policy</a>
										</li>
									</ul>

								</div>
								<div className="col-6 col-sm">

									{/* <!-- Heading --> */}
									<h6 className="heading-xxs mb-4 text-white">
										Contact
									</h6>

									{/* <!-- Links --> */}
									<ul className="list-unstyled mb-0">
										<li>
											<a className="text-gray-300" href="#!">1-202-555-0105</a>
										</li>
										<li>
											<a className="text-gray-300" href="#!">1-202-555-0106</a>
										</li>
										<li>
											<a className="text-gray-300" href="#!">help@shopper.com</a>
										</li>
									</ul>

								</div>
							</div>
						</div>
					</div>
					<div className="py-6">
						<div className="container">
							<div className="row">
								<div className="col">

									{/* <!-- Copyright --> */}
									<p className="mb-3 mb-md-0 font-size-xxs text-muted">
										© 2019 All rights reserved. Designed by Unvab.
									</p>

								</div>
								<div className="col-auto">

									{/* <!-- Payment methods --> */}
									<img className="footer-payment" src="./assets/img/payment/mastercard.svg" alt="..." />
									<img className="footer-payment" src="./assets/img/payment/visa.svg" alt="..." />
									<img className="footer-payment" src="./assets/img/payment/amex.svg" alt="..." />
									<img className="footer-payment" src="./assets/img/payment/paypal.svg" alt="..." />
									<img className="footer-payment" src="./assets/img/payment/maestro.svg" alt="..." />
									<img className="footer-payment" src="./assets/img/payment/klarna.svg" alt="..." />

								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
    )
  }
}