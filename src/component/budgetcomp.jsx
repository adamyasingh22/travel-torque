const Budgetcomp = (props)=> {
    return (
        
            
            <div class="flex items-center mb-4 ml-2 justify-between">
                <div className="">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                <label for="default-checkbox" class="ms-2 text-sm font-small text-black">{props.money}</label>
                </div>
                <div className="pr-2">
                <p className="">{props.number}</p>
                </div>
           
            </div>
    )
}
export default Budgetcomp;