import {gql, request} from "graphql-request";
import {ICourse} from "@/types";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getCourses = async () => {
    const query = gql`
      query MyQuery {
        courses {
          title
          cost
        image {
          url
        }
        slug
        content{
            html
        }
       }
    }
   `
    const {courses} = await request<{courses : ICourse[]}>(graphqlAPI, query)
    return courses
}

export const getDetailedCourse = async (slug: string) => {
    const query = gql`
		query MyQuery ($slug: String!){
  			course(where: {slug: $slug}) {
    		image {
      			url
    		}
    		content {
    		    html
    		}
    		slug
    		title
    		cost
    	}	
	}	
`
    const {course} = await request<{course: ICourse}>(graphqlAPI, query, {slug})
    return course
}

export const getSearchCourses = async (title: string) => {
    const query = gql`
		query MyQuery($title: String!) {
			courses(where: { title_contains: $title }) {
				title
				image {
					url
				}
				slug
			}
		}
	`
    const { courses } = await request<{ courses: ICourse[] }>(graphqlAPI, query, {
        title,
    })
    return courses
}