
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3003/' }),

  tagTypes: ["Products"],

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: (result) => result ? [...result.map(({id}) =>({
        type: "Products", id
      })),{type: "Products",id: "LIST"}] : [{type: "Products", id: "LIST"}]
    }),
        
    deleteProducts: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: `DELETE`
      }),
      invalidatesTags: (result, error, id) =>[{
        type: "Products",
        id
      }]
    }),
  }),
})

export const { useGetProductsQuery , useDeleteProductsMutation } = productsApi