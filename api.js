const loadCourse=async()=>{
    const res= await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`)
    const data= await res.json()
    const courses=data.data.tools;
    // console.log(courses)
}
