import Creatable  from "react-select/creatable";
import Select from "react-select";
import Navbar from "../../../components/admin/navbar";
import { AuthedPage } from "../../../types/authed-page";
import { useState } from "react";

const NewProduct: AuthedPage = () => {

    const [formData, setFormData] = useState<{
        title: string,
        price: string,
        quantity: string,
        tags: [],
        category: string,
        Options: [{name: 'Size' | 'Material', values: string[]}?, {name: 'Size' | 'Material', values: string[]}?]
    }>({
        title:    "",
        price:    "",
        quantity: "",
        tags:     [],
        category: "string",
        Options: [
            {
                name: 'Size',
                values: []
            }
        ]

    })

    const options = [{value: "Size", label: "Size"}]

    return (
        <div className="min-h-screen flex">
            <Navbar activeTab="/products/new"/>
            <div className="w-9/12 flex items-center flex-col">
                <h1 className="text-xl font-semibold ">New Product</h1>
                <form className="bg-white filter drop-shadow-lg w-9/12 h-72 rounded-md">
                        <label htmlFor="name">Name</label>
                        <input name="name" className="border rounded-lg"></input>
                        <br/>
                        <label htmlFor="tags">tags</label>
                        <Creatable name="tags" isMulti className="w-9/12"/>

                        <h1 className="text-lg font-semibold mt-10">Options</h1>

                        <Select options={options} defaultValue={options[0]}/>
                        <input placeholder="medium" onChange={() => {setFormData({
                            ...formData,
                            Options: [
                                {
                                    name: 'Size',
                                    values: []
                                },
                                
                            ]
                        })}}/>

                </form>
            </div>
        </div>
    )
}

export default NewProduct;