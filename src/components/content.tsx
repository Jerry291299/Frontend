import React, { useEffect, useState } from "react";
import { getAllproducts } from "../service/products";
import { Iproduct } from "../interface/products";
import { Pagination } from "antd";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import { Icategory } from "../interface/category";
import { getAllCategories } from "../service/category";

type Props = {};

const Content = (props: Props) => {
  const [status, setStatus] = useState(true);
  const [products, setProduct] = useState<Iproduct[]>([]);
  const [category, setCategory] = useState<Icategory[]>([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data1 = await getAllproducts();
        const data2 = await getAllCategories()
        setProduct(data1);
        setCategory(data2);
        
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    
    
  }, [setProduct, setCategory ]);
  
  const handleClick = () => {
    setStatus(!status);
  };
  const buttonClick = () => {
    setPage(page + 1);
  };
  const buttonClickprev = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    
    fetch("http://localhost:28017/product")
      .then(async (res) => {
        const data = await res.json();
        setProduct(data);
        console.log(data, "log res");
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <>
      <Banner />
      <div className="Container bg-[#F7F7F7]">
        <div className="font-[sans-serif]">
          <div className="p-4 mx-auto lg:max-w-6xl max-w-xl md:max-w-full">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
              Product List:
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products?.slice(0, 8).map((product: Iproduct, index: number) => (
                <div className="" key={index}>
                  <Link to={"/product/" + product._id}>
                    <div className="border bg-white rounded-lg p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
                      <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18px"
                          className="fill-gray-800 inline-block"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          />
                        </svg>
                      </div>
                      <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                        <img
                          src={product.img}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="text-center mt-4">
                        <h3 className="text-lg font-extrabold text-gray-800">
                          {product.name}
                        </h3>
                        <div className="flex items-center">
                          <svg
                            className="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-yellow-300 me-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                         
                          <span className="w-1 h-1  mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                          <p className="text-[15px]">(73 reviews)</p>
                        </div>
                        <h4 className="text-2xl text-gray-800 font-bold mt-4">
                          ${product.price}
                          {/* <span className="text-gray-400 ml-2 font-medium">$15</span> */}
                        </h4>
                        <button
                          type="button"
                          className="w-full flex items-center justify-center gap-3 mt-6 px-4 py-2.5 bg-transparent hover:bg-gray-200 text-base text-[#333] border-2 font-semibold border-[#333] rounded-xl"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px"
                            height="20px"
                            viewBox="0 0 512 512"
                          >
                            <path
                              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                              data-original="#000000"
                            />
                          </svg>
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <Pagination defaultCurrent={1} total={
              products.length
            } 
            pageSize={3}
            onChange={ (e) => {console.log(e, "test e");
            }
            }/>
          </div>
        </div>

        <div className="minibanner py-[20px] grid grid-cols-2 gap-2">
          <div className="ban1 flex relative">
            <div className="img">
              <img
                className=""
                src="https://demo-morata.myshopify.com/cdn/shop/files/3_1.png?v=1700467765&width=3000"
              />
            </div>
            <div className="absolute px-[40px] py-[40px]">
              <div className="font-bold text-[30px] pb-[10px]">
                Console & Game Pad
              </div>
              <div className="text-[20px] font-bold">
                New Arrivals in{" "}
                <span className="text-cyan-600">Accessories</span> At Best in
                Prices
              </div>
              <div className="text-[20px] pt-[15px]">
                Sale 40% Off this week
              </div>
            </div>
          </div>

          <div className="ban1 flex relative">
            <div className="img">
              <img
                className=""
                src="https://demo-morata.myshopify.com/cdn/shop/files/3_2.png?v=1700467765&width=3000"
              />
            </div>
            <div className="absolute px-[40px] py-[40px]">
              <div className="font-bold text-[30px] pb-[5px]">
                Gift Special <span className="text-cyan-600	">2024</span>
              </div>
              <div className="text-[20px] font-bold">
                Professional Hair Dryer <br />
                By Andy Kim
              </div>
              <div className="text-[15px] pt-[5px]">Sale 40% Off this week</div>
            </div>
          </div>
        </div>

        <div className="product2 w-[100%]">
          <div className="card flex ">
            <div className="productcate flex border relative w-[25%]">
              <div className="">
                <img
                  className=""
                  src="https://demo-morata.myshopify.com/cdn/shop/files/bg_coll_3_1.png?v=1700471089&width=3000"
                  alt=""
                />
              </div>
              <div className="absolute pl-[20px]">
                <h2 className="pb-[15px] text-[25px] border-b-4 border-amber-600">
                  Categories
                </h2>
                <div className="pt-[10px]">
                  {category?.slice(0, 10).map((category: Icategory) => (
                    <p className=" py-[3px]" key={category._id}>
                      {category?.name}
                      
                      
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="card2 grid grid-cols-4 pl-[5px] flex w-[75%]">
              {products?.slice(9, 13).map((product: Iproduct, index: number) => (
                <div className="" key={index}>
                  <div className="border bg-white rounded-lg p-6 cursor-pointer hover:-translate-y-2 transition-all relative">
                    <div className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        className="fill-gray-800 inline-block"
                        viewBox="0 0 64 64"
                      >
                        <path
                          d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <div className="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                      <img
                        src={product.img}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-lg font-extrabold text-gray-800">
                        <Link to={"/product/" + product._id}>
                          {product.name}
                        </Link>
                      </h3>
                      <h4 className="text-2xl text-gray-800 font-bold mt-4">
                        ${product.price}
                        {/* <span className="text-gray-400 ml-2 font-medium">$15</span> */}
                      </h4>
                      <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 mt-6 px-4 py-2.5 bg-transparent hover:bg-gray-200 text-base text-[#333] border-2 font-semibold border-[#333] rounded-xl"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                            data-original="#000000"
                          />
                        </svg>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
