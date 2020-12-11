import React, {Component} from 'react'

import Navbar from "../Navbar"
import Footer from '../Footer'

import Promo from '../Promo'
import Geral from '../../app/controls/Geral'

export default class HomePage extends Component{
	componentDidMount(){
		Geral.loadScripts();
	}
  render(){
    return (
			<div className="homepage"> 
				<Navbar />
				<Promo />

				{/* <!-- CONTENT --> */}
				<section className="pt-7">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-6">

								{/* <!-- Card --> */}
								<div className="card mb-7">

									{/* <!-- Badge --> */}
									<div className="badge badge-white card-badge">
										<time className="text-uppercase" dateTime="2019-06-20">Jun 20</time>
									</div>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/blog/blog-1.jpg" alt="..." />

									{/* <!-- Body --> */}
									<div className="card-body px-0">

										{/* <!-- Heading --> */}
										<h5>So isn't land signs greater void face replenish.</h5>

										{/* <!-- Text --> */}
										<p className="mb-0 text-gray-500">
											Midst one brought greater also morning green saying had good. Open stars
											day let over gathered, grass face one every light of under.
										</p>

										{/* <!-- Button --> */}
										<a className="btn btn-link stretched-link px-0 text-reset" href="blog-post.html">
											Read More <i className="fe fe-arrow-right ml-2"></i>
										</a>

									</div>

								</div>

							</div>
							<div className="col-12 col-md-6">

								{/* <!-- Card --> */}
								<div className="card mb-7">

									{/* <!-- Badge --> */}
									<div className="badge badge-white card-badge">
										<time className="text-uppercase" dateTime="2019-06-20">Jun 20</time>
									</div>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/blog/blog-4.jpg" alt="..." />

									{/* <!-- Body --> */}
									<div className="card-body px-0">

										{/* <!-- Heading --> */}
										<h5>Sea good every which said first divided.</h5>

										{/* <!-- Text --> */}
										<p className="mb-0 text-gray-500">
											From fruit shall stars over. Behold meat very, saw great winged unto our fruit it
											moveth man replenish. Meat place is so fruit.
										</p>

										{/* <!-- Button --> */}
										<a className="btn btn-link stretched-link px-0 text-reset" href="blog-post.html">
											Read More <i className="fe fe-arrow-right ml-2"></i>
										</a>

									</div>

								</div>

							</div>
							</div>
						</div>
				</section>

				{/* <!-- ARRIVALS --> */}
				<section className="py-12">
					<div className="container">
						<div className="row">
							<div className="col-12">

								{/* <!-- Heading --> */}
								<h2 className="mb-10 text-center display-4">Fashion Designers at Hand</h2>

							</div>
						</div>
					</div>
					<div className="flickity-page-dots-progress" data-flickity='{"pageDots": true}'>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-heart"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-6.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Cotton floral print Dress</a> <br/>
									<span className="text-muted">$40.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-heart"></i>
									</button>

									{/* <!-- Badge --> */}
									<span className="badge badge-dark card-badge card-badge-left text-uppercase">
										Sale
									</span>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-10.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Suede cross body Bag</a> <br/>
									<span className="font-size-xs text-gray-350 text-decoration-line-through">$85.00</span>
									<span className="text-primary">$49.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-heart"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-32.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Cotton leaf print Shirt</a> <br/>
									<span className="text-muted">$65.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-heart"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-7.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Leather Sneakers</a> <br/>
									<a className="text-primary" href="#">Select Options</a>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-heart"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-11.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Another fine dress</a> <br/>
									<span className="text-muted">$99.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-heart"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-33.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Baseball Cap</a> <br/>
									<span className="text-muted">$10.00</span>
								</div>

							</div>
						</div>

						{/* <!-- Item --> */}
						<div className="col" style={{maxWidth: "300px"}}>
							<div className="card">

								{/* <!-- Image --> */}
								<div className="card-img">

									{/* <!-- Action --> */}
									<button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right" data-toggle="button">
										<i className="fe fe-heart"></i>
									</button>

									{/* <!-- Button --> */}
									<button className="btn btn-xs btn-block btn-dark card-btn" data-toggle="modal" data-target="#modalProduct">
										<i className="fe fe-eye mr-2 mb-1"></i> Quick View
									</button>

									{/* <!-- Image --> */}
									<img className="card-img-top" src="assets/img/products/product-49.jpg" alt="..." />

								</div>

								{/* <!-- Body --> */}
								<div className="card-body font-weight-bold text-center">
									<a className="text-body" href="product.html">Leather sneakers</a> <br/>
									<span className="text-muted">$19.00</span>
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
								<img src="/assets/img/products/product-38.jpg" alt="..." className="img-fluid my-12" />

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
									<img src="/assets/img/products/product-39.jpg" alt="..." className="img-fluid my-12" />

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
									<img className="brand-img" src="/assets/img/brands/gray-350/mango.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="/assets/img/brands/gray-350/zara.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="/assets/img/brands/gray-350/reebok.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="/assets/img/brands/gray-350/asos.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="/assets/img/brands/gray-350/stradivarius.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="/assets/img/brands/gray-350/adidas.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="/assets/img/brands/gray-350/bershka.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="/assets/img/brands/gray-350/forever21.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="/assets/img/brands/gray-350/esprit.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="/assets/img/brands/gray-350/converse.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="shop.html">
									<img className="brand-img" src="/assets/img/brands/gray-350/calvin-klein.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="/assets/img/brands/gray-350/joop.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="/assets/img/brands/gray-350/h&m.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="/assets/img/brands/gray-350/only.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="/assets/img/brands/gray-350/guess.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="/assets/img/brands/gray-350/river-island.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="/assets/img/brands/gray-350/victorias-secret.svg" alt="..." />
								</a>

							</div>
							<div className="col-6 col-sm-4 col-md-3 col-lg-2">

								{/* <!-- Brand --> */}
								<a className="brand lift mb-7 text-center" href="#!">
									<img className="brand-img" src="/assets/img/brands/gray-350/topshop.svg" alt="..." />
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