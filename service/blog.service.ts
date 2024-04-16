import {gql, request} from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getCourses = async () => {
    const query = gql`
    	query MyQuery {
  			courses {
  			  title
  			  author {
  			    name
  			    image {
  			      url
  			    }
  	  		}
    	  image {
    	    url
    	  }
       }
    }
   `
    const {courses} = await request<{courses : ICourse[]}>(graphqlAPI, query)
    return courses
}