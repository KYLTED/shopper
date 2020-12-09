import React, {Component} from 'react'

import Navbar from "../Navbar"
import Footer from '../Footer'

import Promo from '../Promo'

export default class HomePage extends Component{
	componentDidMount(){
		let scripts = [
			"./assets/libs/flickity/dist/flickity.pkgd.min.js",
			"./assets/libs/flickity-fade/flickity-fade.js",
			"./assets/js/theme.min.js",
		]

		function addScripts(index: number){
			if(scripts[index] != null){
				setTimeout(() => {
					const script = document.createElement("script");
					script.src = scripts[index];
					script.async = true;
			
					document.body.appendChild(script);
					addScripts(index + 1);
				}, 1000);
			}
		}
		addScripts(0)
	}
  render(){
    return (
			<div className="homepage"> 
				<Navbar />
				<Promo />

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
															<input type="radio" id="productOneColorOne" name="productOneColor" className="custom-control-input" defaultChecked />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productOneImg" data-slide="0" style={{color: "beige"}} htmlFor="productOneColorOne"></label>
														</div>
														<div className="custom-control custom-control-inline custom-control-color ml-n2">
															<input type="radio" id="productOneColorTwo" name="productOneColor" className="custom-control-input" />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productOneImg" data-slide="1" style={{color: "black"}} htmlFor="productOneColorTwo"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productOneSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productOneSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productOneSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productOneSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productOneSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productOneSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productOneSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productOneSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productOneSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productOneSizeFive">8.5</label>
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
															<input type="radio" id="productTwoColorOne" name="productTwoColor" className="custom-control-input" defaultChecked />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productTwoImg" data-slide="0" style={{color: "red"}} htmlFor="productTwoColorOne"></label>
														</div>
														<div className="custom-control custom-control-inline custom-control-color ml-n2">
															<input type="radio" id="productTwoColorTwo" name="productTwoColor" className="custom-control-input" />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productTwoImg" data-slide="1" style={{color: "white"}} htmlFor="productTwoColorTwo"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productTwoSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productTwoSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productTwoSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productTwoSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productTwoSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productTwoSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productTwoSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productTwoSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productTwoSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productTwoSizeFive">8.5</label>
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
															<input type="radio" id="productThreeColorOne" name="productThreeColor" className="custom-control-input" defaultChecked />
															<label className="custom-control-label" style={{color: "#f9f9f9"}} htmlFor="productThreeColorOne"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productThreeSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productThreeSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productThreeSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productThreeSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productThreeSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productThreeSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productThreeSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productThreeSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productThreeSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productThreeSizeFive">8.5</label>
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
															<input type="radio" id="productFourColorOne" name="productFourColor" className="custom-control-input" defaultChecked />
															<label className="custom-control-label" style={{color: "#f9f9f9"}} htmlFor="productFourColorOne"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFourSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productFourSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFourSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productFourSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFourSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productFourSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFourSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productFourSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFourSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productFourSizeFive">8.5</label>
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
															<input type="radio" id="productFiveColorOne" name="productFiveColor" className="custom-control-input" defaultChecked />
															<label className="custom-control-label" style={{color: "yellow"}} htmlFor="productFiveColorOne"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFiveSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productFiveSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFiveSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productFiveSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFiveSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productFiveSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFiveSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productFiveSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productFiveSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productFiveSizeFive">8.5</label>
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
															<input type="radio" id="productSixColorOne" name="productSixColor" className="custom-control-input" defaultChecked />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productSixImg" data-slide="0" style={{color: "beige"}} htmlFor="productSixColorOne"></label>
														</div>
														<div className="custom-control custom-control-inline custom-control-color ml-n2">
															<input type="radio" id="productSixColorTwo" name="productSixColor" className="custom-control-input" />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productSixImg" data-slide="1" style={{color: "black"}} htmlFor="productSixColorTwo"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSixSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productSixSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSixSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productSixSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSixSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productSixSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSixSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productSixSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSixSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productSixSizeFive">8.5</label>
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
															<input type="radio" id="productSevenColorOne" name="productSevenColor" className="custom-control-input" defaultChecked />
															<label className="custom-control-label" style={{color: "black"}} htmlFor="productSevenColorOne"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSevenSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productSevenSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSevenSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productSevenSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSevenSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productSevenSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSevenSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productSevenSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productSevenSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productSevenSizeFive">8.5</label>
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
															<input type="radio" id="productEightColorOne" name="productEightColor" className="custom-control-input" defaultChecked />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productEightImg" data-slide="0" style={{color: "black"}} htmlFor="productEightColorOne"></label>
														</div>
														<div className="custom-control custom-control-inline custom-control-color ml-n2">
															<input type="radio" id="productEightColorTwo" name="productEightColor" className="custom-control-input" />
															<label className="custom-control-label" data-toggle="flickity" data-target="#productEightImg" data-slide="1" style={{color: "red"}} htmlFor="productEightColorTwo"></label>
														</div>
													</div>
													<div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productEightSizeOne" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productEightSizeOne">6</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productEightSizeTwo" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productEightSizeTwo">6.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productEightSizeThree" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productEightSizeThree">7</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productEightSizeFour" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productEightSizeFour">7.5</label>
														</div>
														<div className="custom-control custom-control-inline custom-control-text font-size-xs">
															<input type="radio" id="productEightSizeFive" name="sizeRadio" className="custom-control-input" />
															<label className="custom-control-label" htmlFor="productEightSizeFive">8.5</label>
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

				<Footer />
			</div>
    )
  }
}