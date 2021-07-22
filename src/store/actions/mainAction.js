import axios from 'axios';
export const GET_COVID_DETAILS = 'GET_COVID_DETAILS';

// API END POINT
const URL = "https://api.covid19india.org/data.json";

// GET DETAILS
  export const getCovidDetails = (value) => async (dispatch) => {
	return new Promise (async(reslove, reject) =>{

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		axios
            .get(URL, config)
			.then((res) => {
				const resJsonData = res.data;
				//console.log("sdsdfsdfsdf", resJsonData)
				if(value === 'All') {
					let result = resJsonData.cases_time_series
					let overAllCases = result.pop()
					dispatch({
						type: GET_COVID_DETAILS,
						payload: overAllCases,
					});
				} else {
					resJsonData.statewise.filter((item) => {
						if(item.statecode === value) {
							dispatch({
								type: GET_COVID_DETAILS,
								payload: item,
							});
						}
					})
				}
                reslove(resJsonData)
			})
			.catch((error) => {
				reject(error)
			});
	});
}
