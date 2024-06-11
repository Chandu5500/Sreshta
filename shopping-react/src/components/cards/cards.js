
export function Cards(){
    var courses=[
        {Title: "AWS", Poster: "AWS.png", Topics:["Web","API","AMC"]},
        {Title: "Digital Marketing", Poster: "DM.jpeg", Topics:["Web","API","AMC"]},
        {Title: "Data Science", Poster: "DS.jpeg", Topics:["Web","API","AMC"]},
        {Title: "ASP.net", Poster: "ASP.jpeg", Topics:["Web","API","AMC"]}
    ]
    return(
        <div className="container-fluid">
            <h2>Courses</h2>
            <div className="d-flex flex-wrap">
                {
                    courses.map(course=>
                        <div className="card m-2 p-2" key={course.Poster}>
                            <img src={course.Poster} className="card-img-top"/>
                            <div  className="class-header" key={course.Title}>
                                <h3 >{course.Title}</h3>                             
                            </div>
                            <div className="card-body" >
                                <ul>
                                    {
                                        course.Topics.map(Topic=>
                                            <li>{Topic}</li>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary w-100">Join Course</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}