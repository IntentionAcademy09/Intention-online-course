import { Link, useParams} from "react-router-dom";
import { courses } from "../data/course";
import Lesson from '../icons/lesson.png'
import Video from '../icons/mp4.png'

function CourseDetails(){
    const {id} = useParams()
    const course = courses.find((item)=> item.id === Number(id))
    if (!course){
        return(
            <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Kurs topilmadi
                </h1>
            </div>
        )
    }
    return(
       <div className="min-h-screen bg-green-100">
        <section className="bg-green-200">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid items-center gap-10 md:grid-cols-2">
                    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-blue-600">
                        {course.level}
                    </span>
                    <h1 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
                        {course.title}
                    </h1>
                    <p className="mt-5 text-lg text-gray-600 leading-8">
                        {course.description}
                    </p>
                    <div className="mt-6 flex gap-4">
                        <div className="rounded-lg bg-white px-4 py-3 flex items-center gap-3 shadow-sm">
                         <i className="fa-solid fa-chalkboard"></i>  {course.lesson} ta
                        </div>
                        <div className="rounded-lg bg-white px-4  flex items-center gap-3 py-3 shadow-sm">
                        <i className="fa-solid fa-video"></i> Video darslar
                        </div>
                    </div>
                         <Link to={`lesson/1`} className="mt-8 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">
                    Kursni boshlash
                    </Link>
                    <div>
                        <img src={course.image} className="h-80 w-full rounded-2xl object-contain shadow-lg" alt={course.description} />
                    </div>
                    </div>
                </div>
        </section>
        {/* courses information */}

        <section className="mx-auto max-w-7xl px-6 py-12 ">
            <div className="grid gap-10 md:grid-cols-3">
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold">
                        Kurs haqida
                    </h2>
                    <p className="mt-4 leading-8 text-gray-800">
                      Onlayn kurslar — zamonaviy bilim va ko‘nikmalarni internet orqali o‘rganishning qulay usuli. Ushbu kurslarda siz HTML, CSS, JavaScript va React JS kabi web dasturlash texnologiyalarini o‘rganib, o‘z veb-saytlaringizni yaratishni boshlashingiz mumkin. Istalgan joyda va o‘zingizga qulay vaqtda bilim oling, amaliy tajribangizni oshiring va IT sohasida yangi imkoniyatlarga yo‘l oching.
                    </p>
                    <h2 className="mt-10 text-3xl font-bold">
                        Kursda nimalarni o'rganasiz ?
                    </h2>
                    <div className="mt-5 space-y-3">
                        <div className="rounded-lg bg-white p-4 shadow-sm">
                     <i className="fa-solid fa-tags"></i>    Dasturlash asoslari
                        </div>
                        <div className="rounded-lg bg-white p-4 shadow-sm">
                       <i className="fa-solid fa-tags"></i>     Amaliy loyihalar
                        </div>
                         <div className="rounded-lg bg-white p-4 shadow-sm">
                       <i className="fa-solid fa-tags"></i>   Real loyihalar bilan ishlash
                        </div>
                         <div className="rounded-lg bg-white p-4 shadow-sm">
                       <i className="fa-solid fa-tags"></i>     Zamonaviy texnologiyalar
                        </div>

                    </div>

                </div>
            </div>
        </section>
       </div>
    )
}
export default CourseDetails