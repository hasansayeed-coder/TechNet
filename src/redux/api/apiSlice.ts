import { getDefaultMiddleware } from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const api = createApi({
    reducerPath : 'api' ,
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000'}) , 
    endpoints: (builder) => ({
        getProducts : builder.query({
            query : () => '/products' ,
        }) ,
        getSingleProduct : builder.query({
            query : (id) => `/product/${id}` ,
        }) ,
        
    })
})

export const {useGetProductsQuery , useGetSingleProductQuery} = api ; 