import Budgetcomp from "../component/budgetcomp";
import Header from "../component/header";
import Budget from "../data/budget.json";
import Popular from "../data/popular.json";
import Activities from "../data/activities.json";


function budgetentry(item){
    return(
        <Budgetcomp
           id = {item.key}
           money = {item.range}
           number = {item.property}
           />
    )
}

function popularentry(data){
    return(
        <Budgetcomp
          id = {data.key}
          money = {data.range}
          number = {data.property}
        />  
    )
}

function activityentry(activity){
    return(
        <Budgetcomp
          id = {activity.key}
          money = {activity.range}
          number = {activity.property}
          />
    )
}
   

const Searchresult = () => {
    return (
        <div>
            <div className="w-full">
                <Header color={""} />
            </div>
            <div className="flex p-8 space-x-6">
                <div className="w-1/6">
                   <div className="bg-gray-100 text-center pb-3 pt-2 space-y-3 rounded-lg">
                      <p>Search by property name</p>
                      <input placeholder="eg. beach" className=""></input>
                   </div>
                   <p className="mt-2">Filter by</p>
                   <div className=" bg-white rounded-lg text-center pb-3 pt-2 space-y-3 shadow-md mt-4">
                      <p className="bg-gray-100 p-2 ">Budget per day</p>
                      {Budget.map(budgetentry)}
                   </div>
                   <div className="mt-4 bg-white rounded-lg shadow-md">
                      <p className="text-xl p-2 bg-gray-100 rounded-md">Rating</p>
                      <p className="text-xs p-2">Show only rating more then</p>
                      <div className="flex rounded-md justify-between p-2">
                        <button class="">1⭐</button>
                        <button>2⭐</button>
                        <button>3⭐</button>
                        <button>4⭐</button>
                        <button>5⭐</button>
                      </div>
                   </div>
                   <div className=" bg-white rounded-lg text-center pb-3 pt-2 space-y-3 shadow-md mt-4">
                      <p className="bg-gray-100 p-2 ">Popular filter</p>
                      {Popular.map(popularentry)}
                   </div>
                   <div className=" bg-white rounded-lg text-center pb-3 pt-2 space-y-3 shadow-md mt-4">
                      <p className="bg-gray-100 p-2 ">Activites</p>
                      {Activities.map(activityentry)}
                   </div>
                </div>
                <div className="w-2/3">
                    <p>this is a travel website</p>
                </div>
            </div>
        </div>
    )
}
export default Searchresult ; 