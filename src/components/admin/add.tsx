import { Form, FormProps, Input, Select, SelectProps } from "antd";
import React, { useState } from "react";
import { addProduct } from "../../service/products";
import { Iproduct } from "../../interface/products";
import { useNavigate } from "react-router-dom";

type Props = {};

const Add = (props: Props) => {
  const [Name, setName] = useState<string>("");
  const [Price, setPrice] = useState<number>(0);
  const [Img, setImg] = useState<string>("");
  const [Category, setCategory] = useState<string>("");
  const [ Products, setProducts] = useState<Iproduct[]>([])
  const navigate = useNavigate();

  type LabelRender = SelectProps["labelRender"];

  const options = [
    { label: "Tea", value: "Tea" },
    { label: "Coffee", value: "Coffee" },
    { label: "Iceblend", value: "Iceblend" },
    { label: "Soft drink", value: "Soft drink" },
  ];
  const labelRender: LabelRender = (props) => {
    const { label, value } = props;

    if (label) {
      return value;
    }
    return <span>Please choose the type of drink: </span>;
  };
  const onFinish = async (values : any) => {
    console.log('Success:', values);
    
    const product = await addProduct(values)
    console.log(product);
    
    const newproducts = [product]
    setProducts(newproducts)
    setName('')
    setImg('')
    setPrice(0)
    setCategory('')
  
    navigate('/admin/success')
  
    
  
  
  };
  return (
    <>
      <div className="space-y-6 font-[sans-serif] max-w-md mx-auto">
        <Form  onFinish={onFinish} >
          <div>
            <label className="mb-2 text-2xl text-black block">
              Coffee name:
            </label>
            <Form.Item
             
              name="Name"
              rules={[
                { required: true, message: "Please input your Coffeename!" },
              ]}
            >
              <Input className="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
              placeholder="Enter Coffee name"/>
            </Form.Item>
          </div>
          <div>


            <label className="mb-2 text-sm text-black block">
              Your price ($):
            </label>
            <div className="relative flex items-center">
            <Form.Item
             
             name="Price"
             rules={[
               { required: true, message: "Please input your Coffee price!" },
             ]}
           >
             <Input className="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
             placeholder="Enter Price $$$"/>
           </Form.Item>
              <div className="absolute left-4"></div>
            </div>


            <label className="mb-2 text-sm text-black block">Your Image:</label>
            <div className="relative flex items-center">
            <Form.Item
             
             name="Img"
             rules={[
               { required: true, message: "Please input your Coffee image!" },
             ]}
           >
             <Input className="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
             placeholder="Enter Coffee image"/>
           </Form.Item>
              <div className="absolute left-4"></div>
            </div>

            <div className="pt-[20px]">
            <Form.Item
             
             name="Category"
             rules={[
               { required: true, message: "Please input your Coffee image!" },
             ]}
           >
              <Select
                labelRender={labelRender}
                defaultValue="1"
                style={{ width: "100%" }}
                options={options}
              />
              </Form.Item>
            </div>
          </div>
          <button
            type="submit"
            className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Thêm mới sản phẩm
          </button>
        </Form>
      </div>
    </>
  );
};

export default Add;

