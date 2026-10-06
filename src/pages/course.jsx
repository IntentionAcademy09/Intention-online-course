import { Link } from "react-router-dom";
import { courses } from "../data/course";

function Courses(){
    return(
        <div className="min-h-screen bg-gray-50">
            <div className="bg-blue-50">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
                        Kurslar
                    </span>
                    <h1 className="mt-5 text-4xl font-bold text-gray-900">
                        Barcha kurslar
                    </h1>
                    <p className="mt-3 text-lg text-gray-600">
                        O'zingizga kerakli kursni tanlang va dasturlashni mukammal o'rganing !
                    </p>
                </div>
            </div>
            {/* Courses */}
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {
                        courses.map((item)=> (
                            <div className="owerflow-hidden hover:translate-y-3 hover:shadow-lg duration-300 transition shadow-xl rounded-2xl " key={item.id}>
                                <img src={item.image} alt={item.title} className="h-52 w-full object-contain" />
                                <div className="p-5">
                                    <span className="rounded-full text-sm font-medium text-green-600">{item.level}</span>
                                    <h1 className="mt-4 text-2xl font-bold text-gray-900">{item.title}</h1>
                                    <p className="mt-2 text-gray-800">{item.caption}</p>
                                    <p className="mt-4 mb-4 text-gray-800 ">Darslar soni : {item.lesson}</p>
                                     <span className="rounded-full bg-blue-100  mt-6 px-4 py-2 text-sm font-medium text-green-600">{item.price}</span>
                                     <Link to={`/courses/${courses.id}`} className="mt-5 block rounded-xl bg-green-600 py-3 text-center text-white font-semibold">
                                     Batafsil
                                     </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Courses