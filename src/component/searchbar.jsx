const Searchbar = () => {
    return (
        <div className="flex items-center">
            <div>
              <form class="max-w-sm mx-auto">
              <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                 <option selected>Choose a country</option>
                 <option value="US">United States</option>
                 <option value="CA">Canada</option>
                 <option value="FR">France</option>
                 <option value="DE">Germany</option>
              </select>
              </form>
            </div>
            <div class="relative max-w-sm">
                 <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                   <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                   </svg>
                 </div>
                 <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Check-In"/>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
              </div>
              <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Check-out"/>
            </div>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	            width="800px" height="800px" viewBox="0 0 98.736 98.736"
	                            xml:space="preserve">
                <g>
	                <g>
		                <path d="M26.417,56.739c0-5.115,1.688-9.838,4.528-13.656c-2.974-2.673-6.893-4.313-11.205-4.313
		             	c-9.272,0-16.789,7.518-16.789,16.789c0,0,3.95,35.276,16.789,35.276c4.962,0,8.592-5.274,11.184-11.739
		             	c-3.025-9.953-4.248-19.888-4.488-22.026L26.417,56.739z"/>
		                <path d="M19.74,37.554c5.617,0,10.503-3.125,13.02-7.729c-2.513-3.413-4.006-7.619-4.006-12.173c0-2.066,0.313-4.06,0.882-5.943
		             	c-2.625-2.358-6.088-3.808-9.896-3.808c-8.188,0-14.826,6.639-14.826,14.827C4.914,30.915,11.552,37.554,19.74,37.554z"/>
		                <path d="M78.996,38.77c-4.312,0-8.23,1.64-11.205,4.313c2.842,3.818,4.528,8.541,4.528,13.656l-0.019,0.33
		             	c-0.24,2.14-1.463,12.073-4.488,22.026c2.592,6.465,6.222,11.739,11.184,11.739c12.839,0,16.789-35.276,16.789-35.276
		             	C95.785,46.288,88.268,38.77,78.996,38.77z"/>
		                <path d="M65.977,29.824c2.517,4.604,7.401,7.729,13.02,7.729c8.188,0,14.826-6.639,14.826-14.826
		             	c0-8.188-6.639-14.827-14.826-14.827c-3.809,0-7.271,1.449-9.896,3.808c0.568,1.884,0.883,3.877,0.883,5.943
		             	C69.982,22.205,68.489,26.411,65.977,29.824z"/>
		                <path d="M49.368,36.751c-11.039,0-19.988,8.949-19.988,19.988c0,0,4.704,41.997,19.988,41.997s19.987-41.997,19.987-41.997
		             	C69.355,45.7,60.407,36.751,49.368,36.751z"/>
		                <circle cx="49.368" cy="17.651" r="17.651"/>
	                </g>
                </g>
                </svg>
              </div>
              <input name="Guests" type="number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Guests"/>
            </div>
                         

        </div>
    )
}