import { Route, Routes } from 'react-router-dom'
import Courses from './pages/course'
import CourseDetails from './pages/courseDetail'
function App(){
return(
   <Routes>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/courses/:id' element={<CourseDetails/>}/>
   </Routes>
)
}

export default App