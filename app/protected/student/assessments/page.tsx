"use client"

import { Api } from "@/app/lib/restapi/endpoints";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import Link from 'next/link';
import {useRouter} from "next/navigation"

const CourseAssessments = () => {


      const router = useRouter();
    const [student, setStudent] = useState();
    const [studentEnrolledCourses,setStudentEnrolledCourses] = useState();
    const [assessmentList, setAssessmentList] = useState([]);
    const [courses, setCourses] = useState();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    


    const studentAssessmentsByCourses = async (ids:string) => {
       const assessments = await Api.GET_StudentAssessmentsByCourses(ids);
       setAssessmentList(assessments);
       debugger;
    }

    const  getStudentCourses = async () => {
        try {
        const cookies = new Cookies();
          var student = cookies.get('param-lms-user');
          console.log("Id ", student.id)
          const course = await Api.GET_StudentCoursesById(student.id);
           const pluck = (property:any) => (element:any) => element[property];
            const arrayList = course.data!.enrolledCourses.map(pluck('id'))
           // Create a new URLSearchParams object
            var params = new URLSearchParams();

            // Add each item in the list as a 'courses' parameter
            arrayList.forEach(function(id) {
                params.append('courses', id);
            });

            // Get the final query string
            var queryString = params.toString();

            console.log("queryString", queryString)

           studentAssessmentsByCourses(queryString);
        } catch (error) {
          console.error('Error:', error);        }
      }  

      const handleClick = () => {
 
      };

    useEffect(() => {

        const cookies = new Cookies();

        const userData = cookies.get("param-lms-user");
        console.log("userData", userData);
        setStudent(userData);
        getStudentCourses();
        

    }, []);

    const takeAssessment = (id:string) => {
      router.push(`/protected/student/assessment?id=${id}`);

    }

  

    return (
        <div className="page__container page-section">
        <div className="page-separator">
          <div className="page-separator__text">Assessments</div>
        </div>
        <div className="card dashboard-area-tabs p-relative o-hidden mb-lg-32pt">
          <div className="card-header p-0 nav">
            <div className="row no-gutters" role="tablist">
              <div className="col-auto">
                <a
                  href="#"
                  data-toggle="tab"
                  role="tab"
                  aria-selected="true"
                  className="dashboard-area-tabs__tab card-body d-flex flex-row align-items-center justify-content-start active"
                >
                  <span className="h2 mb-0 mr-3">{assessmentList ? assessmentList.length : ''}</span>
                  <span className="flex d-flex flex-column">
                    <strong className="card-title">All</strong>
                    <small className="card-subtitle text-50">Assessment</small>
                  </span>
                </a>
              </div>
              
            </div>
          </div>
          <div
            className="table-responsive"
            data-toggle="lists"
            data-lists-sort-by="js-lists-values-date"
            data-lists-sort-desc="true"
            data-lists-values='["js-lists-values-lead", "js-lists-values-project", "js-lists-values-status", "js-lists-values-budget", "js-lists-values-date"]'
          >
            <table className="table mb-0 thead-border-top-0 table-nowrap">
              <thead>
                <tr>
                  <th style={{ width: 18 }} className="pr-0">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input js-toggle-check-all"
                        data-target="#projects"
                        id="customCheckAll"
                        data-domfactory-upgraded="toggle-check-all"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckAll"
                      >
                        <span className="text-hide">Toggle all</span>
                      </label>
                    </div>
                  </th>
                  <th style={{ width: 150 }}>
                    <a
                      href="javascript:void(0)"
                      className="sort"
                      data-sort="js-lists-values-project"
                    >
                      Title
                    </a>
                  </th>
                  <th>
                    <a
                      href="javascript:void(0)"
                      className="sort"
                      data-sort="js-lists-values-lead"
                    >
                    Instructor
                    </a>
                  </th>
                  <th style={{ width: 48 }}>
                    <a
                      href="javascript:void(0)"
                      className="sort"
                      data-sort="js-lists-values-status"
                    >
                      Status
                    </a>
                  </th>
                  <th style={{ width: 48 }}>
                  </th>
                  <th style={{ width: 24 }} />
                </tr>
              </thead>
              <tbody className="list" id="projects">
                {
                assessmentList?.map((item:any, index:number) => (
                    <tr key={index}>
                    <td className="pr-0">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input js-check-selected-row"
                          id="customCheck1_1"
                          data-domfactory-upgraded="check-selected-row"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1_1"
                        >
                          <span className="text-hide">Check</span>
                        </label>
                      </div>
                    </td>
                    <td>
                      <div
                        className="media flex-nowrap align-items-center"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <div className="avatar avatar-sm mr-8pt">
                          <span className="avatar-title rounded bg-primary text-white">
                          
                          </span>
                        </div>
                        <div className="media-body">
                          <div className="d-flex flex-column">
                            <small className="js-lists-values-project">
                              <strong>{item?.data?.courseTitle || 'Sample Course'}</strong>
                            </small>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div
                        className="media flex-nowrap align-items-center"
                        style={{ whiteSpace: "nowrap" }}
                      >
                        <div className="avatar avatar-32pt mr-8pt">
                        </div>
                        <div className="media-body">
                          <div className="d-flex align-items-center">
                            <div className="flex d-flex flex-column">
                              <p className="mb-0">
                                <strong className="js-lists-values-lead">
                                {item?.data?.instructorName}
                                </strong>
                              </p>
                              <small className="js-lists-values-email text-50">
                                {/* Quality Assurance */}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column">
                        <small className="js-lists-values-status text-50 mb-4pt">
                          {item?.data?.status === 0 ? 'In Progress' : item?.data?.status === 1 ? 'Completed' : '-'}
                        </small>
                        <span className="indicator-line rounded bg-warning" />
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column">
                        <small className="js-lists-values-budget">
                          {
                             item?.data.status === 0 ? (
                              <span></span>
                            ) : (
                              <button className="btn btn-primary">
                              <a onClick={() => takeAssessment(item?.data.id)}>
                                
                                <span style={{color:'white'}}>Take Assessment</span>
                              </a>
                                </button>
                            )
                          }
                         
                          
                        </small>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column">
                        <small className="js-lists-values-date">
                        </small>
                      </div>
                    </td>
                    <td className="text-right">
                      <a href="" className="text-50">
                        <i className="material-icons">more_vert</i>
                      </a>
                    </td>
                  </tr>
                ))
                }
               
                
              </tbody>
            </table>
          </div>
          
          {/* <div class="card-body bordet-top text-right">
        15 <span class="text-50">of 1,430</span> <a href="#" class="text-50"><i class="material-icons ml-1">arrow_forward</i></a>
      </div> */}
        </div>
        </div>
       
    )
    

}

export default CourseAssessments;