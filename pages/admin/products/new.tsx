import Creatable  from "react-select/creatable";
import Select from "react-select";
import Navbar from "../../../components/admin/navbar";
import { AuthedPage } from "../../../types/authed-page";
import { useState } from "react";

import axios from 'axios'

import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button'

const NewProduct: AuthedPage = () => {

    const [formData, setFormData] = useState<{
        title: string,
        price: number,
        quantity: number,
        tags: string[],
        category: string,
        options: {
            size: {values: string[], selected: boolean}
        }
    }>({
        title:    "",
        price:    0,
        quantity: 0,
        tags:     [],
        category: "",
        options: {
            size: {
                selected: false,
                values: []
            }
        }

    })

    const [optionsChecked, setOptionsChecked] = useState<boolean>(false)
    const [productOptions, setProductOptions] = useState<{size: {done: boolean, values: string[]}}>({
        size: {
            done: false,
            values: []
        }
    })

    const options = [{value: "Size", label: "Size"}, {value: "Color", label: "Color"}]

    const onSubmit = (formData: {title: string, quantity: number, price: number, tags: string[], category: string, options: {size: {values: string[]}}}) => {
        axios.post(`/api/products/new`, formData)
        .then(res => console.log(res))
    }       

    return (
        <div className="min-h-screen flex">
            <Navbar activeTab="/products/new"/>
            <div className="w-9/12 flex items-center flex-col">
                <h1 className="text-xl font-semibold ">New Product</h1>
                <form className="bg-white filter drop-shadow-lg w-9/12 rounded-md px-[10%] py-4">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField id="outlined-basic" label="Title" value={formData.title} variant="outlined" required sx={
                                {
                                    width: 'calc(50% - 8px)'
                                }
                            }/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Quantity" value={formData.quantity} variant="outlined" required fullWidth />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="outlined-basic" label="Price" value={formData.price} variant="outlined" required fullWidth/>
                        </Grid>

                        <Grid item xs={12}>
                            <h1>Tags</h1>
                            <Creatable name="tags" isMulti className="" placeholder="Start typing..."/>
                        </Grid>
                        <Grid item xs={12}>
                            <h1>Category</h1>
                            <Creatable placeholder="Start typing..."/>
                        </Grid>
                        <Grid item xs={12} className="my-4">
                            <hr />
                        </Grid>
                        <Grid item xs={12}>
                            <h1>This product features options</h1>
                            <Checkbox value={optionsChecked} onChange={(e) => {
                                setOptionsChecked(e.target.checked)
                            }}/>

                            {optionsChecked && <div>
                                <hr className="my-2" />
                                <span>Option name</span>
                                <Select options={options} defaultValue={options[0]} onChange={(e) => {
                                    if(e?.value === 'Size') {
                                        setFormData({
                                            ...formData,
                                            options: {
                                                ...formData.options,
                                                size: {
                                                    ...formData.options.size,
                                                    selected: true,

                                                }
                                            }
                                        })
                                    }
                                }}/>

                                <br/>

                                <span>Option value</span>

                                <Creatable isMulti onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        options: {
                                            ...formData.options,
                                            size: {
                                                ...formData.options.size,
                                                values: e.map((value) => {return (value as any).value}) as string[]
                                            }
                                        }
                                    })
                                }}/>
                                
                                <br />
                            </div>}
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" className="bg-indigo-500" onClick={(e) => {
                                onSubmit({
                                    ...formData
                                })
                            }}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}

export default NewProduct;