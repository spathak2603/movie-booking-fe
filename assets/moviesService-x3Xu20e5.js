import{b as o}from"./index-DAsIOk7P.js";const i=o.injectEndpoints({endpoints:s=>({getAllMovies:s.query({query:()=>"/movies/get-all-movies",transformResponse:e=>e.data,providesTags:["MOVIES"]}),getSingleMovieById:s.query({query:e=>`/movies/get-movie-by-id/${e}`,transformResponse:e=>e.data,providesTags:["MOVIES"]}),addNewMovie:s.mutation({query:e=>({url:"/movies/add-movie",method:"POST",body:e}),invalidatesTags:["MOVIES"]})}),overrideExisting:!1}),{useGetAllMoviesQuery:a,useGetSingleMovieByIdQuery:r,useAddNewMovieMutation:v}=i;export{v as a,a as u};
