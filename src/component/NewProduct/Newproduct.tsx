import airblade from "../../assets/images/xe/air blade.png"

const Newproduct = () => {
  return (
    <div>
        <section className="latest top">
            <div className="scontainer text-center ">
                <div className="heading">
                    <h1>Latest Popular Bike</h1>
                    <div className="lines flex1">
                        <div className="line"> <i className="fas fa-circle"></i> </div>
                        <button>50% OFF</button>
                        <div className="line line2"> <i className="fas fa-circle"></i> </div>
                    </div>
                </div>

                <div className="content md:grid md:grid-rows-2  top flex flex-col">
                    <div className="box p-2 md:p-8 rounded-xl border border-gray-300 transition duration-500 hover:border-green-500 cursor-pointer">
                        <div className="img relative flex justify-center">
                            <img src={airblade} alt="" />
                            <div className="flex1">
                                <i className="fas fa-heart "></i>
                            </div>
                        </div>

                        <div className="detalis ">
                            <h3>Aerion Carrbo Helmet</h3>
                            <p>(Fashion , Twin Disc)</p>
                            <h2 className="font-normal text-green-600 mx-0 my-5">$699 <span>$799</span> </h2>
                            <button className="m-0 mt-5">Buy Now</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src={airblade} alt="" />
                            <div className="flex1">
                                <label>50%</label>
                                <i className="fas fa-heart"></i>
                            </div>
                        </div>

                        <div className="detalis">
                            <h3>Aerion Carrbo Helmet</h3>
                            <p>(Fashion , Twin Disc)</p>
                            <h2>$699 <span>$799</span> </h2>
                            <button>Buy Now</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src={airblade} alt="" />
                            <div className="flex1">
                                <label>50%</label>
                                <i className="fas fa-heart"></i>
                            </div>
                        </div>

                        <div className="detalis">
                            <h3>Aerion Carrbo Helmet</h3>
                            <p>(Fashion , Twin Disc)</p>
                            <h2>$699 <span>$799</span> </h2>
                            <button>Buy Now</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src={airblade} alt="" />
                            <div className="flex1">
                                <label>50%</label>
                                <i className="fas fa-heart"></i>
                            </div>
                        </div>

                        <div className="detalis">
                            <h3>Aerion Carrbo Helmet</h3>
                            <p>(Fashion , Twin Disc)</p>
                            <h2>$699 <span>$799</span> </h2>
                            <button>Buy Now</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src={airblade} alt="" />
                            <div className="flex1">
                                <label>50%</label>
                                <i className="fas fa-heart"></i>
                            </div>
                        </div>

                        <div className="detalis">
                            <h3>Aerion Carrbo Helmet</h3>
                            <p>(Fashion , Twin Disc)</p>
                            <h2>$699 <span>$799</span> </h2>
                            <button>Buy Now</button>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img">
                            <img src={airblade} alt="" />
                            <div className="flex1">
                                <label>50%</label>
                                <i className="fas fa-heart"></i>
                            </div>
                        </div>

                        <div className="detalis">
                            <h3>Aerion Carrbo Helmet</h3>
                            <p>(Fashion , Twin Disc)</p>
                            <h2>$699 <span>$799</span> </h2>
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section> 

    </div>
  )
}

export default Newproduct
